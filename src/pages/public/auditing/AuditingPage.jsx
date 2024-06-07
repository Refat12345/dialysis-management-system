/* eslint-disable react-hooks/exhaustive-deps */
import { PageLoader, PaginationComponent  } from "../../../components"
import Header from "./sections/Header";

import AuditSection from "./sections/AuditSection";
import { useEffect, useState } from "react";
import { useGetAuditingQuery } from "../../../services/manager_center/auditing/AuditingSlice";
const AuditingPage = () => {
    const {data ,isSuccess , isLoading } = useGetAuditingQuery(1)
    const [auditing,setAuditing] = useState([])
    const [filter,setFilter] = useState({
      date:"",
      operation:""
    })
    const [inputValue,setInputValue] = useState("")
    const [filterAuditing,setFilterAuditing] = useState([])
    let height = window.innerHeight;
    const itemsPerPage = height>630 ?(height>700 ? ( height > 740 ? (height > 800 ? 11 :10) : 9) : 8) : 7
    
    useEffect(()=>{
      if(isSuccess){
        setAuditing(data.logs)
      }
    },[isSuccess])

    useEffect(()=>{
     if(isSuccess){
      setFilterAuditing(data.logs)
     }
  },[isSuccess])

  useEffect(() => {
    let filteredArray = auditing
    if (filter.operation !== "") {
      filteredArray = filter.operation === "العملية" ? filteredArray :filteredArray.filter(audit => audit.operation.toLowerCase().includes(filter.operation))
    }
    if (filter.date !== "") {
      filteredArray = filter.date === "التاريخ" ? filteredArray :filteredArray.filter(audit => audit.date.toLowerCase().includes(filter.date))
    }
    if (inputValue !== "") {
      filteredArray = filteredArray.filter(audit =>
        audit.affectorUser.toLowerCase().includes(inputValue.toLowerCase())
      )
    }
    setFilterAuditing(filteredArray)
  }, [filter, inputValue])

 const handleChange = (e) => {
  setInputValue(e.target.value)
 }
  

  return (
    <div dir="rtl" className="flex-grow md:mr-48 ">
        {
          isLoading ? <PageLoader/> : isSuccess &&
        <div className="mx-[5.5%]">
          <Header value={filter} setFilter={setFilter} setInputValue={handleChange}/>
          {auditing.length > 1 && <PaginationComponent RenderComponent={AuditSection} data={filterAuditing} itemsPerPage={itemsPerPage}/>}
        </div>
        }
    </div>
  )
}

export default AuditingPage