/* eslint-disable react/prop-types */

const Card = ({ data }) => {
  const style = {
    width: "75px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fffbf4",
    alignItems: "center",
  };
  return (
    <>
      <div className="p-6 max-w-xs min-w-80 min-h-24 mt-5 mx-5 bg-white rounded-xl shadow-lg flex flex-row-reverse items-center text-right  ">
        <div style={style}>
          <img src={data.icon} alt="" />
        </div>
        <div className="mr-6">
          <div className=" font-boldOne text-base text-black mb-2">
            {data.name}
          </div>
          <p className="text-black font-bold text-2xl">{data.count}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
