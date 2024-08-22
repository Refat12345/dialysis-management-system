/* eslint-disable react-hooks/exhaustive-deps */

import { PageLoader, PaginationComponent } from "../../../components";
import Header from "./sections/Header";
import AuditSection from "./sections/AuditSection";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useGetAuditingQuery } from "../../../services/manager_center/auditing/AuditingSlice";
import { useSelector } from "react-redux";

const AuditingPage = () => {
  const user = useSelector((state)=>state.user)
  const { data, isSuccess, isLoading } = useGetAuditingQuery(user.centerID);
  const [auditing, setAuditing] = useState([]);
  const [filter, setFilter] = useState({
    date: null,
    operation: "",
  });
  const [inputValue, setInputValue] = useState("");

  const itemsPerPage = useMemo(() => {
    const height = window.innerHeight;
    if (height > 800) return 11;
    if (height > 740) return 10;
    if (height > 700) return 9;
    if (height > 630) return 8;
    return 7;
  }, [window.innerHeight]);

  useEffect(() => {
    if (isSuccess && data?.logs) {
      setAuditing(data.logs);
    }
  }, [isSuccess, data]);



  const filteredAuditing = useMemo(() => {
    return auditing.filter((audit) => {
      const matchesOperation =
        filter.operation === "" ||
        filter.operation === "العملية" ||
        audit.operation.toLowerCase().includes(filter.operation.toLowerCase());
      let dayStr 
      let monthStr 
      let year 
      let matchesDate
      if(filter.date!=null){
        const date = new Date(filter.date.$d)  
        dayStr = date.getDate() < 10 ? "0" + date.getDate():date.getDate()
        monthStr = date.getMonth() + 1 < 10 ? "0"+(date.getMonth()+ 1) :date.getMonth() + 1
        year = date.getFullYear()
        const dateString = `${year}-${monthStr}-${dayStr}`; 
        matchesDate = audit.date === dateString
      } else {
        matchesDate = true
      }
      const matchesInput =
        inputValue === "" ||
        audit.affectorUser.toLowerCase().includes(inputValue.toLowerCase());
      return matchesOperation && matchesDate && matchesInput;
    });
  }, [filter, inputValue, auditing]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  if (isSuccess && auditing.length === 0) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <p className="font-bold text-2xl">لا يوجد سجل عمليات</p>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="flex-grow md:mr-48 ">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      ) : (
        isSuccess && (
          <div className="mx-[5.5%]">
            <Header
              value={filter}
              setFilter={setFilter}
              setInputValue={handleInputChange}
            />
            {filteredAuditing.length > 0 && (
              <PaginationComponent
                RenderComponent={AuditSection}
                data={filteredAuditing}
                itemsPerPage={itemsPerPage}
              />
            )}
          </div>
        )
      )}
    </div>
  );
};

export default AuditingPage;
