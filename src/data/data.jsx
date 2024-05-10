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
export const dialysisRoute = "/dialysis";
export const patientProfileRoute = `${patientsRoute}/:patientName`;

export const medicalRecordRoute = `${patientProfileRoute}/medicalRecord`;
export const globalInfoRoute = `${patientProfileRoute}/globalInfo`;
export const dialysisSessionsRoute = `${patientProfileRoute}/dialysisSession`;
export const medicalAnalysisRoute = `${patientProfileRoute}/medicalAnalysis`;
export const prescriptionsRoute = `${patientProfileRoute}/prescriptions`;
export const globalNotesRoute = `${patientProfileRoute}/globalNotes`;

export const medicalCentersRoute = "/medicalCenters"

export const userDetailsRoute = `${usersRoute}/userDetails`;


//--------------------------
//saria
//medical_centers_icons
import centerIcon from "../assets/icons/public/MedicalCenterIcon.svg"
import addressIcon from "../assets/icons/public/address.svg"


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
    { href: dialysisRoute, name: "جلسات الغسيل", icon: DialysisSessionsIcon },
    { href: "", name: "سجل العمليات", icon: LoggingICon },
    { href: "", name: "الطلبات", icon: OrdersIcon },
    { href: "", name: "الملاحظات", icon: NotesIcon },
    { href: "", name: "الاعدادت", icon: SettingsIcon },
    { href: "", name: "تسجيل الخروج", icon: LogOutIcon },
  ],
};

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15
  ,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
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
title : "المعلومات الصحية",
vascularInlet:"المدخل الوعائي",
dryWeight:"الوزن الجاف",
blood:"زمرة الدم",
causeOfKidneyFailure:"سبب القصور الكلوي",
sessionStartDate:"تاريح بدء جلسات الغسيل",
kidneyTransplant:"وجود زراعة كلية سابقة",
}
export const information = {
    vascularInlet:"قثطرة",
    dryWeight:"72",
    blood:"AB+",
    causeOfKidneyFailure:"مرض السكري  مرض  الشديد",
    sessionStartDate:"2-3-2024",
    kidneyTransplant:"نعم",
}
export const prescriptionOne = [
  {
      doctor:"الطبيب سارية الزعبي",
      status:"نشطة",
      name:"التهاب",
      startDate:"2030-4-5",
      endDate:'2040-4-5',
      note:'يرجى أخذ ثلاث حبات يوميا قبل الطعام'
  },{
      doctor:"الطبيب سارية الزعبي",
      status:"منتهية",
      name:"سيتامول",
      startDate:"2030-4-5",
      endDate:'2040-4-5',
      note:' يرجى أخذ ثلاث حبات يوميا قبل الطعام أنا حتى مشي ما أمشي'
  },{
      doctor:"الطبيب سارية الزعبي",
      status:"منتهية",
      name:"حديد",
      startDate:"2030-4-5",
      endDate:'2040-4-5',
      note:'يرجى أخذ ثلاث حبات يوميا قبل الطعام'
  }
] 
export const prescriptionTow = [
  {
      doctor:"الطبيب سارية الزعبي",
      status:"منتهية",
      name:"كريب ستوب",
      startDate:"2030-4-5",
      endDate:'2040-4-5',
      note:'يرجى أخذ خمسة حبات يوميا قبل الطعام'
  },{
      doctor:"الطبيب أحمد الزعبي",
      status:"منتهية",
      name:"سيتامول",
      startDate:"2030-4-5",
      endDate:'2040-4-5',
      note:' يرجى أخذ ثلاث حبات يوميا قبل الطعام أنا حتى مشي ما أمشي'
  },{
      doctor:"الطبيب محمد الزعبي",
      status:"منتهية",
      name:"بؤوفين",
      startDate:"2030-4-5",
      endDate:'2040-4-5',
      note:'يرجى أخذ ثلاث حبات يوميا قبل الطعام'
  }
] 
export const prescriptions = [prescriptionOne,prescriptionTow]

const array = [1,2,3,4,5,6,7,8
              ,9,10,11,12
]
export const medicalCenters = array.map((array,index)=>{
  return {centerIcon:centerIcon,name:"مركز حسن الطحان الخيري",
  addressIcon:addressIcon,address:`سوريا - دمشق - الصالحية بناء رقم (${index+90})`}
}
)

export const analysis = [
  {
      name: "خضاب",
      amount :"سلبي",
      date:"2022-2-3",
      note:"حسن الطحان أحلى حسن حبنكة الكينغ لعيون أبو خالد الورد الأستاذ راتب المحترم أحلى شباب وأحلى سهرة شباب الباك ايند الزبالة"
  },
  {
      name: "حديد",
      amount :"ايجابي",
      date:"2022-2-3",
      note:"حسن الطحان أحلى حسن حبنكة الكينغ لعيون أبو خالد الورد الأستاذ راتب المحترم أحلى شباب وأحلى سهرة شباب الباك ايند الزبالة"
  },
  {
      name: "دم",
      amount :"سلبي",
      date:"2022-2-3",
      note:"حسن الطحان أحلى حسن حبنكة الكينغ لعيون أبو خالد الورد الأستاذ راتب المحترم أحلى شباب وأحلى سهرة شباب الباك ايند الزبالة"
  },
]
export const pathologicalTitle = ["اسم المرض","تاريخ التشخيص  ","تفاصيل عامة"]
export const surgicalTitle = ["اسم العملية","تاريخ العملية ","تفاصيل عامة"]
export const pharmacologicalTitle = ["اسم الدواء","تاريخ بدء أخذ الدواء","تاريخ نهاية أخذ الدواء","تفاصيل عامة"]

export const pharmacologicalPrecedents = [{
  name:"هيبارين",
  start:"2022-12-2",
  end:"2024-10-7",
  details:"هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف "
},{
  name:"حديد",
  start:"2022-12-2",
  end:"2024-10-7",
  details:"هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف "
},{
  name:"ايبوتين",
  start:"2022-12-2",
  end:"2024-10-7",
  details:"هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف "
},
{
  name:"فيستولا",
  start:"2022-12-2",
  end:"2024-10-7",
  details:"هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف "
}

]
export const pathologicalPrecedents = [{
  name:"داء السكري",
  start:"2012-1-10",
  details:"هو داء مزمن يصيب جميع المرضى عافانا وعافاكم الله من هذا المرض"
},{
  name:"داء الحساسية",
  start:"2014-1-10",
  details:"هو داء مزمن يصيب جميع المرضى عافانا وعافاكم الله من هذا المرض"
},{
  name:"داء البحصة",
  start:"2015-1-10",
  details:"هو داء مزمن يصيب جميع المرضى عافانا وعافاكم الله من هذا المرض"
},

]
export const surgicalPrecedents = [{
  name:"عملية استئصال زائدة",
  start:"2019-12-2",
  details:"تمت هذه العملية في مشفى المواساة تحت اشراف الطبيب سارية الزعبي المحترم"
},{
  name:"عملية استئصال معدة",
  start:"2020-26-2",
  details:"تمت العملية في مشفى المجتهد تحت اشراف الطبيب الضعيف رفعت عبد الواحد وقد انتهت هذه العملية بالفشل"
},{
  name:"عملية استئصال معدة",
  start:"2020-16-2",
  details:"تمت العملية في مشفى المجتهد تحت اشراف الطبيب الضعيف رفعت عبد الواحد وقد انتهت هذه العملية بالفشل"
},

]
//==============
const arrOne = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
export const cardsData = arrOne.map((arr,index)=>{
  return  {
    name: " سارية محمد الزعبي ",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
    
  }
})


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

export const dataContact = {
  title: ": العنوان",
  house: "سوريا-دمشق-المالكي",
  work: "سوريا-دمشق-المالكي",
};

export const dataLocation = {
  title: ": معلومات التواصل",
  linePhone: "0114536987",
  phone: "+963992841193",
  gmail:"refatabdalwahed@gmail.com"
};