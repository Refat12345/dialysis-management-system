import React from "react";
import { RoleImage } from "../Card";
import MyButton from "./MyButton";
import truee from "./../../../../assets/icons/medical-center/users/user-details/true.svg";
import contact from "./../../../../assets/icons/medical-center/users/user-details/ContactInformation.svg";
export default function DigitalNationalIdentity() {
  return (
    <div className="flex-grow mr-52 ml-8 h-full mt-5 ">
      <div className="grid grid-cols-2 gap-4">
        {/* First */}
        {/* <div className="border p-4 rounded-xl col-span-2 ">
          <div className="flex flex-row justify-end   ">
            <div
              dir="ltr"
              className="flex flex-grow justify-start items-center"
            >
              <MyButton text={"خيارات الحساب"} />
            </div>

            <div className="flex flex-col mr-6 justify-center">
              <div className="flex items-center">
                <h3 className="text-right text-base text-gray-700 font-semibold text-lg">
                  {"رفعت عبد الواحد"} ({"طبيب"})
                </h3>
              </div>

              <span className=" mt-2 text-lg  text-green-500 text-right">
                {"مفعل"}
                <img
                  className="h-4 w-4 inline-block text-green-500  ml-2"
                  src={truee}
                  alt="online"
                />
              </span>
            </div>

            <RoleImage role={"طبيب"} width={20} height={20} />
          </div>

          <hr className="custom-hr mt-5 mb-4" />

          <div className="flex flex-row-reverse  ">
            <div className="flex flex-col gap-2">
              <h3 className="text-right">الجنس</h3>
              <h3 className="text-right">ذكر</h3>
            </div>

            <div className="flex flex-col gap-2 mr-36">
              <h3 className="text-right">الرقم الوطني </h3>
              <h3 className="text-right">010101093456</h3>
            </div>

            <div className="flex flex-col gap-2 mr-36 ">
              <h3 className="text-right">تاريخ الميلاد </h3>
              <h3 className="text-right">4 مايو 2024</h3>
            </div>
          </div>
        </div> */}
        {/* Second */}

        
        {/* <div className="border p-4 rounded-xl">
          <div className="flex flex-row justify-end   ">
            <div
              dir="ltr"
              className="flex flex-grow justify-start items-center"
            >
              <img src={contact} />
            </div>

            <h3>:معلومات التواصل</h3>
          </div>
          <div className="flex flex-row-reverse  ">
            <div className="flex flex-col gap-2 mt-3">
              <h3 className="text-right">الهاتف</h3>
              <h3 className="text-right">0113741201</h3>
              <h3 className="text-right mt-2">الموبايل</h3>
              <h3 className="text-right">+963992841193</h3>
              <div className="flex flex-col gap-2">
                <h3 className="text-right mt-2">البريد الاكتروني</h3>
                <h3 className="text-right">refatabdalwahed@gmail.com</h3>
              </div>
            </div>
          </div>
        </div> */}

        {/* END SECOND  */}

        {/* THIRD */}
     
        {/* THIRD END */}
      </div>
    </div>
  );
}
