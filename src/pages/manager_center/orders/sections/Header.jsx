import { DropDown, HorizontalLine, Search } from "../../../../components"

const Header = () => {
    const colors = {
        titleColor:"primaryColor",
        contentColor:"bgButtonColor"
    }
    const filter = {
        title :"نوع الطلب",
        ordersOne :["المراكز الطبية" , "السكرتارية" ,"المرضى"]
    }
  return (
    <div dir="rtl">
        <Search/>
        <div className="mb-4"></div>
        <HorizontalLine/>
        <div className="mb-4"></div>
        <div className="w-64">
        <DropDown colors={colors} filter={ filter} />
        </div>
    </div>
  )
}

export default Header