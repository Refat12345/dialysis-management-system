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
} from "../assets";
import online from "../assets/icons/medical-center/users/users-list/online.svg";

//-------------------------

//Routes

export const mainRoute = "/";
export const loginRoute = "/login";
export const registerRoute = "/register";
export const invitationRoute = `${registerRoute}/invitation`;
export const createAccountRoute = `${registerRoute}/create-account`;
export const patientsRoute = "/patients";
export const usersRoute = "/users";
export const dialysisRoute = "/dialysis";
export const dialysisDetailsRoute = `${dialysisRoute}/dialysisDetails/:id`;

export const auditingRoute = '/auditing'
export const secretariaAccountRoute = '/secretaria_account';
export const ordersRoute = '/orders';
export const settingRoute = '/setting'
export const auditingRoute = "/auditing";
export const secretariaAccountRoute = "/secretaria_account";
export const ordersRoute = "/orders";
export const settingRoute = "/setting";
export const patientProfileRoute = `${patientsRoute}/:patientName`;


export const medicalRecordRoute = `medical-record`;
export const globalInfoRoute = `global-info`;
export const dialysisSessionsRoute = `dialysis-session`;
export const medicalAnalysisRoute = `medical-analysis`;
export const prescriptionsRoute = `prescriptions`;
export const globalNotesRoute = `global-notes`;

export const medicalCentersRoute = "/medicalCenters";

export const userDetailsRoute = `${usersRoute}/userDetails/:id`;

//Delete 
export const addPatintinfoRoute = '/logOut'
export const userDetailsRoute = `${usersRoute}/userDetails`;

//--------------------------
//saria
//medical_centers_icons

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
    { href: auditingRoute, name: "سجل العمليات", icon: LoggingICon },
    { href: ordersRoute, name: "الطلبات", icon: OrdersIcon },
    { href: "", name: "الملاحظات", icon: NotesIcon },
    { href: settingRoute, name: "الاعدادت", icon: SettingsIcon },
    { href: addPatintinfoRoute, name: "تسجيل الخروج", icon: LogOutIcon },
  ],
};

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

export const pharmacologicalPrecedents = [
  {
    medicineName: "هيبارين",
    dateStart: "2022-12-2",
    dateEnd: "2024-10-7",
    generalDetails:
      "هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف ",
  },
  {
    medicineName: "حديد",
    dateStart: "2022-12-2",
    dateEnd: "2024-10-7",
    generalDetails:
      "هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف ",
  },
  {
    medicineName: "ايبوتين",
    dateStart: "2022-12-2",
    dateEnd: "2024-10-7",
    generalDetails:
      "هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف ",
  },
  {
    medicineName: "فيستولا",
    dateStart: "2022-12-2",
    dateEnd: "2024-10-7",
    generalDetails:
      "هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف ",
  },
];
export const pathologicalPrecedents = [
  {
    illnessName: "داء السكري",
    medicalDiagnosisDate: "2012-1-10",
    generalDetails:
      "هو داء مزمن يصيب جميع المرضى عافانا وعافاكم الله من هذا المرض",
  },
  {
    illnessName: "داء الحساسية",
    medicalDiagnosisDate: "2014-1-10",
    generalDetails:
      "هو داء مزمن يصيب جميع المرضى عافانا وعافاكم الله من هذا المرض",
  },
  {
    illnessName: "داء البحصة",
    medicalDiagnosisDate: "2015-1-10",
    generalDetails:
      "هو داء مزمن يصيب جميع المرضى عافانا وعافاكم الله من هذا المرض",
  },
];
export const surgicalPrecedents = [
  {
    surgeryName: "عملية استئصال زائدة",
    surgeryDate: "2019-12-2",
    generalDetails:
      "تمت هذه العملية في مشفى المواساة تحت اشراف الطبيب سارية الزعبي المحترم",
  },
  {
    surgeryName: "عملية استئصال معدة",
    surgeryDate: "2020-26-2",
    generalDetails:
      "تمت العملية في مشفى المجتهد تحت اشراف الطبيب الضعيف رفعت عبد الواحد وقد انتهت هذه العملية بالفشل",
  },
  {
    surgeryName: "عملية استئصال معدة",
    surgeryDate: "2020-16-2",
    generalDetails:
      "تمت العملية في مشفى المجتهد تحت اشراف الطبيب الضعيف رفعت عبد الواحد وقد انتهت هذه العملية بالفشل",
  },
];
//==============






const arrOne = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]


export const cardsData = arrOne.map((arr,index)=>{
  return  {
const arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
export const cardsData = arrOne.map((arr, index) => {
  return {
    name: " سارية محمد الزعبي ",
    role: "ممرض",
    gender: "ذكر",
    location: "دمشق",
    status: "نشط الآن",
    statusIcon: online,
    phone: "+963 992841193",
  };
});

export const patientData = [
  {
    name: "حيدر البياتي",
    nationality: "ذكر",
    age: 25,
    area: "دمشق",
    phone: "+963999966666",
  },
  {
    name: "فراس السيد",
    nationality: "ذكر",
    age: 25,
    area: "دمشق",
    phone: "+963999966666",
  },
  {
    name: "بشار عبد",
    nationality: "ذكر",
    age: 25,
    area: "دمشق",
    phone: "+963999966666",
  },
  {
    name: "سعيد الرز",
    nationality: "ذكر",
    age: 25,
    area: "دمشق",
    phone: "+963999966666",
  },
  {
    name: "ماهر الاسعد",
    nationality: "ذكر",
    age: 25,
    area: "دمشق",
    phone: "+963999966666",
  },
  {
    name: "رامي طلاس",
    nationality: "ذكر",
    age: 25,
    area: "دمشق",
    phone: "+963999966666",
  },
  {
    name: "جميل حسن",
    nationality: "ذكر",
    age: 25,
    area: "دمشق",
    phone: "+963999966666",
  },
  {
    name: "نمر الراضي ",
    nationality: "ذكر",
    age: 25,
    area: "دمشق",
    phone: "+963999966666",
  },
  {
    name: "احمد عليوي",
    nationality: "ذكر",
    age: 25,
    area: "دمشق",
    phone: "+963999966666",
  },
  {
    name: "امجد الخشن",
    nationality: "ذكر",
    age: 25,
    area: "دمشق",
    phone: "+963999966666",
  },
];

export const Globalnotes = [
  {
    id: 1,
    sender: " رفعت عبد الواحد",
    receiver: "الزهر",
    type: "ملاحظة جلسة غسيل",
    content:
      " شامل شامل  سريع سريع سريع سريع سريع سريع  في اقصى وقت وقت وقت وققت وقت يييييييييييييييييييييي شامل شامل شامل شامل شامل شامل شامل شامل شامل يُنصح بإجراء فحص طبي شامل...",
    date: "4 مايو 2024",
  },
  {
    id: 1,
    sender: "سارية الزعبي ",
    receiver: "الزهر",
    type: "ملاحظة عامة ",
    content: "يُنصح بإجراء تحليل دموي شامل...",
    date: "4 مايو 2024",
  },
  {
    id: 1,
    sender: "وسيم البزرة",
    receiver: "الزهر",
    type: "ملاحظة  عامة",
    content: "   غثيان واقياء اثناء الجلسة ...",
    date: "4 مايو 2024",
  },
  {
    id: 1,
    sender: "سامي ",
    receiver: "الزهر",
    type: "ملاحظة  عامة",
    content: "   غثيان واقياء اثناء الجلسة ...",
    date: "4 مايو 2024",
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
  gmail: "refatabdalwahed@gmail.com",
};

export const data = {
  dialysisSessions: [
    {
      id: "1",
      patientName: "أحمد محمد",
      nurseName: "صالح شهاب",
      sessionStartTime: "الساعة السادسة",
      sessionEndTime: "الساعة الثانية عشرة",
      chair: 18,
      roomName: 4,
    },
    {
      id: "2",
      patientName: "سعيد صلاح",
      nurseName: "أسماء درباني",
      sessionStartTime: "الساعة الثانية",
      sessionEndTime: "الساعة الحادية عشرة",
      chair: 20,
      roomName: 1,
    },
    {
      id: "3",
      patientName: "أحمد محمد",
      nurseName: "عدنان العويدات",
      sessionStartTime: "الساعة السادسة",
      sessionEndTime: "الساعة الخامسة",
      chair: 12,
      roomName: 3,
    },
    {
      id: "4",
      patientName: "سامي خالد",
      nurseName: "عدنان الزعبي",
      sessionStartTime: "الساعة العاشرة",
      sessionEndTime: "الساعة الرابعة",
      chair: 2,
      roomName: 5,
    },
    {
      id: "5",
      patientName: "مريم محمد",
      nurseName: "عدنان العويدات",
      sessionStartTime: "الساعة الثامنة",
      sessionEndTime: "الساعة العاشرة",
      chair: 12,
      roomName: 1,
    },
    {
      id: "6",
      patientName: "أحمد محمد",
      nurseName: "عدنان العويدات",
      sessionStartTime: "الساعة السادسة",
      sessionEndTime: "الساعة الثانية عشرة",
      chair: 35,
      roomName: 12,
    },
    {
      id: "7",
      patientName: "خالد علي",
      nurseName: "عدنان العويدات",
      sessionStartTime: "الساعة السادسة",
      sessionEndTime: "الساعة الثانية عشرة",
      chair: 20,
      roomName: 5,
    },
    {
      id: "8",
      patientName: "سعدون محمد",
      nurseName: "عدنان العويدات",
      sessionStartTime: "الساعة السادسة",
      sessionEndTime: "الساعة الثانية عشرة",
      chair: 13,
      roomName: 2,
    },
  ],
};

export const analysis = {
  analysis: [
    {
      analysisName: "خضاب",
      value: "سلبي",
      analysisDate: "2022-2-3",
      notes:
        "حسن الطحان أحلى حسن حبنكة الكينغ لعيون أبو خالد الورد الأستاذ راتب المحترم أحلى شباب وأحلى سهرة شباب الباك ايند الزبالة",
    },
    {
      analysisName: "حديد",
      value: "ايجابي",
      analysisDate: "2022-2-3",
      notes:
        "حسن الطحان أحلى حسن حبنكة الكينغ لعيون أبو خالد الورد الأستاذ راتب المحترم أحلى شباب وأحلى سهرة شباب الباك ايند الزبالة",
    },
    {
      analysisName: "دم",
      value: "ايجابي",
      analysisDate: "2022-2-3",
      notes:
        "حسن الطحان أحلى حسن حبنكة الكينغ لعيون أبو خالد الورد الأستاذ راتب المحترم أحلى شباب وأحلى سهرة شباب الباك ايند الزبالة",
    },
  ],
};

export const medicalCenters = {
  medicalCenters: [
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "0155 840 227",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز سند الخيري  ",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "098767898",
        },
      ],
      address: "سوريا-دمشق-الميدان بناء رقم(310)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز صندوق العافية ",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "البريد الالكتروني",
          value: "hasan@gmail.com",
        },
      ],
      address: "سوريا-دمشق-المزة بناء رقم(200)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز دعمكم حياة  ",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الزاهرة شارع خالد",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن حبنكة الميداني ",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-حمص-الحضارة بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز الزاهرة الجديدة الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الزاهرة بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
    {
      centerName: "مركز حسن الطحان الخيري",
      telecom: [
        {
          use: "المكتب",
          value: "011 212 312",
        },
        {
          use: "الموبايل",
          value: "00987654332",
        },
        {
          use: "البريد الالكتروني",
          value: "sariaAlzoubi@gmail.com",
        },
      ],
      address: "سوريا-دمشق-الصالحية بناء رقم(199)",
      description:
        "جمعية خيرية تابعه الى دعمكم حياة باشرف خالد خشيفاتي  وحسن حبنكة ",
    },
  ],
};

export const information = {
  medicalRecord: {
    vascularEntrance: "قثطرة",
    dryWeight: "72",
    bloodType: "A+",
    causeRenalFailure: "مرض السكري  مرض  الشديد",
    dialysisStartDate: "2-3-2024",
    kidneyTransplant: "نعم",

    pharmacologicalPrecedents: [
      {
        medicineName: "هيبارين",
        dateStart: "2022-12-2",
        dateEnd: "2024-10-7",
        generalDetails:
          "هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف ",
      },
      {
        medicineName: "حديد",
        dateStart: "2022-12-2",
        dateEnd: "2024-10-7",
        generalDetails:
          "هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف ",
      },
      {
        medicineName: "ايبوتين",
        dateStart: "2022-12-2",
        dateEnd: "2024-10-7",
        generalDetails:
          "هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف ",
      },
      {
        medicineName: "فيستولا",
        dateStart: "2022-12-2",
        dateEnd: "2024-10-7",
        generalDetails:
          "هذا الدواء خاص الى مرضى فئة غسيل الكلى في مركز حسن الطحان الخيري باشراف ",
      },
    ],

    pathologicalPrecedents: [
      {
        illnessName: "داء السكري",
        medicalDiagnosisDate: "2012-1-10",
        generalDetails:
          "هو داء مزمن يصيب جميع المرضى عافانا وعافاكم الله من هذا المرض",
      },
      {
        illnessName: "داء الحساسية",
        medicalDiagnosisDate: "2014-1-10",
        generalDetails:
          "هو داء مزمن يصيب جميع المرضى عافانا وعافاكم الله من هذا المرض",
      },
      {
        illnessName: "داء البحصة",
        medicalDiagnosisDate: "2015-1-10",
        generalDetails:
          "هو داء مزمن يصيب جميع المرضى عافانا وعافاكم الله من هذا المرض",
      },
    ],

    surgicalPrecedents: [
      {
        surgeryName: "عملية استئصال زائدة",
        surgeryDate: "2019-12-2",
        generalDetails:
          "تمت هذه العملية في مشفى المواساة تحت اشراف الطبيب سارية الزعبي المحترم",
      },
      {
        surgeryName: "عملية استئصال معدة",
        surgeryDate: "2020-26-2",
        generalDetails:
          "تمت العملية في مشفى المجتهد تحت اشراف الطبيب الضعيف رفعت عبد الواحد وقد انتهت هذه العملية بالفشل",
      },
      {
        surgeryName: "عملية استئصال معدة",
        surgeryDate: "2020-16-2",
        generalDetails:
          "تمت العملية في مشفى المجتهد تحت اشراف الطبيب الضعيف رفعت عبد الواحد وقد انتهت هذه العملية بالفشل",
      },
    ],
  },
};

export const prescription = {
  prescriptions: [
    {
      doctor: "الطبيب سارية الزعبي",
      medicines: [
        {
          status: "نشطة",
          name: "التهاب",
          dateOfStart: "2030-4-5",
          dateOfEnd: "2040-4-5",
          details: "يرجى أخذ ثلاث حبات يوميا قبل الطعام",
        },
        {
          status: "منتهية",
          name: "سيتامول",
          dateOfStart: "2030-4-5",
          dateOfEnd: "2040-4-5",
          details: " يرجى أخذ ثلاث حبات يوميا قبل الطعام أنا حتى مشي ما أمشي",
        },
        {
          status: "منتهية",
          name: "حديد",
          dateOfStart: "2030-4-5",
          dateOfEnd: "2040-4-5",
          details: "يرجى أخذ ثلاث حبات يوميا قبل الطعام",
        },
      ],
    },
  ],
};

export const statistic = {
  waitingList: 1500,
  patients: 200,
  dialysisSessions: 3000,
};

export const pieChartData = {
  medicines: {
    heparin: 40,
    iron: 20,
    epoetin: 30,
  },
  causeRenalFailure: {
    diabetes: 150,
    heartDiseases: 100,
    bloodPressure: 80,
    otherDiseases: 300,
  },
};

export const auditing = [
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
  {
    operation: "السجل الطبي",
    date: "2-3-2024",
    affectedUser: "أسماء درباني",
    affectorUser: "رفعت عبد الواحد",
    oldData: "71",
    newData: "73",
  },
];

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
export const orders = arr.map((order, index) => {
  return {
    type: "المراكز الطبية",
    order: "سارية الزعبي",
    details:
      "أريد نقل المريض محمد خالد من مركز سند الخيري الى مركز حسن الطحان الخيري وذلك بسبب نقص في التجهيزات ",
  };
});

export const GeneralDialysisData = [
  {
    patientname: "حيدر البياتي",
    nursename: "سعيد النايحة",
    date: "4كانون 2024 الثاني ",
    hour: "12:00PM",
    chair: "20",
    room: "القاعة الاولى",
  },
  {
    patientname: "حيدر البياتي",
    nursename: "سعيد النايحة",
    date: "4كانون 2024 الثاني ",
    hour: "12:00PM",
    chair: "20",
    room: "القاعة الاولى",
  },
  {
    patientname: "حيدر البياتي",
    nursename: "سعيد النايحة",
    date: "4كانون 2024 الثاني ",
    hour: "12:00PM",
    chair: "20",
    room: "القاعة الاولى",
  },
  {
    patientname: "حيدر البياتي",
    nursename: "سعيد النايحة",
    date: "4كانون 2024 الثاني ",
    hour: "12:00PM",
    chair: "20",
    room: "القاعة الاولى",
  },
  {
    patientname: "حيدر البياتي",
    nursename: "سعيد النايحة",
    date: "4كانون 2024 الثاني ",
    hour: "12:00PM",
    chair: "20",
    room: "القاعة الاولى",
  },
  {
    patientname: "حيدر البياتي",
    nursename: "سعيد النايحة",
    date: "4كانون 2024 الثاني ",
    hour: "12:00PM",
    chair: "20",
    room: "القاعة الاولى",
  },
  {
    patientname: "حيدر البياتي",
    nursename: "سعيد النايحة",
    date: "4كانون 2024 الثاني ",
    hour: "12:00PM",
    chair: "20",
    room: "القاعة الاولى",
  },
  {
    patientname: "حيدر البياتي",
    nursename: "سعيد النايحة",
    date: "4كانون 2024 الثاني ",
    hour: "12:00PM",
    chair: "20",
    room: "القاعة الاولى",
  },
  {
    patientname: "حيدر البياتي",
    nursename: "سعيد النايحة",
    date: "4كانون 2024 الثاني ",
    hour: "12:00PM",
    chair: "20",
    room: "القاعة الاولى",
  },
  {
    patientname: "حيدر البياتي",
    nursename: "سعيد النايحة",
    date: "4كانون 2024 الثاني ",
    hour: "12:00PM",
    chair: "20",
    room: "القاعة الاولى",
  },
];

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
