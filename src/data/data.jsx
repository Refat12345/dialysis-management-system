/* eslint-disable no-unused-vars */
import Patient from "../assets/icons/medical-center/dashboard/Sessions/patient.svg";

//admin
import HomePageICon from "../assets/icons/medical-center/dashboard/SideBar/homePage.svg";
import UsersIcon from "../assets/icons/medical-center/dashboard/SideBar/Users.svg";
import PatientIcon from "../assets/icons/medical-center/dashboard/SideBar/patientSideBar.svg";
import AppointmentsIcon from "../assets/icons/medical-center/dashboard/SideBar/Appointment.svg";
import DialysisSessionsIcon from "../assets/icons/medical-center/dashboard/SideBar/laundrySession.svg";
import LoggingICon from "../assets/icons/medical-center/dashboard/SideBar/transactionLog.svg";
import ManagerIcon from "../assets/icons/medical-center/dashboard/SideBar/manger.svg";
import OrdersIcon from "../assets/icons/medical-center/dashboard/SideBar/order.svg";
import NotesIcon from "../assets/icons/medical-center/dashboard/SideBar/notification.svg";
import SettingsIcon from "../assets/icons/medical-center/dashboard/SideBar/setting.svg";
import LogOutIcon from "../assets/icons/medical-center/dashboard/SideBar/logOut.svg";
import online from "../assets/icons/medical-center/users/users-list/online.svg";
import doctor from "../assets/icons/medical-center/users/users-list/doctor.svg";

//-------------------------

//Routes

export const mainRoute = "/";
export const loginRoute = "/login";
export const patientsRoute = "/patients";
export const usersRoute = "/users";
export const patientProfileRoute = `${patientsRoute}/:patientName`;

export const medicalRecordRoute = `${patientProfileRoute}/medicalRecord`;
export const globalInfoRoute = `${patientProfileRoute}/globalInfo`;
export const dialysisSessionsRoute = `${patientProfileRoute}/dialysisSession`;
export const medicalAnalysisRoute = `${patientProfileRoute}/medicalAnalysis`;
export const prescriptionsRoute = `${patientProfileRoute}/prescriptions`;
export const globalNotesRoute = `${patientProfileRoute}/globalNotes`;

//--------------------------
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

export const managerCenterSideBar = {
  header: {
    name: "حسن حبنكة",
    title: "مدير مركز الطحان الخيري",
    icon: ManagerIcon,
  },
  items: [
    { href: mainRoute, name: "الصفحة الرئيسية", icon: HomePageICon },
    { href: usersRoute, name: "المستخدمين", icon: UsersIcon },
    { href: patientsRoute, name: "المرضى", icon: PatientIcon },
    { href: "", name: "المواعيد", icon: AppointmentsIcon },
    { href: "", name: "جلسات الغسيل", icon: DialysisSessionsIcon },
    { href: "", name: "سجل العمليات", icon: LoggingICon },
    { href: "", name: "الطلبات", icon: OrdersIcon },
    { href: "", name: "الملاحظات", icon: NotesIcon },
    { href: "", name: "الاعدادت", icon: SettingsIcon },
    { href: "", name: "تسجيل الخروج", icon: LogOutIcon },
  ],
};

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
];

export const sessions = data.map((data, index) => {
  return {
    patientName: "أحمد محمد",
    nurseName: "عدنان العويدات",
    startTime: "الساعة السادسة",
    endTime: "الساعة الثانية عشرة",
    chair: index + 12,
    hall: index + 1,
  };
});

export const healthInformation = {
  title: "المعلومات الصحية",
  vascularInlet: "المدخل الوعائي",
  dryWeight: "الوزن الجاف",
  blood: "زمرة الدم",
  causeOfKidneyFailure: "سبب القصور الكلوي",
  sessionStartDate: "تاريح بدء الجلسات",
  kidneyTransplant: "وجود زراعة كلية سابقة",
};
export const information = {
  vascularInlet: "قثطرة",
  dryWeight: "72",
  blood: "AB+",
  causeOfKidneyFailure: "مرض السكري",
  sessionStartDate: "2-3-2024",
  kidneyTransplant: "نعم",
};
export const cardsData = [
  {
    name: " سارية الزعبي ",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "أسماء ديراني",
    role: "ممرضة",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
  
  },
  {
    name: " محمد سعيد",
    role: "دكتور",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
   
  },
  {
    name: "أسماء ديراني",
    role: "ممرضة",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
  },
  {
    name: "أسماء ديراني",
    role: "ممرضة",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
  },
  {
    name: "أسماء ديراني",
    role: "ممرضة",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
  },
  {
    name: "أسماء ديراني",
    role: "ممرضة",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
  },
  {
    name: "أسماء ديراني",
    role: "ممرضة",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },
  {
    name: "احمد شريدة",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  },



];

export const patientData = [
  {
    name: "حيدر البياتي",
    age: 25,
    nationality: "ذكر",
    phone: "+963999966666",
    area: "دمشق",
  },
  {
    name: "فراس السيد",
    age: 25,
    nationality: "ذكر",
    phone: "+963999966666",
    area: "دمشق",
  },
  {
    name: "بشار عبد",
    age: 25,
    nationality: "ذكر",
    phone: "+963999966666",
    area: "دمشق",
  },{
    name: "سعيد الرز",
    age: 25,
    nationality: "ذكر",
    phone: "+963999966666",
    area: "دمشق",
  },{
    name: "ماهر الاسعد",
    age: 25,
    nationality: "ذكر",
    phone: "+963999966666",
    area: "دمشق",
  },{
    name: "رامي طلاس",
    age: 25,
    nationality: "ذكر",
    phone: "+963999966666",
    area: "دمشق",
  },
  {
    name: "جميل حسن",
    age: 25,
    nationality: "ذكر",
    phone: "+963999966666",
    area: "دمشق",
  },
  {
    name: "نمر الراضي ",
    age: 25,
    nationality: "ذكر",
    phone: "+963999966666",
    area: "دمشق",
  },
  {
    name: "احمد عليوي",
    age: 25,
    nationality: "ذكر",
    phone: "+963999966666",
    area: "دمشق",
  },
  {
    name: "امجد الخشن",
    age: 25,
    nationality: "ذكر",
    phone: "+963999966666",
    area: "دمشق",
  },
  
 
];

export const  Globalnotes = [
  {
    id: 1,
    sender: ' رفعت عبد الواحد',
    receiver: 'الزهر',
    type: 'ملاحظة جلسة غسيل',
    content: ' شامل شامل  سريع سريع سريع سريع سريع سريع  في اقصى وقت وقت وقت وققت وقت يييييييييييييييييييييي شامل شامل شامل شامل شامل شامل شامل شامل شامل يُنصح بإجراء فحص طبي شامل...',
    date: '4 مايو 2024'
  },
  {
    id: 1,
    sender: 'سارية الزعبي ',
    receiver: 'الزهر',
    type: 'ملاحظة عامة ',
    content: 'يُنصح بإجراء تحليل دموي شامل...',
    date: '4 مايو 2024'
  },
  {
    id: 1,
    sender: 'وسيم البزرة',
    receiver: 'الزهر',
    type: 'ملاحظة  عامة',
    content: '   غثيان واقياء اثناء الجلسة ...',
    date: '4 مايو 2024'
  },
  {
    id: 1,
    sender: 'سامي ',
    receiver: 'الزهر',
    type: 'ملاحظة  عامة',
    content: '   غثيان واقياء اثناء الجلسة ...',
    date: '4 مايو 2024'
  },
];