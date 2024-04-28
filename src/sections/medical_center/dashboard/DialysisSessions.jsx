/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Title , HorizontalLine , DialysisSession} from "../../../components/index"
import {titleSession} from "../../../data/data"


const DialysisSessions = ({data}) => {
  return (
    <div  className="mr-4 ">
        <p dir="rtl" className="text-titleColor font-bold text-2xl mb-4" >{titleSession.title}</p>
        <div className="p-2 bg-white rounded-lg shadow-lg min-h-custom ">
          <Title title={titleSession.dialysisTitle}/>
            {data.map(array=>{
                return <>
                    <HorizontalLine/>
                    <DialysisSession dialysis= {array}/> 
                </>
            })}
        </div>    
    </div>
  )
}

export default DialysisSessions
