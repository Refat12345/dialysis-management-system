/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardRecord } from "../../../../../components/index";

const PrecedentsSection = ({title,precedents}) => {
    return (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {precedents.map((data,index)=>{
                    return <CardRecord key={index} object = {data} title={title}/>
                    
                })}
                </div>
)
}

export default PrecedentsSection