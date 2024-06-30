/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { PaginationComponent, Search ,PageLoader } from "../../../components"
import "./style.css"
import Grid from "./sections/Grid"
import { useState ,useCallback} from "react"
import { useGetDisbursedMaterialsQuery } from "../../../services/manager_center/disbursed_materials/DisbursedMaterialsSlice"
const DisbursedMaterials = () => {
    const {data:disbursed,isSuccess,isLoading} = useGetDisbursedMaterialsQuery()
    console.log(disbursed);
    const [input,setInput] = useState("")
    const height = window.innerHeight;
    const responsive = height < 630 ? (height <700 ? "mt-12" :"mt-24") :"mt-8"
    const handleInputChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);
    if(isLoading){
        return (
            <div className="flex-grow md:mr-48">
                <div className="flex items-center justify-center h-screen">
                    <PageLoader />
                </div>
            </div>
            
        ); 
    }
    return (
        isSuccess && <>
        <div dir="rtl" className="md:mr-48 flex-grow">
            <div className={` mx-[3%] ${responsive}`}>
                <div className="flex justify-between">
                    <p className="text-titleColor font-bold text-2xl">المستهلكات المصروفة</p>
                    <Search handleInputValue={handleInputChange}/>
                </div>
                <div className="margin"></div>
                <PaginationComponent RenderComponent={Grid} data={disbursed[0]} itemsPerPage={12} />
            </div>
        </div>
        </>
)
}

export default DisbursedMaterials