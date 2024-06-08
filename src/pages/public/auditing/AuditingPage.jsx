/* eslint-disable react-hooks/exhaustive-deps */

import { PageLoader, PaginationComponent } from "../../../components"
import Header from "./sections/Header";
import AuditSection from "./sections/AuditSection";
import { useEffect, useState, useMemo } from "react";
import { useGetAuditingQuery } from "../../../services/manager_center/auditing/AuditingSlice";

const AuditingPage = () => {
    const { data, isSuccess, isLoading } = useGetAuditingQuery(1)
    const [auditing, setAuditing] = useState([])
    const [filter, setFilter] = useState({
        date: "",
        operation: ""
    })
    const [inputValue, setInputValue] = useState("")

    const height = window.innerHeight;
    const itemsPerPage = height > 630 ? (height > 700 ? (height > 740 ? (height > 800 ? 11 : 10) : 9) : 8) : 7

    useEffect(() => {
        if (isSuccess && data?.logs) {
            setAuditing(data.logs)
        }
    }, [isSuccess, data])

    const filteredAuditing = useMemo(() => {
        let filteredArray = auditing
        if (filter.operation !== "") {
            filteredArray = filter.operation === "العملية" ? filteredArray : filteredArray.filter((audit) =>
                audit.operation.toLowerCase().includes(filter.operation.toLowerCase()))
        }
        if (filter.date !== "") {
            filteredArray = filter.date === "التاريخ" ? filteredArray : filteredArray.filter(audit =>
                audit.date.toLowerCase().includes(filter.date.toLowerCase()))
        }
        if (inputValue !== "") {
            filteredArray = filteredArray.filter(audit =>
                audit.affectorUser.toLowerCase().includes(inputValue.toLowerCase()))
        }
        return filteredArray
    }, [filter, inputValue, auditing])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div dir="rtl" className="flex-grow md:mr-48 ">
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <PageLoader />
                </div>
            ) : isSuccess && (
                <div className="mx-[5.5%]">
                    <Header value={filter} setFilter={setFilter} setInputValue={handleInputChange} />
                    {filteredAuditing.length > 0 && (
                        <PaginationComponent
                            RenderComponent={AuditSection}
                            data={filteredAuditing}
                            itemsPerPage={itemsPerPage}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default AuditingPage
