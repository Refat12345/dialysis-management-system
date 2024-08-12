/* eslint-disable react-hooks/exhaustive-deps */
import { AlertDialog, MedicalAnalysis, PageLoader  } from "../../../../components";
import Header from "./sections/Header";
import { useEffect, useState, useMemo } from "react";
import { useGetMedicalAnalysisQuery } from "../../../../services/public/patient_profile/ShowPatientProfileSlice";
import { formatDate } from "../../../../utils/DateUtils";
import Cookies from "js-cookie"
import { useParams } from "react-router-dom";
import EditMedicalAnalysisDialog from "../../../secretariat/patient/medical_analysis/edit_analysis/EditMedicalAnalysisDialog"
import { useGetAnalysisTypesQuery } from "../../../../services/secretariat/patient_profile/AddPatientProfileSlice";

const MedicalAnalysisPage = () => {

    const title = ["اسم التحليل", "القيمة", "تاريخ أخذ التحليل", "ملاحظات"];
    const { patientName } = useParams();
    const id = useMemo(() => patientName, [patientName]);
    const { data, isSuccess, isLoading ,isError} = useGetMedicalAnalysisQuery(id);
    const {data:analysisTypes,isSuccess:success,isLoading:loading} = useGetAnalysisTypesQuery()
    const [analysis, setAnalysis] = useState([]);
    const [filters, setFilters] = useState({
        type: "",
        date: "",
        quarter: ""
    });


    useEffect(() => {
        if (isSuccess && data?.analysis) {
            setAnalysis(data.analysis);
        }
    }, [isSuccess, data]);

    const filteredAnalysis = useMemo(() => {
        let filteredAnalysis = analysis;
        if (filters.type !== "" && filters.type !== "نوع التحليل") {
            filteredAnalysis = filteredAnalysis.filter(ana => ana.analysisName.includes(filters.type));
        }
        if (filters.date !== "" && filters.date !== "الشهر") {
            filteredAnalysis = filteredAnalysis.filter((ana) => {
                return formatDate(ana.analysisDate).includes(filters.date)
            });
        }
        if (filters.quarter !== "" && filters.quarter !== " الربع") {
            filteredAnalysis = filteredAnalysis.filter(ana => ana.quarter.includes(filters.quarter));
        }
        return filteredAnalysis;
    }, [filters, analysis]);

    if (isLoading || loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <PageLoader />
            </div>
        );}
    if(isError || !isSuccess || !success) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="font-bold text-2xl">خطأ بجلب البيانات أعد المحاولة من فضلك </p>
            </div>
        );
    }
    if (isSuccess && analysis.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="font-bold text-2xl">لا يوجد تحاليل طبية لهذا المريض</p>
            </div>
        );}
    return (
            (success && analysisTypes.analysisTypes.length > 0) &&  
            <>
            <div dir="rtl" className="flex-grow">
                <div className="ml-[1%]">
                    <Header value={filters} setFilters={setFilters} analysisTypes={analysisTypes.analysisTypes} />
                    <div className="analysis">
                        {filteredAnalysis.map((analysisItem, index) => (
                            Cookies.get("role") === "secretary" ? <AlertDialog key={index} renderComponent={<div className="hover:cursor-pointer">
                                <MedicalAnalysis key={index} title={title} analysis={analysisItem} />
                            </div>} contentComponent={<EditMedicalAnalysisDialog medicalAnalysis={analysisItem} analysisTypes = {analysisTypes.analysisTypes}/>}/> :<MedicalAnalysis key={index} title={title} analysis={analysisItem} />
                        ))}
                    </div>
                </div>
            </div>
            </>

    );
};

export default MedicalAnalysisPage;
