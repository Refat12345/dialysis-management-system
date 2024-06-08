/* eslint-disable react/prop-types */
import { DropDown, HorizontalLine, Search } from "../../../../components"

const Header = ({setFilter ,handleChange}) => {
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
        <Search handleInputValue={handleChange}/>
        <div className="mb-4"></div>
        <HorizontalLine/>
        <div className="mb-4"></div>
        <div className="w-64">
        <DropDown colors={colors} filter={ filter.array} title={filter.title} onSelect={(val) => {
                setFilter(val)
              }}/>
        </div>
    </div>
  )
}

export default Header