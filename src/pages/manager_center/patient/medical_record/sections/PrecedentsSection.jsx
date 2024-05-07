/* eslint-disable no-unused-vars */
import { CardRecord } from "../../../../../components/index";

const PrecedentsSection = () => {
    const dataOne = [{
        name:"هيبارين",
        start:"2022-12-2",
        end:"2024-10-7",
        details:"هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف "
    },{
        name:"هيبارين",
        start:"2022-12-2",
        end:"2024-10-7",
        details:"هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف "
    },{
        name:"هيبارين",
        start:"2022-12-2",
        end:"2024-10-7",
        details:"هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف "
    },
  
]
const title = ["اسم الدواء",
                "تاريخ بداية أخذ الدواء",
                "تاريخ نهاية أخذ الدواء",
                "تفاصيل عامة"]
    

    return (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {dataOne.map((data,index)=>{
                    return <>
                            <CardRecord key={index} object = {data} title={title}/>
                    </>
                })}
                </div>
)
}

export default PrecedentsSection