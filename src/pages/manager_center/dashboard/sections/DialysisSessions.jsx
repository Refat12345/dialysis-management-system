/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */



/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Title ,HorizontalLine ,DialysisSession } from "../../../../components";
import { titleSession } from "../../../../data/data";

const DialysisSessions = ({data}) => {
  const height= window.innerHeight;
  return (
    <div  className="mr-4 ">
        <p dir="rtl" className={`text-titleColor font-bold text-2xl ${height>700?"mb-6":(height<628?"mb-2":"mb-4")}`} >{titleSession.title}</p>
        <div className={`p-2 bg-white rounded-lg shadow-lg 
        ${height>600?(height>760?(height>830?"min-h-customAbove830":"min-h-customUnder830"):
        (height>680?"min-h-customUnder760":"min-h-customUnder680")):"min-h-customUnder600"}
         `}>
          <Title title={titleSession.dialysisTitle}/>
            {data.map((array,index)=>{
                return <>
                    <HorizontalLine />
                    <DialysisSession key={index} dialysis= {array}/> 
                </>
            })}
        </div>    
    </div>
  )
}

export default DialysisSessions

