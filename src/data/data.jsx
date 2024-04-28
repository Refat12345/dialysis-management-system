/* eslint-disable no-unused-vars */
import Patient from "../assets/icons/medical-center/dashboard/Sessions/patient.svg"

//admin
import HomePageICon from "../assets/icons/medical-center/dashboard/SideBar/homePage.svg"
import UsersIcon from "../assets/icons/medical-center/dashboard/SideBar/Users.svg"
import PatientIcon from "../assets/icons/medical-center/dashboard/SideBar/patientSideBar.svg"
import AppointmentsIcon from "../assets/icons/medical-center/dashboard/SideBar/Appointment.svg"
import DialysisSessionsIcon from "../assets/icons/medical-center/dashboard/SideBar/laundrySession.svg"
import LoggingICon from "../assets/icons/medical-center/dashboard/SideBar/transactionLog.svg"
import ManagerIcon from "../assets/icons/medical-center/dashboard/SideBar/manger.svg"
import OrdersIcon from "../assets/icons/medical-center/dashboard/SideBar/order.svg"
import NotesIcon from "../assets/icons/medical-center/dashboard/SideBar/notification.svg"
import SettingsIcon from "../assets/icons/medical-center/dashboard/SideBar/setting.svg"
import LogOutIcon from "../assets/icons/medical-center/dashboard/SideBar/logOut.svg"
//================

export const titleSession = {
    title: "الجلسات الحالية",
    dialysisTitle : {
        icon:Patient,
        patientName:"اسم المريض",
        nurseName:"اسم الممرض",
        startTime:"موعد بدء الجلسة",
        endTime:"موعد انتهاء الجلسة",
        chair:"الكرسي",
        hall:"القاعة"
    }
}



export const adminSideBar = {
    name:"حسن حبنكة",
    title:"مدير مركز الطحان الخيري",
    icon:ManagerIcon,
    items:[
        {name:"الصفحة الرئيسية",icon:HomePageICon},
        {name:"المستخدمين",icon:UsersIcon},
        {name:"المرضى",icon:PatientIcon},
        {name:"المواعيد",icon:AppointmentsIcon},
        {name:"جلسات الغسيل",icon:DialysisSessionsIcon},
        {name:"سجل العمليات",icon:LoggingICon},
        {name:"الطلبات",icon:OrdersIcon},
        {name:"الملاحظات",icon:NotesIcon},
        {name:"الاعدادت",icon:SettingsIcon},
        {name:"تسجيل الخروج",icon:LogOutIcon}
]
}




const data = [1,2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,7,8,9,10,11
    ,2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,7
    ,8,9,10,11,2,3,4,5,6,7,8,9,10
    ,11,2,3,4,5,6,7,8,9,10,11,2
    ,3,4,5,6,7,8,9,10,11]
    
export const sessions = data.map((data,index)=>{
    return {
        patientName:"أحمد محمد",
        nurseName:"عدنان العويدات",
        startTime:"الساعة السادسة",
        endTime:"الساعة الثانية عشرة",
        chair:index+12,
        hall:index+1
        }
})