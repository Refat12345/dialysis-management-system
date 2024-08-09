/* eslint-disable react/prop-types */
import "./style.css"

const Card = ({title,statistic,index}) => {
  const height = window.innerHeight; 
  const width = window.innerWidth
  const responsve = index === undefined && (width < 1420 ? "min-w-[280px]" :"min-w-72")
  
  const style = {
  borderRadius: '50%',
  backgroundColor:index === 1 ? "rgba(237, 106, 94, 0.16)": (index === 2 ? "rgba(222, 222, 234, 1)": (index === 3 ? "rgba(17, 110, 65, 0.16)": (index === 4 ?"rgba(170, 106, 23, 0.16)" :(index === 5 ?"rgba(90, 139, 176, 0.16)" :"rgba(212, 183, 124, 0.16)")))) ,
};
  const styleComponent = {
    marginTop: height >700 ? "24px" : (height<620?"10px":"16px")
}
  return (
    <>
        <div dir="ltr" style={styleComponent} className={`px-6 max-w-xs  mx-5 bg-white rounded-xl shadow-lg flex flex-row-reverse items-center text-right  ${responsve} ${index !=undefined ? "element":""}`}>
            <div style={style} className=" flex justify-center  items-center w-16 h-16 ">
            <img src={title.icon} alt="" />
            </div>
            <div className="mr-6">
              <div className="text-base mb-2">{title.name}</div>
              <p className="font-bold text-2xl">{statistic}</p>
            </div>
      </div>    
  </>
)
}

export default Card