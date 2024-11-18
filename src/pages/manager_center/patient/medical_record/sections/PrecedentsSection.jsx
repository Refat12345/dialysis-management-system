/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useMemo, useCallback } from "react";
import { AlertDialog, CardRecord } from "../../../../../components/index";
import { useOutletContext, useParams } from 'react-router-dom';
import PrecedentsDialog from "./PrecedentsDialog";
import Cookies from "js-cookie";

const PrecedentsSection = ({ title, type }) => {
    const [precedents, setPrecedents] = useState([]);
    const { status } = useParams();
    const medicalRecord = useOutletContext();

    useEffect(() => {
        if (type === "surgical") {
            medicalRecord.surgicalPrecedents && setPrecedents(medicalRecord.surgicalPrecedents);
        } else if (type === "pathological") {
            medicalRecord.pathologicalPrecedents && setPrecedents(medicalRecord.pathologicalPrecedents);
        } else {
            medicalRecord.pharmacologicalPrecedents && setPrecedents(medicalRecord.pharmacologicalPrecedents);
        }
    }, [type, medicalRecord]);

    const text = useMemo(() => {
        return type === "surgical" ? "جراحية" : (type === "pathological" ? "مرضية" : "دوائية");
    }, [type]);

    const renderCard = useCallback((data, index) => {
        return (Cookies.get("role") === "secretary" && status == "acceptable")  ? (
            <AlertDialog
                key={index}
                contentComponent={<PrecedentsDialog type={type} index={index} />}
                renderComponent={
                    <div className="flex h-full hover:cursor-pointer">
                        <CardRecord object={data} title={title} />
                    </div>
                }
            />
        ) : (
            <div className="flex h-full" key={index}>
                <CardRecord object={data} title={title} />
            </div>
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, title]);

    
    
    return (
        precedents.length !== 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {precedents.map((data, index) => renderCard(data, index))}
            </div>
        ) : (
            <div className="flex justify-center" style={{ height: 'calc(100vh - 73vh)' }}>
                <p className="content-center font-bold text-titleColor text-xl">{"لا يوجد سوابق " + text}</p>
            </div>
        )
    );
};

export default PrecedentsSection;
