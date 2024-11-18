/* eslint-disable react-hooks/exhaustive-deps */
import { MedicalAnalysis, PublicLoader  } from "../../../../components";
import Header from "./sections/Header";
import { useEffect, useState, useMemo } from "react";
import { useGetMedicalAnalysisQuery } from "../../../../services/public/patient_profile/ShowPatientProfileSlice";
import { formatDate } from "../../../../utils/DateUtils";
import Cookies from "js-cookie"
import { useParams } from "react-router-dom";
import EditMedicalAnalysisDialog from "../../../secretariat/patient/medical_analysis/edit_analysis/EditMedicalAnalysisDialog"
import { useGetAnalysisTypesQuery } from "../../../../services/secretariat/patient_profile/AddPatientProfileSlice";
import PublicDialog from "../../../../components/public/dialog/AlertDialog";
import TextSearch from "../../../../components/public/title/TextSearch";

const MedicalAnalysisPage = () => {
    const title = ["اسم التحليل", "القيمة", "تاريخ أخذ التحليل", "ملاحظات"];
    const { patientName, status } = useParams();
    const id = useMemo(() => patientName, [patientName]);
    const [open, setOpen] = useState(false);
    const [selectedAnalysis, setSelectedAnalysis] = useState(null);
    const { data, isSuccess, isLoading, isError } = useGetMedicalAnalysisQuery(id);
    const { data: analysisTypes, isSuccess: success, isLoading: loading } = useGetAnalysisTypesQuery();
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
        return analysis.filter(ana => {
            const matchesType = filters.type === "" || filters.type === "نوع التحليل" || ana.analysisName.includes(filters.type);
            const matchesDate = filters.date === "" || filters.date === "الشهر" || formatDate(ana.analysisDate).includes(filters.date);
            const matchesQuarter = filters.quarter === "" || filters.quarter === " الربع" || ana.quarter.includes(filters.quarter);
            return matchesType && matchesDate && matchesQuarter;
        });
    }, [filters, analysis]);

    if (isLoading || loading) {
        return <PublicLoader />;
    }

    if (isError || !isSuccess || !success) {
        return <TextSearch text={"خطأ أثناء جلب البيانات أعد المحاولة من فضلك"} />;
    }
    
    if (isSuccess && analysis.length === 0) {
        return (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="font-bold text-2xl mr-48">لا يوجد تحاليل طبية لهذا المريض</p>
            </div>
        );
    }
    


    if( success && analysisTypes.analysisTypes.length > 0) {
        return (
            <div dir="rtl" className="flex-grow">
                <div className="ml-[1%]">
                    <Header value={filters} setFilters={setFilters} analysisTypes={analysisTypes.analysisTypes} />
                    <div className="analysis">
                        {filteredAnalysis.map((analysisItem, index) => (
                            <div key={index}>
                                {Cookies.get("role") === "secretary" ? (
                                    <div onClick={() => {
                                        if (status === "acceptable") {
                                            setSelectedAnalysis(analysisItem);
                                            setOpen(true);
                                        }
                                    }} className={`${status === "acceptable" && "hover:cursor-pointer"}`}>
                                        <MedicalAnalysis key={index} title={title} analysis={analysisItem} />
                                    </div>
                                ) : (
                                    <MedicalAnalysis key={index} title={title} analysis={analysisItem} />
                                )}
                                <PublicDialog
                                    component={<EditMedicalAnalysisDialog medicalAnalysis={selectedAnalysis} analysisTypes={analysisTypes.analysisTypes} setOpen={setOpen} />}
                                    open={open}
                                    setOpen={setOpen}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

};

export default MedicalAnalysisPage;
