/* eslint-disable react-hooks/exhaustive-deps */

import TableComponent from '../../../components/public/appointment/TableComponent';
import { Search, DropDown, PageLoader } from "../../../components/index";
import { useGetAppointmentsQuery, useGetChairsQuery, useGetShiftsQuery } from '../../../services/manager_center/appointment/GetAppointmentsSlice';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Appointment = () => {
    const user = useSelector((state) => state.user);
    const { data: appointmentsData, isSuccess: appointmentsSuccess, isLoading: appointmentsLoading } = useGetAppointmentsQuery(user.centerID);
    const { data: shiftsData, isSuccess: shiftsSuccess, isLoading: shiftsLoading } = useGetShiftsQuery(user.centerID);
    const { data: chairsData, isSuccess: chairsSuccess, isLoading: chairsLoading } = useGetChairsQuery(user.centerID);
    
    const [shift, setShift] = useState("");

    useEffect(() => {
        if (shiftsSuccess && shiftsData[0].length > 0) {
            setShift(shiftsData[0][0].name);
        }
    }, [shiftsSuccess, shiftsData]);

    const filters = [
        {
            title: "الوردية",
            array: shiftsSuccess ? shiftsData[0].map(shift => shift.name) : []
        },
    ];

    const chairNumbers = chairsSuccess ? chairsData.message.map(chair => chair.chairNumber) : [];

    const colors = {
        titleColor: "primaryColor",
        contentColor: "bgButtonColor",
        textColor: "textMenuColor"
    };

    if (appointmentsLoading || shiftsLoading || chairsLoading) {
        return (
            <div className="flex-grow md:mr-48">
                <div className="flex items-center justify-center h-screen">
                    <PageLoader />
                </div>
            </div>
        );
    }

    if (appointmentsSuccess && shiftsSuccess && chairsSuccess) {
        return (
            <div dir="rtl" className="md:mr-48 flex-grow">
                <header className="App-header mx-[3%] mt-12">
                    <div className="flex justify-between mb-3">
                        <h1 className="text-2xl font-bold mb-4 text-titleColor">جدول المواعيد</h1>
                        <div className="flex">
                            <div className="w-52 self-center">
                                <DropDown
                                    colors={colors}
                                    filter={filters[0].array}
                                    onSelect={setShift}
                                    title={shift || filters[0].title}
                                    type="shift"
                                />
                            </div>
                            <Search />
                        </div>
                    </div>
                    <TableComponent
                        appointments={appointmentsData.appointments}
                        chairNumbers={chairNumbers}
                        shift={shift}
                        role={user.role}
                    />
                </header>
            </div>
        );
    }

    return null;
};

export default Appointment;
