/* eslint-disable react/prop-types */

const Medicine = ({medicine,title , doctor}) => {
    const height = window.innerHeight;
    const arrayTitle = Object.values(title);
  return (
    <div  dir="rtl" className={`flex flex-row justify-between p-4 bg-white ${height>600?(height>700?"mb-6":"mb-4"):"mb-2"}`}>
        <div className="doctor status ">
            <p className="text-lg font-primaryBold mb-4"> 
                {doctor}
            </p>
            <div className={`rounded-full p-1  w-[50%] ${medicine.status === "منتهية" ?"bg-green-100" :"bg-bgMedicineStatus"} `}>
                <p className={`text-center font-primaryRegular ${medicine.status === "منتهية" ? "text-green-500 " :"text-titleSideColor"}`}>{medicine.status}</p>
            </div>
        </div>
        <div className="title font-primaryRegular  text-base ">
            <p className={`${height>600?(height>700?"mb-3":"mb-2"):"mb-1"}`}>{arrayTitle[0]}:</p>
            <p className={`${height>600?(height>700?"mb-3":"mb-2"):"mb-1"}`}>{arrayTitle[1]}:</p>
            <p className={`${height>600?(height>700?"mb-2":"mb-1"):"mb-0"}`}>{arrayTitle[2]}:</p>
        </div>
        <div className="name date text-base font-primaryBold text-titleSideColor">
            <p className={`${height>600?(height>700?"mb-3":"mb-2"):"mb-1"}`}>{medicine.name}</p>
            <p className={`${height>600?(height>700?"mb-3":"mb-2"):"mb-1"}`}>{medicine.dateOfStart}</p>
            <p className={`${height>600?(height>700?"mb-2":"mb-1"):"mb-0"}`}>{medicine.dateOfEnd}</p>
        </div>
        <div className="note text-base w-[30%] leading-[1.5]">
            <p className={`font-primaryRegular ${height>600?(height>700?"mb-3":"mb-2"):"mb-1"}`}>{arrayTitle[3]}:</p>
            <p className="font-primaryBold text-titleSideColor">{medicine.details}</p>
        </div>
        
    </div>
  )
}

export default Medicine