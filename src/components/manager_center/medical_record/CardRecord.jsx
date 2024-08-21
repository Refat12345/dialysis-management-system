/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Cookies from "js-cookie"
import { convertDateToArabicFormat } from "../../../utils/DateUtils";
const CardRecord = ({object,title}) => {
const array = Object.values(object);
const result = array.slice(1);
const height = window.innerHeight;

let parentResponsive = height > 600 ? ( height > 700 ? (Cookies.get("role")=== "secretary" ? "px-4 pt-5 pb-1" :"px-4 pt-6") : (Cookies.get("role") === "secretary" ? "px-4 pt-3 pb-1" :"px-4 pt-4") ) : "px-2 pt-3 pb-1" ;
let childResponsive = height > 600? ( height > 700 ? "mb-4" : "mb-3") : "mb-2";
let contentResponsive = height > 600 ? ( height>740 ? "leading-[2]" : "leading-[1.5]" ) : "";

    return(
        <div dir="rtl" className={`flex-grow bg-white rounded-lg shadow-xl ${parentResponsive}`}>
                            {result.map((array,index) =>{
                                return <div key={index} className={`${childResponsive}`}>
                                            <span className="">
                                            {title[index]}:
                                            </span>
                                            <span className= {`font-primaryBold whitespace-normal text-justify break-words  mr-[2%] ${contentResponsive}`}>
                                                {result.length === 3 ? (
                                                    index === 1 ? convertDateToArabicFormat(array) : array
                                                ): (index === 1 || index === 2 ? convertDateToArabicFormat(array) : array)}
                                            </span>
                                        </div>
                            })}
        </div>
)
}

export default CardRecord