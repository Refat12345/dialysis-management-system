

const DisbursedMedicine = (state ,updateState , name) => {

return (
    <div className="bg-white p-2 ">
        <label className="flex items-center">
        <input
            // checked={state.negative}
            id="checkbox1"
            type="checkbox"
            className="form-checkbox h-6 w-6 ml-2 hover:cursor-pointer"
            // onChange={() => updateState()}
        />
        <span className="ml-2 text-gray-700">سلبي</span>
        </label>
        <span>{name}</span>
    </div>
)
}

export default DisbursedMedicine