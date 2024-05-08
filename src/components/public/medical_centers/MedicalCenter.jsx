/* eslint-disable react/prop-types */

const MedicalCenter = ({object}) => {
  const array = Object.values(object);
  const height = window.innerHeight;

  return (
    <div dir="rtl" className=" medical-center p-4 bg-white rounded-lg shadow-lg hover:cursor-pointer hover:bg-gray-100  ">
        <div className={`${height>600 ? (height > 700 ? "w-[25%]" :"w-[22%]"): "w-[20%]"}`}>
          <img src={array[0]}  />
        </div>
        <p className={`${height > 600 ?(height>700?"mt-4 text-lg ":"mt-2 text-base"):"mt-1 text-sm"} font-bold `}>{array[1]}</p>
        <div className={`flex ${height > 600 ?(height>700?"mt-4":"mt-2"):"mt-1"} mb-2`}>
            <img src={array[2]} />
            <p className={`${height>700?"text-sm":"text-xs"} mr-2`}>{array[3]}</p>
        </div>
    </div>
  )
}

export default MedicalCenter