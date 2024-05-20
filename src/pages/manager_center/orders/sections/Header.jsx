import { DropDown, HorizontalLine, Search } from "../../../../components"

const Header = () => {
    const colors = {
        titleColor:"primaryColor",
        contentColor:"bgButtonColor"
    }
    const filter = {
        title :"نوع الطلب",
        array :["المراكز الطبية" , "السكرتارية" ,"المرضى"]
    }
  return (
    <div dir="rtl">
        <Search/>
        <div className="mb-4"></div>
        <HorizontalLine/>
        <div className="mb-4"></div>
        <div className="w-64">
        <DropDown colors={colors} filter={ filter.array} title={filter.title} onSelect={(val) => {
                console.log(val);
              }}/>
        </div>
    </div>
  )
}

export default Header