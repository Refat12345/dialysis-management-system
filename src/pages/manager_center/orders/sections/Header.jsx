/* eslint-disable react/prop-types */
import { DropDown, HorizontalLine, Search } from "../../../../components"

const Header = ({setFilter ,handleChange , role}) => {
    const colors = {
        titleColor:"primaryColor",
        contentColor:"bgButtonColor"
    }
    const filter = {
        title :"نوع الطلب",
        array :["انشاء حساب مستخدم" , "طلب نقل مريض" ,"طلب تعديل موعد","اضافة وردية" , "اضافة كرسي" , "اضافة المعلومات العامة لمريض" , "صرف مادة لمريض" ,"اضافة سجل طبي لمريض"]
    }
  return (
    <div dir="rtl">
        {role != "secretary"?
        <>
            <Search handleInputValue={handleChange} placeholder={"بحث حسب مقدم الطلب ..."}/>
            <div className="mb-4"></div>
            <HorizontalLine/>
            <div className="mb-4"></div>
        </> : <div className="mt-20"></div>}
        <div className="w-64">
        <DropDown colors={colors} filter={ filter.array} title={filter.title} onSelect={(val) => {
                setFilter(val)
              }}/>
        </div>
    </div>
  )
}

export default Header