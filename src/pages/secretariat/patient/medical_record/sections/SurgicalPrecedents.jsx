// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { Row ,SelectedTextFeild } from "../../../../../components/index"
// import CustomTextField from "../../../../../components/public/textfield/CustomTextField";
// const SurgicalPrecedents = ({ state , updateState }) => {
//     const filter = {
//         array: ["أنثى", "ذكر"],
//         title: "الجنس",
//     };
//   let length = state.surgicalPrecedents.length
// return (
//     <div className="bg-white rounded-lg py-5 px-3 w-[49%]">
//        <form>
//        <Row mainAxisAlignment="justify-evenly">
//             <div className="w-[45%] ">
//                 <CustomTextField
//                     label={"اسم العملية"}
//                     size = "3"
//                     required={true}
//                     placeholder={"اسم العملية"}
//                     type="text"
//                     value = {state.surgicalPrecedents[length-1].surgeryName}
//                     onChange={(e) => state.updateSurgicalPrecedent(length-1, "surgeryName", e.target.value)}
//             />
//             </div>
//         </Row>
        
//         <button type="submit" onSubmit={()=>state.addSurgicalPrecedents()} className="p-3 bg-bgtitle">sssssss</button>
//         <button onClick={()=>state.postData()}>adsad</button>
//        </form>
//     </div>
    
//   )
// }

// export default SurgicalPrecedents



/* eslint-disable no-unused-vars */
 /* eslint-disable react/prop-types */
import { Row ,SelectedTextFeild } from "../../../../../components/index"
import CustomTextField from "../../../../../components/public/textfield/CustomTextField";
const SurgicalPrecedents = ({ state , updateState }) => {
    const filter = {
        array: ["أنثى", "ذكر"],
        title: "الجنس",
    };
  let length = state.surgicalPrecedents.length
return (
    <div className="bg-white rounded-lg py-5 px-3 w-[49%]">
        <Row mainAxisAlignment="justify-evenly">
            <div className="w-[45%] ">
                <CustomTextField
                    label={"اسم العملية"}
                    size = "3"
                    required={true}
                    placeholder={"اسم العملية"}
                    type="text"
                    value = {state.surgicalPrecedents[length-1].surgeryName}
                    onChange={(e) => state.updatePathologicalPrecedent(length-1, "surgeryName", e.target.value)}
            />
            </div>
            <div className="w-[45%] ">
            <CustomTextField
                    label={"تاريخ العملية"}
                    size = "3"
                    required={true}
                    placeholder={"تاريخ العملية"}
                    type="text"
                    value = {state.surgeryDate}
                    onChange={(val) => {
                        updateState({
                            surgeryDate:val.target.value
                        })
                    }}
            />
            </div>
        </Row>
        <div className="mgBetweenField"></div>
        <Row mainAxisAlignment="justify-evenly">
                <div className="w-[94%]">
                <CustomTextField
                    label={"تفاصيل عامة"}
                    size = "3"
                    required={true}
                    placeholder={"تفاصيل عامة"}
                    type="text"
                    value = {state.generalDetails}
                    onChange={(val) => {
                        updateState({
                            generalDetails:val.target.value
                        })
                    }}
            />
                </div>
        </Row>
    </div>
    
  )
}

export default SurgicalPrecedents