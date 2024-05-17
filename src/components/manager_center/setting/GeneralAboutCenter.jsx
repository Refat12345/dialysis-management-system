import React from 'react'
import medical from "./../../../assets/icons/medical-center/setting/MedicalCenter.svg";

function GeneralAboutCenter() {
  return (
    <div className=" w-80 pb-20 pl-5 pr-5 bg-white border border-indigo-300 rounded-3xl mb-7 pt-5 mt-5">
    <div className="flex flex-col justify-center items-center ml-1">
      <img className="w-32 h-32" src={medical} />
      <span className="mt-4 text-xl">صندوق العافية المركزي</span>
    </div>

    <div className="w-72 border border-indigo-300 mt-3 p-5 rounded-3xl">
      <span className="block">مديرالمركز</span>
      <span>محمود احمد</span>
    </div>
    <div className="w-72 border border-indigo-300 mt-3 p-5 rounded-3xl">
      <span className="block">الجمعية الخيرية التابعة للمركز</span>
      <span>دعمكم حياة</span>
    </div>
    <div className="w-72 border border-indigo-300 mt-3 p-5 rounded-3xl">
      <span className="block">عنوان المركز</span>
      <span>دمشق الميدان</span>
    </div>
  </div>
  )
}

export default GeneralAboutCenter
