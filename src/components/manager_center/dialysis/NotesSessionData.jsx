import React from 'react'

export default function NotesSessionData() {
  return (
    <div>
      <div className="w-full">
        <div className="cardSix bg-cardInDialysisPage shadow-md rounded-lg overflow-hidden">
          <div className="cardSixHeader">
            <h4 className="text-xl font-semibold text-textButtonColor">
              الأدوية المعطاة
            </h4>
          </div>

          <div className="tablee  w-full">
            <div
              dir="rtl"
              className="w-full    rounded-lg overflow-hidden"
            >
              <textarea
                className="notes  w-full  text-lg text-gray-700  rounded-lg   "
                placeholder="أدخل ملاحظاتك هنا..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
