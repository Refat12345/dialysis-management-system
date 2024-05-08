/* eslint-disable react/prop-types */


const Card = ({data}) => {
  const height = window.innerHeight; 
  const style = {
  borderRadius: '50%',
  backgroundColor:"#fffbf4",
};
  const styleComponent = {
    marginTop: height >700 ? "24px" : (height<620?"10px":"16px")
}
  return (
    <>
        <div style={styleComponent} className="p-6 max-w-xs min-w-80 mx-5 bg-white rounded-xl shadow-lg flex flex-row-reverse items-center text-right  ">
            <div style={style} className=" flex justify-center items-center w-16 h-16 ">
            <img src={data.icon} alt="" />
            </div>
            <div className="mr-6">
              <div className=" font-boldOne text-base text-black mb-2">{data.name}</div>
              <p className="text-black font-bold text-2xl">{data.count}</p>
            </div>
      </div>    
  </>
)
}

export default Card