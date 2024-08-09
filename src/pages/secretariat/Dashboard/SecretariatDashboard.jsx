
import s1 from "./../../../assets/icons/s1.svg";
import { useAddToWaitingMutation } from "../../../services/manager_center/patient/patient_list/PatientSlice";
import {
  bodyMeduimStyle,
  bodySmallStyle,
} from "../../../utils/StyleUtils";
import { usePatient } from "../../manager_center/patient/patient_list/PaitientListState";
import { CustomButton } from "../../../components";
import { useNavigate } from "react-router-dom";

const SecretariatDashboard = () => {
  const {
    hangingPatientData,
    isLoadinghangingPatient,
    isSuccesshangingPatient
  } = usePatient();
  const navigate = useNavigate()
  console.log(hangingPatientData);
  const [addToWaiting] = useAddToWaitingMutation();
  
  const handleAddToWaiting = async (id) => {
    try {
      const result = await addToWaiting(id).unwrap();
      console.log(result);
      alert('تمت إضافة المريض إلى قائمة الانتظار بنجاح');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isSuccesshangingPatient && !isLoadinghangingPatient && hangingPatientData && (
        <div className="flex-grow mr-56 ml-8 " dir="rtl">
          <div className="flex justify-start mt-8 text-titleColor font-bold text-2xl">
            المرضى المعلقين
          </div>

          {hangingPatientData[0].length === 0 ? (
                        <div className="flex justify-center items-center h-screen">
                        <h2 className="text-2xl font-bold text-gray-500">لا يوجد مرضى معلقين</h2>
                      </div>
          
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6"
              dir="rtl"
            >
              {hangingPatientData[0].map((patient) => (
                <div key={patient.id}>
                  <div className=" bg-bgMedicalRecord px-4 w-full flex flex-col justify-start rounded-lg ">
                    <div className="cardOneHeader flex flex-row justify-start ">
                      <img src={s1} />
                      <h5 className="text-textButtonColor text-xl mr-2 mt-1">
                        {patient.fullName}
                      </h5>
                    </div>

                    <div className="cardGrid grid grid-cols-2 ">
                      <div className="flex flex-row justify-start ">
                        <img className="w-5 h-5" src={s1} />

                        <h4 className="text-right mr-2">العنوان</h4>
                      </div>
                      <h4 className="text-right">{patient.city}</h4>

                      <div className="flex flex-row justify-start mt-2">
                        <img className="w-5 h-5" src={s1} />

                        <h4 className="text-right mr-2">رقم التواصل</h4>
                      </div>
                      <h4 className="text-right">{patient.contactNumber}</h4>
                    </div>

                    <div className="flex justify-end mt-3 ml-5 mb-4">
                      <CustomButton
                        variant="solid"
                        onClick={() => {
                          navigate(`/app/appointment/${patient.id}`)
                        }}
                        className={`bg-blue-800 text-white h-8 transition-all font-semibold ${bodyMeduimStyle} hover:cursor-pointer `}
                        title={
                          <div className="flex items-center justify-center">
                            <span className={`${bodySmallStyle}`}>
                              اعطاء موعد
                            </span>
                            <div className="lg:w-2 md:w-2 w-1"></div>
                          </div>
                        }
                      />

                      <CustomButton
                        variant="solid"
                        onClick={() => handleAddToWaiting(patient.id)} 
                        className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle} mr-2 hover:cursor-pointer`}
                        title={
                          <div className="flex items-center justify-center">
                            <span className={`${bodySmallStyle}`}>
                              اضافة الى قائمة الانتظار
                            </span>
                            <div className="lg:w-2 md:w-2 w-1"></div>
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SecretariatDashboard;