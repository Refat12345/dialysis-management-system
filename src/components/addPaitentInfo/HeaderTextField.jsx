/* eslint-disable react/prop-types */

function HeaderTextField({ icon, text ,width }) {
  return (
    <div>
      <div className="flex flex-row pb-2 ">
        {icon != null ? <img className="w-7 h-7" src={icon} /> : null}
        <span className="text-titleColor font-bold text-lg pr-2">{text}</span>
      </div>
      {
        width!=null? <hr className="custom-hrrrr" />: <hr className="custom-hrrr" />
      }
     
    </div>
  );
}

export default HeaderTextField;
