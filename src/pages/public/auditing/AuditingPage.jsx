import { PaginationComponent  } from "../../../components"
import Header from "./sections/Header";
import { auditing } from "../../../data/data";
import AuditSection from "./sections/AuditSection";
const AuditingPage = () => {
    
    let height = window.innerHeight;
    const itemsPerPage = height>630 ?(height>700 ? ( height > 740 ? (height > 800 ? 11 :10) : 9) : 8) : 7
   
  

  return (
    <div dir="rtl" className="flex-grow md:mr-48 ">
        <div className="mx-[5.5%]">
            <Header/>
            <PaginationComponent RenderComponent={AuditSection} data={auditing} itemsPerPage={itemsPerPage}/>
        </div>
    </div>
  )
}

export default AuditingPage