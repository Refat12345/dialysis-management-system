/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import CustomButton from "../../public/button/CustomButton";
import { bodyMeduimStyle } from "../../../utils/StyleUtils";
import { useSelector } from "react-redux";
import Search from "../../public/search/Search";

function PatientHeader({ setSearchTerm, type }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <>
      {type === "patient" ? (
        <>
          <div
            className="  overflow-x-auto flex justify-between items-center"
            dir="rtl"
          >
            <div className="mt-6">
              <Search handleInputValue={(e) => setSearchTerm(e.target.value)} />
            </div>
            {user.role === "secretary" && (
              <CustomButton
                variant="solid"
                onClick={() => {
                  navigate("/app/getunacceptedpatient");
                }}
                className={`bg-bgLogin mt-5  text-gray700 h-8 shadow-xl transition-all font-semibold pr-6 ${bodyMeduimStyle}`}
                title={
                  <div className="flex items-center justify-center">
                    <div className="w-2"></div>
                    <span className="text-sm">دراسة حالة المرضى</span>
                  </div>
                }
                radius="full"
              />
            )}
          </div>

          {/* <div className=" overflow-x-auto " dir="rtl"></div> */}
        </>
      ) : (
        <div className="mr-56 overflow-x-auto  " dir="rtl">
          <input
            dir="rtl"
            type="text"
            placeholder="البحث"
            className="bg-search mt-5 text-right w-1/4 p-2.5 h-10 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
    </>
  );
}

export default PatientHeader;
