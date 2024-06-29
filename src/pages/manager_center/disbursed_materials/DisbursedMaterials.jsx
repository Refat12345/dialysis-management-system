/* eslint-disable react/prop-types */

import { PaginationComponent, Search } from "../../../components"
import "./style.css"
import Grid from "./sections/Grid"
import { useState ,useCallback} from "react"
const DisbursedMaterials = () => {
    const data = [1,2,3,4,5,6,7,8,9,0,9,8]
    const [input,setInput] = useState("")
    const height = window.innerHeight;
    const responsive = height < 630 ? (height <700 ? "mt-12" :"mt-24") :"mt-8"
    const handleInputChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    return (
        <div dir="rtl" className="md:mr-48 flex-grow">
            <div className={` mx-[3%] ${responsive}`}>
                <div className="flex justify-between">
                    <p className="text-titleColor font-bold text-2xl">المستهلكات المصروفة</p>
                    <Search handleInputValue={handleInputChange}/>
                </div>
                <div className="margin"></div>
                <PaginationComponent RenderComponent={Grid} data={data} itemsPerPage={12} />
            </div>
        </div>
)
}

export default DisbursedMaterials