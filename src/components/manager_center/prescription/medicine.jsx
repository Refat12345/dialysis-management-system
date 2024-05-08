/* eslint-disable react/prop-types */

const Medicine = ({data,title}) => {
    const height = window.innerHeight;
    const arrayTitle = Object.values(title);
    const arrayData = Object.values(data);
  return (
    <div  dir="rtl" className={`flex flex-row justify-between p-4 bg-white ${height>600?(height>700?"mb-6":"mb-4"):"mb-2"}`}>
        <div className="doctor status ">
            <p className="text-lg font-bold mb-4"> 
                {arrayData[0]}
            </p>
            <div className={`rounded-full p-1  w-[50%] ${arrayData[1] === "منتهية" ?"bg-green-100" :"bg-bgMedicineStatus"} `}>
                <p className={`text-center font-bold ${arrayData[1] === "منتهية" ? "text-green-500 " :"text-titleSideColor"}`}>{arrayData[1]}</p>
            </div>
        </div>
        <div className="title font-bold  text-base">
            <p className={`${height>600?(height>700?"mb-3":"mb-2"):"mb-1"}`}>{arrayTitle[0]}:</p>
            <p className={`${height>600?(height>700?"mb-3":"mb-2"):"mb-1"}`}>{arrayTitle[1]}:</p>
            <p className={`${height>600?(height>700?"mb-2":"mb-1"):"mb-0"}`}>{arrayTitle[2]}:</p>
        </div>
        <div className="name date text-base">
            <p className={`${height>600?(height>700?"mb-3":"mb-2"):"mb-1"}`}>{arrayData[2]}</p>
            <p className={`${height>600?(height>700?"mb-3":"mb-2"):"mb-1"}`}>{arrayData[3]}</p>
            <p className={`${height>600?(height>700?"mb-2":"mb-1"):"mb-0"}`}>{arrayData[4]}</p>
        </div>
        <div className="note text-base w-[30%] leading-[1.5]">
            <p className={`font-bold ${height>600?(height>700?"mb-3":"mb-2"):"mb-1"}`}>{arrayTitle[3]}:</p>
            <p>{arrayData[5]}</p>
        </div>
        
    </div>
  )
}

export default Medicine