/* eslint-disable react/prop-types */

const CheckBox = ({ state, updateState }) => {
    const handleCheckboxChange = (checkboxNumber) => {
      if (checkboxNumber === 1) {
        if(state.negative === true) {
          updateState({ negative: false });
        }else {
          updateState({ negative: true });
          updateState({ positive: false });
        }
      } else {
        if(state.positive === true){
          updateState({ positive: false });
        }else {
          updateState({ negative: false });
          updateState({ positive: true });
        }
      }
    };

    return (
      <div className="flex w-full">
        <label className="flex items-center">
          <input
            checked={state.negative}
            id="checkbox1"
            type="checkbox"
            className="form-checkbox h-6 w-6 ml-2 hover:cursor-pointer"
            onChange={() => handleCheckboxChange(1)}
          />
          <span className="ml-2 text-gray-700">سلبي</span>
        </label>
        <div className="w-[10%]"></div>
        <label className="flex items-center">
          <input
            checked={state.positive}
            id="checkbox2"
            type="checkbox"
            className = "form-checkbox h-6 w-6 text-gray-600 ml-2 hover:cursor-pointer"
            onChange={() => handleCheckboxChange(2)}
          />
          <span className="ml-2 text-gray-700">ايجابي</span>
        </label>
      </div>
    );
  };
  
  export default CheckBox;