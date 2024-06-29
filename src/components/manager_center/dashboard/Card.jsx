/* eslint-disable react/prop-types */


const Card = ({title,statistic}) => {
  const height = window.innerHeight; 
  const width = window.innerWidth
  const responsve = width < 1420 ? "min-w-[280px]" :"min-w-72"
  const style = {
  borderRadius: '50%',
  backgroundColor:"#fffbf4",
};
  const styleComponent = {
    marginTop: height >700 ? "24px" : (height<620?"10px":"16px")
}
  return (
    <>
        <div dir="ltr" style={styleComponent} className={`px-6 max-w-xs  mx-5 bg-white rounded-xl shadow-lg flex flex-row-reverse items-center text-right  ${responsve} `}>
            <div style={style} className=" flex justify-center items-center w-16 h-16 ">
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