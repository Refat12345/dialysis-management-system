/* eslint-disable react/prop-types */
const CheckMark = ({ checked }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      readOnly={true}
      className="mx-2 p-2 appearance-none bg-white rounded checked:bg-bgButtonColor checked:border-transparent focus:outline-none border border-gray-400"
      style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    />
  );
};

export default CheckMark;
