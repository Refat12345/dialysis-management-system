/* eslint-disable no-unused-vars */
import Patient from "../assets/icons/medical-center/dashboard/Sessions/patient.svg";

//admin
import {
  HomePageICon,
  UsersIcon,
  PatientIcon,
  AppointmentsIcon,
  DialysisSessionsIcon,
  LoggingICon,
  ManagerIcon,
  OrdersIcon,
  NotesIcon,
  SettingsIcon,
  LogOutIcon,
  MedicalCentersIcon,
  SecretarySideImage
} from "../assets";
import online from "../assets/icons/medical-center/users/users-list/online.svg";

//-------------------------

//Routes
export const loginRoute = "/";
export const mainRoute = "mainPage";
export const registerRoute = "/register";
export const invitationRoute = `${registerRoute}/invitation`;
export const createAccountRoute = `${registerRoute}/create-account`;
export const patientsRoute = "patients";
export const patientRoute = "patient";

export const usersRoute = "users";
export const dialysisRoute = "dialysis";
export const enterDisbursedMedicines = "enterDisbursedMedicines"
export const dialysisDetailsRoute = `dialysisDetails/:id`;

export const auditingRoute = 'auditing'
export const secretariaAccountRoute = 'secretaria_account';
export const ordersRoute = 'orders';
export const settingRoute = "setting";
export const patientProfileRoute = `${patientsRoute}/:patientName/:status`;
export const patientOptionRoute = `${patientRoute}/:patientName/:status`;


export const medicalRecordRoute = `medical-record`;
export const globalInfoRoute = `global-info`;
export const dialysisSessionsRoute = `dialysis-session`;
export const medicalAnalysisRoute = `medical-analysis`;
export const prescriptionsRoute = `prescriptions`;
export const globalNotesRoute = `global-notes`;


export const medicalCentersRoute = "medicalCenters";

export const userDetailsRoute = `${usersRoute}/:id`;

export const dialysisByPatient = `dialysisByPatient`;

export const disbursedMaterialsRoute = `disbursedMaterials`
export const appointment = `appointment`
export const assignAppointmentRoute = `${appointment}/:id`
export const notes = `notes`
export const userInvites = `UserInvites`
export const logoutRoute = "logout"
export const addMedicalCentersRoute = "addMedicalCenters"


//Delete 
export const addPatintinfoRoute = 'addPatientInfo'
export const addPrescriptionInfoRoute = 'PrescriptionInfo'
export const assignMaterialToUserCenter = "assignMaterialToUserCenter";
export const AddUserRoute = 'addUser';
export const AddMedicalRoute = 'addMedical';
export const GetUnAcceptedPatientRoute = 'getunacceptedpatient';


// export const userDetailsRoute = `${usersRoute}/userDetails`;

export const enterMedicalRecordRoute = "enterMedicalRecord"

export const addMedicalAnalysisRoute = "addMedicalAnalysis"

//--------------------------
//saria

export const managerCenterSideBar = {
  header: {
    name: "حسن حبنكة",
    title: "مدير مركز حسن الطحان الخيري " ,
    icon: ManagerIcon,
  },
  
  items: [
    { href: mainRoute, name: "الصفحة الرئيسية", icon: HomePageICon },
    { href: usersRoute, name: "المستخدمين", icon: UsersIcon },
    { href: patientsRoute, name: "المرضى", icon: PatientIcon },
    { href: appointment, name: "المواعيد", icon: AppointmentsIcon },
    { href: dialysisRoute, name: "جلسات الغسيل", icon: DialysisSessionsIcon },
    { href: disbursedMaterialsRoute, name: "المواد المصروفة", icon: DialysisSessionsIcon },
    { href: auditingRoute, name: "سجل العمليات", icon: LoggingICon },
    { href: ordersRoute, name: "الطلبات", icon: OrdersIcon },
    { href: notes, name: "الملاحظات", icon: NotesIcon },
    { href: settingRoute, name: "الاعدادت", icon: SettingsIcon },
    { href:  userInvites, name: "الدعوات", icon: DialysisSessionsIcon },
    { href:  logoutRoute, name: "تسجيل الخروج", icon: LogOutIcon },
  ],
};

export const secretariatSideBar = {
  header: {
    name: "ريما كباكيبي",
    title: "سكرتيرة الطحان الخيري",
    icon: SecretarySideImage,
  },
  items: [
    { href: mainRoute, name: "الصفحة الرئيسية", icon: HomePageICon },
    { href: usersRoute, name: "المستخدمين", icon: UsersIcon },
    { href: patientsRoute, name: "المرضى", icon: PatientIcon },
    { href: appointment, name: "المواعيد", icon: AppointmentsIcon },
    { href: ordersRoute, name: "الطلبات", icon: OrdersIcon  },
    { href: notes, name: "الملاحظات", icon: NotesIcon },
    { href: settingRoute, name: "الاعدادت", icon: SettingsIcon },
    { href:  logoutRoute, name: "تسجيل الخروج", icon: LogOutIcon },
  ],
};

export const managerSideBar = {
  header: {
    name: "راتب خشيفاتي",
    title: "مدير برنامج دعمكم حياة",
    icon: ManagerIcon,
  },
  items: [
    { href: mainRoute, name: "الصفحة الرئيسية", icon: HomePageICon },
    { href: usersRoute, name: "المستخدمين", icon: UsersIcon },
    { href: patientsRoute, name: "المرضى", icon: PatientIcon },
    { href: medicalCentersRoute, name: "المراكز الطبية", icon: MedicalCentersIcon },
    { href: AddMedicalRoute, name: "اضافة مركز طبي", icon: MedicalCentersIcon },
    { href:  userInvites, name: "الدعوات", icon: DialysisSessionsIcon },
    { href: settingRoute, name: "الاعدادت", icon: SettingsIcon },
    { href: logoutRoute, name: "تسجيل الخروج", icon: LogOutIcon },
  ],
};

export const titleSession = {
  title: "الجلسات الحالية",
  dialysisTitle: {
    icon: Patient,
    patientName: "اسم المريض",
    nurseName: "اسم الممرض",
    startTime: "موعد بدء الجلسة",
    endTime: "موعد انتهاء الجلسة",
    chair: "الكرسي",
    hall: "القاعة",
  },
};
export const textToastStyle = {color:"green", textAlign:"center" ,fontWeight:"bold", fontSize:"22px"};
export const textErrorToastStyle = {color:"white", textAlign:"center" ,fontWeight:"bold", fontSize:"22px"};


export const healthInformation = {
  title: "المعلومات الصحية",
  vascularInlet: "المدخل الوعائي",
  dryWeight: "الوزن الجاف",
  blood: "زمرة الدم",
  causeOfKidneyFailure: "سبب القصور الكلوي",
  sessionStartDate: "تاريح بدء جلسات الغسيل",
  kidneyTransplant: "وجود زراعة كلية سابقة",
};

export const pathologicalTitle = [
  "اسم المرض",
  "تاريخ التشخيص  ",
  "تفاصيل عامة",
];
export const surgicalTitle = ["اسم العملية", "تاريخ العملية ", "تفاصيل عامة"];
export const pharmacologicalTitle = [
  "اسم الدواء",
  "تاريخ بدء أخذ الدواء",
  "تاريخ نهاية أخذ الدواء",
  "تفاصيل عامة",
];

export const translateMedicalTerms = (englishTerm) => {
  const translationDict = {
    "dryWeight": "الوزن الجاف",
    "vascularEntrance":"الوصل الوعائي",
    "bloodType": "زمرة الدم",
    "kidneyTransplant": "زراعة كلية",
    "causeRenalFailure": "سبب القصور الكلوي",
    "dialysisStartDate": "تاريخ بدء جلسات الغسيل",
    "surgeryName": "اسم العملية",
    "surgeryDate": "تاريخ العملية",
    "generalDetails": "تفاصيل العملية",
    "medicineName": "اسم الدواء",
    "dateStart": "تاريخ بدء اخذ الدواء",
    "dateEnd": "تاريخ نهاية اخذ الدواء",
    "illnessName": "اسم المرض",
    "medicalDiagnosisDate": "تاريخ التشخيص",
    "averageMin": "المعدل الأدنى",
    "averageMax": "المعدل الأقصى",
    "value": "القيمة",
    "analysisDate": "تاريخ اخذ التحليل",
    "notes": "ملاحظات",
    "analysisTypeID": "نوع التحليل",
    "analysisName": "اسم التحليل",
    "unitOfMeasurement": "وحدة القياس",
    "recurrenceInterval": "فترة التكرار",
    "MedicalRecord":"السجل الطبي",
    "MedicalAnalysis":"التحاليل",
    "SurgicalHistory":"السوابق الجراحية",
    "PharmacologicalHistory":"السوابق الدوائية",
    "PathologicalHistory":"السوابق المرضية",
    "SessionMedicine":"جلسة الغسيل"
  };

  return translationDict[englishTerm] || "الترجمة غير متوفرة";
}


//==============






export const dataContact = {
  title: ": العنوان",
  house: "سوريا-دمشق-المالكي",
  work: "سوريا-دمشق-المالكي",
};

export const dataLocation = {
  title: ": معلومات التواصل",
  linePhone: "0114536987",
  phone: "+963992841193",
  gmail: "refatabdalwahed@gmail.com",
};





export const dataCenterLocation = {
  phone: "+963992841193",
  gmail: "refatabdalwahed@gmail.com",
  line: "4534321",
};

export const dataCenterTime = [
  {
    name: "الوردية الاولى",
    start: "8:00AM",
    end: "12:00PM",
  },
  {
    name: "الوردية الثانية",
    start: "8:00AM",
    end: "12:00PM",
  },
];

export const dataNoteInMedicalCenter = {
  content:
    "كلية مركز طبي يقع على ضفاف نهر الفرات يحده من الشمال تركيا ومن الجنوب المغرب ومن الشرق كلية الهندسة المعلوماتية ومن الغرب كلية ",
};

export const statisticMedicalInfo = {
  chairCount: 150,
  patientsCount: 25,
  doctorCount: 25,
};
