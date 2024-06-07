/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const CardRecord = ({object,title}) => {
const array = Object.values(object);
const height = window.innerHeight;

let parentResponsive = height > 600 ? ( height > 700 ? "px-4 pt-6" : "px-4 pt-4" ) : "px-1 pt-2" ;
let childResponsive = height > 600? ( height > 700 ? "mb-4" : "mb-3") : "mb-2";
let contentResponsive = height > 600 ? ( height>740 ? "leading-[2]" : "leading-[1.5]" ) : "";

    return(
        <div dir="rtl" className={`bg-white rounded-lg shadow-xl ${parentResponsive}`}>
                            {array.map((array,index) =>{
                                return <div key={index} className={`${childResponsive}`}>
                                            <span className="">
                                            {title[index]}:
                                            </span>
                                            <span className= {`font-primaryBold whitespace-normal text-justify break-words  mr-[2%] ${contentResponsive}`}>
                                                {array}
                                            </span>
                                        </div>
                            })}
        </div>
)
}

export default CardRecord