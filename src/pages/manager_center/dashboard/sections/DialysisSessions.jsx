/* eslint-disable react/prop-types */
import
 { Title ,HorizontalLine ,DialysisSession } from "../../../../components";
import { titleSession } from "../../../../data/data";

const DialysisSessions = ({data}) => {
  let height= window.innerHeight;
  let minHeight = height > 600 ? ( height > 745 ? ( height > 830 ? "min-h-customAbove830" : "min-h-customUnder830" ) : (height > 680 ? "min-h-customUnder735" : (height > 618 ? "min-h-customUnder680" : "min-h-customUnder618") ) ) : "min-h-customUnder600";
  let responsive = height > 700 ? "mb-5" : ( height < 628 ? ( height < 600 ? "mb-5" : "mb-2" ) : "mb-3" )
  
  return (
    <div  className="mr-4 ">
        <p dir="rtl" className={`text-titleColor font-primaryBold text-2xl ${responsive}`} >{titleSession.title}</p>
        <div className={`p-2 bg-white rounded-lg shadow-lg 
        ${minHeight}
        `}>
          <Title title={titleSession.dialysisTitle}/>
            {data.map((array,index)=>{
                return <div key={index}>
                    <HorizontalLine />
                    <DialysisSession dialysis= {array} index={index}/> 
                </div>
            })}
        </div>    
    </div>
  )
}

export default DialysisSessions

