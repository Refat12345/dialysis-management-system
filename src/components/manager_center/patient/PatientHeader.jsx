/* eslint-disable react/prop-types */

function PatientHeader({setSearchTerm ,type}) {
  return (
    <>
    {
      type === "patient" ? <div  dir="rtl">
      <input
        dir="rtl"
        type="text"
        placeholder="البحث"
        className="bg-search mt-5 text-right w-1/4 p-2.5 h-10 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
        onChange={(e) => setSearchTerm(e.target.value)}  
      />
      </div>
      :
      <div className='mr-56 overflow-x-auto  '  dir="rtl">
      <input
        dir="rtl"
        type="text"
        placeholder="البحث"
        className="bg-search mt-5 text-right w-1/4 p-2.5 h-10 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
        onChange={(e) => setSearchTerm(e.target.value)}  
      />
      </div>
    }
    
    
    
    </>
    
  )
}

export default PatientHeader
