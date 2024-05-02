import React from "react";

export default function DialysisView() {
  const drugs = [
    { name: "حديد", dose: "2" },
    { name: "هيبارين", dose: "2" },
    { name: "ايدوتين", dose: "2" },
  ];
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 "
      dir="rtl"
    >
      {/* FIRST CARD */}
      <div className="cardOne  bg-green-100 w-full flex flex-col justify-start  rounded-lg border-t-5 border-l-5 border-red-500">
        <div className="cardOneHeader flex flex-row justify-start ">
          <h5 className="text-textButtonColor text-xl ">جلسة غسيل الكلى</h5>
        </div>

        <div className="cardGrid grid grid-cols-2 ">
          <h4 className="text-right">اسم الممرض</h4>
          <h4 className="text-right">سعيد الحوزاني</h4>

          <h4 className="text-right">اسم المركز</h4>
          <h4 className="text-right">حسن حبنكة</h4>

          <h4 className="text-right">اسم الطبيب المشرف</h4>
          <h4 className="text-right">سعيد محمد</h4>

          <h4 className="text-right">حالة الجلسة</h4>
          <h4 className="text-right">منتهية</h4>

          <h4 className="text-right">تاريخ الجلسة</h4>
          <h4 className="text-right">2024 كانون2 الثاني</h4>
        </div>
      </div>

      {/* SECOND */}
      <div className="cardTwo bg-green-100 w-full flex flex-col justify-start  rounded-lg border-t-5 border-l-5 border-borderINCardInDialysisPage ">
        <div className="cardGrid grid grid-cols-2 ">
          <h4 className="text-right">الوزن قبل الجلسة</h4>
          <h4 className="text-right ">70كغ</h4>

          <h4 className="text-right">الوزن بعد الجلسة</h4>
          <h4 className="text-right ">كغ60</h4>

          <h4 className="text-right">معدل السحب الكلي/سا</h4>
          <h4 className="text-right ">سعيد محمد</h4>

          <h4 className="text-right">وقت بداية الجلسة</h4>
          <h4 className="text-right ">12:00PM</h4>

          <h4 className="text-right">وقت نهاية الجلسة</h4>
          <h4 className="text-right ">4:00PM</h4>
        </div>
      </div>
      {/* ///////////////////////// */}
      {/* THIRD CARD  */}
      <div className="w-full">
        <div className="cardd bg-green-100 shadow-md rounded-lg overflow-hidden ">
          <div className="cardThreeHeader  ">
            <h2 className="text-2xl font-semibold text-gray-800">
              الجلسة P/BP
            </h2>
          </div>

          <div className="table w-full  ">
            <div
              dir="rtl"
              className="w-full bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="headertable flex justify-start items-center   border-b rounded-t-lg">
                <h2 className="text-xl text-gray-600 flex-1 border-l-2 ">
                  التوقيت
                </h2>
                <h3 className="text-xl text-gray-600 flex-1 ">القيمة</h3>
              </div>
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="tabledata flex justify-start items-center   border-b"
                >
                  <span className="sapn1 text-lg text-gray-700 flex-1 border-l-2 ">
                    1:30 PM
                  </span>
                  <span className="span2 text-lg text-gray-700 flex-1 pr-3">
                    11.2
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* //////////// */}
      {/* FOURTH */}
      <div className="w-full">
        <div className="cardd bg-green-100 shadow-md rounded-lg overflow-hidden ">
          <div className="cardThreeHeader  ">
            <h2 className="text-2xl font-semibold text-gray-800">
              الأدوية المعطاة
            </h2>
          </div>

          {/* <div className="table w-full  ">
            <div
              dir="rtl"
              className="w-full bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="headertable flex justify-start items-center   border-b rounded-t-lg">
                <h2 className="text-xl text-gray-600 flex-1 border-l-2 ">
                  اسم الدواء
                </h2>
                <h3 className="text-xl text-gray-600 flex-1 ">جرعة الدواء</h3>
              </div>


              {[...Array(3)].map((_, index) => (
  <div
    key={index}
    className="tabledata flex justify-start items-center border-b"
  >
    <span className="sapn1 text-lg text-gray-700 flex-1 border-l-2 ">
      حديد
    </span>
    <span className="span2 text-lg text-gray-700 flex-1 pr-3">
      2
    </span>
  </div>
))}
             
            </div>
          </div> */}
          <div className="table w-full">
            <div
              dir="rtl"
              className="w-full bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="headertable flex justify-start items-center border-b rounded-t-lg">
                <h2 className="text-xl text-gray-600 flex-1 border-l-2 ">
                  اسم الدواء
                </h2>
                <h3 className="text-xl text-gray-600 flex-1 ">جرعة الدواء</h3>
              </div>

              {drugs.map((drug, index) => (
                <div
                  key={index}
                  className="tabledata flex justify-start items-center border-b"
                >
                  <span className="sapn1 text-lg text-gray-700 flex-1 border-l-2 ">
                    {drug.name}
                  </span>
                  <span className="span2 text-lg text-gray-700 flex-1 pr-3">
                    {drug.dose}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ///////// */}
      {/* FIVE */}
      <div className="cardTwo bg-green-100 w-full flex flex-col justify-start  rounded-lg border-t-5 border-l-5 border-borderINCardInDialysisPage ">
        <div className="cardGrid grid grid-cols-2 ">
          <h4 className="text-right">تركيز الصوديوم</h4>
          <h4 className="text-right ">رقم</h4>

          <h4 className="text-right">سرعة المضخة</h4>
          <h4 className="text-right ">رقم مل/د</h4>

          <h4 className="text-right">الضغط الوريدي</h4>
          <h4 className="text-right ">رقم</h4>

          <h4 className="text-right">نوع الفلتر</h4>
          <h4 className="text-right ">xxxxxx</h4>

          <h4 className="text-right">لون الفلتر بعد الجلسة</h4>
          <h4 className="text-right ">ابيض</h4>

          <h4 className="text-right">المدخل الوعائي</h4>
          <h4 className="text-right ">قثطرة</h4>
        </div>
      </div>
      {/* //////////////////// */}
      {/* six */}
    
      <div className="w-full">
        <div className="cardSix bg-green-100 shadow-md rounded-lg overflow-hidden">
          <div className="cardSixHeader">
            <h2 className="text-2xl font-semibold text-gray-800">
              الأدوية المعطاة
            </h2>
          </div>

          <div className="tablee  w-full">
            <div
              dir="rtl"
              className="w-full   shadow-md rounded-lg overflow-hidden"
            >
              <textarea
                className="notes  w-full h-40 p-4 text-lg text-gray-700 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="أدخل ملاحظاتك هنا..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
