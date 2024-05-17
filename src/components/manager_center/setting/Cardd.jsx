/* eslint-disable react/prop-types */
function Cardd({data,statistic}) {
    const height = window.innerHeight;

    const style = {
      
        borderRadius: "50%",
        backgroundColor: "#e4e9f4",

      };
      const styleComponent = {
        marginTop: height > 700 ? "24px" : height < 620 ? "10px" : "16px",
      };
  return (
    <div
    style={styleComponent}
    dir="rtl"
    className="h-24 pl-6 w-64 mx-5  bg-white rounded-xl shadow-lg flex flex-row-reverse items-center text-right  "
  >
    <div className="mr-6 ml-5 ">
      <p className="font-bold text-2xl">{statistic}</p>
      <div className="text-base mb-2">{data.name}</div>
    </div>

    <div
      style={style}
      className=" flex justify-center items-center w-14 h-14 "
    >
      <img src={data.icon} alt="" />
    </div>
  </div>
  )
}

export default Cardd
