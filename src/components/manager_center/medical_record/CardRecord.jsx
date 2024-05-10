/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const CardRecord = ({object,title}) => {
const array = Object.values(object);
const height = window.innerHeight; 
    return(
        <div dir="rtl" className={`bg-white rounded-lg shadow-xl ${height>600?(height>700?"px-4 pt-6":"px-4 pt-4"):"px-1 pt-2"}`}>
                            {array.map((array,index) =>{
                                return <div key={index} className={`${height>600?(height>700?"mb-4":"mb-3"):"mb-2"}`}>
                                            <span className="font-primaryRegular">
                                            {title[index]}:
                                            </span>
                                            <span className= {`font-primaryBold whitespace-normal text-justify break-words  mr-[2%] ${height>600?(height>700?"leading-[2]":"leading-[1.5]"):""}`}>
                                                {array}
                                            </span>
                                        </div>
                            })}
        </div>
)
}

export default CardRecord