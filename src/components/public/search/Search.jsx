/* eslint-disable react/prop-types */

const Search = ({handleInputValue , placeholder}) => {

  return (
    <div className="flex items-center">
        <input type="text" placeholder={`${placeholder != undefined ? placeholder  : "بحث..." }`} className={`border border-gray-400 py-1 px-4 rounded-full w-64 placeholder-gray-500 font-primaryBold ${placeholder!=undefined ?"text-md":""}`} onInput={handleInputValue}/>
    </div>
  )
}

export default Search