/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const CardRecord = ({object,title}) => {
const array = Object.values(object);
const height = window.innerHeight; 
    return(
        <div dir="rtl" className={`bg-white rounded-lg    shadow-xl ${height>600?(height>700?"px-4 pt-6":"px-2 pt-4"):"px-1 pt-2"}`}>

                            {array.map((array,index) =>{
                                
                                return <>
                                        <div className={`${height>600?(height>700?"mb-4":"mb-2"):"mb-2"}`}>
                                            <span className="font-bold">
                                            {title[index]}:
                                            </span>
                                            <span className="whitespace-normal text-justify break-words  mr-[10%]">
                                                {array}
                                            </span>
                                        </div>
                                </>
                            })}
        </div>
)
}

export default CardRecord