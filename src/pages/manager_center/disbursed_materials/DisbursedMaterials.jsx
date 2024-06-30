/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { PaginationComponent, Search ,PageLoader ,HorizontalLine } from "../../../components"
import "./style.css"
import Grid from "./sections/Grid"
import { useState ,useCallback ,useEffect} from "react"
import { useGetDisbursedMaterialsQuery } from "../../../services/manager_center/disbursed_materials/DisbursedMaterialsSlice"
const DisbursedMaterials = () => {
    const {data:disbursed,isSuccess,isLoading} = useGetDisbursedMaterialsQuery()
    const [input,setInput] = useState("")
    const [search,setSearch] = useState([])
    const height = window.innerHeight;
    
    useEffect(() => {
        if (input.trim()) {
            const searchArray = disbursed[0].filter(disbursed =>
            disbursed.disbursedMaterials[0].centerName.toLowerCase().includes(input.toLowerCase())
        );
            setSearch(searchArray);
        } else {
            setSearch(disbursed[0]);
        }
    }, [input, disbursed[0]]);
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
    
    if(isSuccess && disbursed[0].length === 0 ) {
        return <>
        <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
            <p className="font-bold text-2xl">لا يوجد مستهلكات مصروفة</p>
        </div>
        </div></>
    }
    return (
        isSuccess && <>
        <div dir="rtl" className="md:mr-48 flex-grow">
            <div className={` mx-[3%] mt-5`}>
                <Search handleInputValue={handleInputChange}/>
                <div className="mb-4"></div>
                <HorizontalLine/>
                <div className="mb-4"></div>
                <div className="flex justify-between">
                    <p className="text-titleColor font-bold text-2xl">المستهلكات المصروفة</p>
                </div>
                <div className="margin"></div>
                {search.length > 0 && <PaginationComponent RenderComponent={Grid} data={search} itemsPerPage={12} />}
            </div>
        </div>
        </>
)
}

export default DisbursedMaterials