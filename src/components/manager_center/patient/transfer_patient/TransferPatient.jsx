import TextArea from "../../../public/text_area/TextArea"
import { useState } from "react";
const TransferPatient = () => {

    const [userInput, setUserInput] = useState(''); 
    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };
    
return (
    <div dir="rtl">
        <form>
            <p className="text-lg text-titleSideColor font-primaryBold mb-4">سبب نقل المريض الى مركز اخر</p>
            <TextArea value={userInput} onChange={handleUserInput} label={"السبب"} />
            <div className='flex flex-row justify-center'>
                <button type="submit" className='my-4 font-primaryBold bg-bgButtonColor text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg '
                > {"تأكيد"}
                </button>
            </div>
        </form> 
    </div> 
)
}

export default TransferPatient