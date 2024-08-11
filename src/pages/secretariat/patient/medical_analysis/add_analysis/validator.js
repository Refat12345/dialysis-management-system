
const validateValue = (value) =>{
    if ((value != "سلبي" || value != "ايجابي" ) && value === ""){
        return "الرجاء ادخال قيمة التحليل";
    }
    return null;
}

const validateAnalysisName = (analysisName)=>{
    if (!analysisName.trim()) {
        return "الرجاء ادخال اسم التحليل";
    }
    return null;
}

const validateAnalysisDate = (analysisDate)=>{
    if (analysisDate === null) {
        return "الرجاء ادخال تاريخ التحليل";
    }
    return null;
}

const validateUnitOfMeasurement = (unitOfMeasurement)=>{
    if (!unitOfMeasurement.trim()) {
        return "الرجاء ادخال الوحدة";
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

    const unitOfMeasurement = validateUnitOfMeasurement(formData.unitOfMeasurement);
    if (unitOfMeasurement) {
        validationErrors.unitOfMeasurement = unitOfMeasurement;
    }


    return validationErrors;
};