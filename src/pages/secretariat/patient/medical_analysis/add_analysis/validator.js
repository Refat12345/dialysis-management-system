
const validateValue = (value) =>{
    if ((value != "سلبي" || value != "ايجابي" ) && value === ""){
        return "الرجاء إدخال قيمة التحليل";
    }
    return null;
}

const validateAnalysisName = (analysisName)=>{
    if (!analysisName.trim()) {
        return "الرجاء إدخال اسم التحليل";
    }
    return null;
}

const validateAnalysisDate = (analysisDate)=>{
    if (analysisDate === null) {
        return "الرجاء إدخال تاريخ التحليل";
    }
    return null;
}



export const validateMedicalAnalysisForm = (formData) => {
    const validationErrors = {};

    const value = validateValue(formData.value);
    if (value) {
        validationErrors.value = value;
    }

    const analysisName = validateAnalysisName(formData.analysisName);
    if (analysisName) {
        validationErrors.analysisName = analysisName;
    }

    const analysisDate = validateAnalysisDate(formData.analysisDate);
    if (analysisDate) {
        validationErrors.analysisDate = analysisDate;
    }

  

    return validationErrors;
};