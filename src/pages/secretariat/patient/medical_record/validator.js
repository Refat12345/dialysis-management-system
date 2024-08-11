const validateCauseRenalFailure = (causeRenalFailure) => {
    if (!causeRenalFailure.trim()) {
        return "الرجاء ادخال سبب القصور الكلوي";
    }
    return null;
};

const validateBloodType = (bloodType) => {
    if (!bloodType.trim()) {
        return "الرجاء ادخال زمرة الدم";
    }
    return null;
};

const validateDryWeight = (dryWeight) => {
    if (!dryWeight.trim()) {
        return "الرجاء ادخال الوزن الجاف";
    }
    return null;
};

const validateDialysisStartDate = (dialysisStartDate) => {
    if (dialysisStartDate === null) {
        return "الرجاء ادخال تاريخ بدء جلسات الغسيل";
    }
    return null;
};

const validateKidneyTransplant = (kidneyTransplant) => {
    if (!kidneyTransplant.trim()) {
        return "الرجاء ادخال زراعة كلية سابقة";
    }
    return null;
};

const validateVascularEntrance = (vascularEntrance) => {
    if (!vascularEntrance.trim()) {
        return "الرجاء ادخال الوصل الوعائي";
    }
    return null;
};


export const validateMedicalRecordForm = (formData) => {
    const validationErrors = {};

    const causeRenalFailure = validateCauseRenalFailure(formData.causeRenalFailure);
    if (causeRenalFailure) {
        validationErrors.causeRenalFailure = causeRenalFailure;
    }

    const bloodType = validateBloodType(formData.bloodType);
    if (bloodType) {
        validationErrors.bloodType = bloodType;
    }

    const dryWeight = validateDryWeight(formData.dryWeight);
    if (dryWeight) {
        validationErrors.dryWeight = dryWeight;
    }

    const dialysisStartDate = validateDialysisStartDate(formData.dialysisStartDate);
    if (dialysisStartDate) {
        validationErrors.dialysisStartDate = dialysisStartDate;
    }

    const kidneyTransplant = validateKidneyTransplant(formData.kidneyTransplant);
    if (kidneyTransplant) {
        validationErrors.kidneyTransplant = kidneyTransplant;
    }

    const vascularEntrance = validateVascularEntrance(formData.vascularEntrance);
    if (vascularEntrance) {
        validationErrors.vascularEntrance = vascularEntrance;
    }

    return validationErrors;
};



const validateSurgicalName = (surgeryName)=>{
    if (surgeryName === "") {
        return "الرجاء ادخال اسم العملية";
    }
    return null;
}
export const validateSurgicalPrecedentForm = (formData) => {
    const validationErrors = {};
    const surgeryName = validateSurgicalName(formData.surgeryName);
    if (surgeryName) {
        validationErrors.surgeryName = surgeryName;
    }
    return validationErrors;
};


const validateIllnessName = (illnessName)=>{
    if (illnessName === "") {
        return "الرجاء ادخال اسم المرض";
    }
    return null;
}
export const validatePathologicalPrecedentForm = (formData) => {
    const validationErrors = {};
    const illnessName = validateIllnessName(formData.illnessName);
    if (illnessName) {
        validationErrors.illnessName = illnessName;
    }
    return validationErrors;
};


const validateMedicinesName = (medicineName)=>{
    if (medicineName === "") {
        return "الرجاء ادخال اسم الدواء";
    }
    return null;
}

export const validatePharmacologicalForm = (formData) => {
    const validationErrors = {};

    const medicineName = validateMedicinesName(formData.medicineName);
    if (medicineName) {   
        validationErrors.medicineName = medicineName;
    }
    return validationErrors;
};