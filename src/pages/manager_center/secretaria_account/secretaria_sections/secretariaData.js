export const genderFilter = {
  array: ["ذكر", "انثى"],
  title: "الجنس",
};

export const rolefilter = {
  array: ["ممرض", "طبيب", "مريض"],
  title: "الدور",
};
export const useFilter = ["المنزل", "العمل"];
export const typeContactFilter = ["الهاتف", "البريد الالكتروني"];
export const typeAddressFilter = [
  "دمشق",
  "حلب",
  "حمص",
  "حماة",
  "اللاذقية",
  "طرطوس",
  "دير الزور",
  "الرقة",
  "الحسكة",
  "إدلب",
  "درعا",
  "السويداء",
  "القنيطرة",
  "بانياس",
  "القامشلي",
  "تدمر",
  "ريف دمشق",
];
// Lists of permissions options and values
export const permissionsOptions = [
  "إدارة السجل الطبي",
  "إدارة الوصفات الطبية",
  "إدارة التحاليل الطبية",
  "إدارة جلسات الغسيل",
  "إدارة المعلومات العامة ( تعديل بيانات مركز - تعديل بيانات مستخدم )",
];
// Function to get the English value based on the index
export const permissionsOptionsValues = (index) => {
  switch(index){
    case 0:
      return "medicalRecord";
    case 1:
      return "prescription";
    case 2:
      return "analysis";
    case 3:
      return "session";
    case 4:
      return "general";
    default:
      return "";
  }
};