import { PaginationComponent, Search, PageLoader, HorizontalLine, Text } from "../../../components";
import "./style.css";
import Grid from "./sections/Grid";
import { useState, useCallback, useEffect } from "react";
import { useGetDisbursedMaterialsQuery } from "../../../services/manager_center/disbursed_materials/DisbursedMaterialsSlice";
import TextSearch from "../../../components/public/title/TextSearch";

const DisbursedMaterials = () => {
    const { data: disbursed, isSuccess, isLoading } = useGetDisbursedMaterialsQuery();
    const [input, setInput] = useState("");
    const [search, setSearch] = useState([]);

    useEffect(() => {
        if (isSuccess) {
            setSearch(disbursed.data);
        }
    }, [isSuccess, disbursed]);

    useEffect(() => {
        if (isSuccess) {
            let searchArray = disbursed.data;
            if (input !== "") {
                searchArray = disbursed.data.filter((disburseds) => 
                    disburseds.userDetails.fullName.toLowerCase().includes(input.toLowerCase())
                );
            }
            setSearch(searchArray);
        }
    }, [input, disbursed, isSuccess]);

    const handleInputChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    if (isLoading) {
        return (
            <div className="flex-grow mr-48">
                <div className="flex items-center justify-center h-screen">
                    <PageLoader />
                </div>
            </div>
        );
    }

    if (isSuccess && disbursed.data.length === 0) {
        return (
            <Text text={"لا يوجد مستهلكات مصروفة"}/>
        );
    }

    if(!isSuccess){
        return (
            <TextSearch text={"خطأ أثناء جلب البيانات أعد المحاولة من فضلك"}/>
        );
    }

    return (
        isSuccess && (
            <div dir="rtl" className="md:mr-48 flex-grow">
                <div className={`mx-[3%] mt-5`}>
                    <Search handleInputValue={handleInputChange} />
                    <div className="mb-4"></div>
                    <HorizontalLine />
                    <div className="mb-4"></div>
                    <div className="flex justify-between">
                        <p className="text-titleColor font-bold text-2xl">المستهلكات المصروفة</p>
                    </div>
                    <div className="margin"></div>
                    {search.length > 0 ? (
                        <PaginationComponent RenderComponent={Grid} data={search} itemsPerPage={12} />
                    ): <TextSearch text={"لا يوجد نتائج مطابقة"}/>}
                </div>
            </div>
        )
    );
};

export default DisbursedMaterials;
