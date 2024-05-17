import {TextArea} from "../../../../components"
import { useState } from "react";
const RejectionReason = () => {

    const [userInput, setUserInput] = useState(''); 
    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };
    
return (
    <div dir="rtl">
        <form>
            <p className="text-lg text-titleColor font-primaryBold mb-4">سبب الرفض</p>
            <TextArea value={userInput} onChange={handleUserInput} label={"السبب"} />
            <div className='flex flex-row justify-center'>
                <button type="submit" className='my-4 font-primaryBold bg-red-500 text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg '
                > {"تأكيد"}
                </button>
            </div>
        </form> 
    </div> 
)
}

export default RejectionReason