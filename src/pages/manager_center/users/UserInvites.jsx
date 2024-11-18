/* eslint-disable react/prop-types */
import { PageLoader, Search } from "../../../components";
import nurse from "./../../../assets/icons/medical-center/users/users-list/doctor.svg";
import { useState, useEffect } from "react";
import secretary from "../../../assets/icons/medical-center/users/users-list/secretary.svg";
import doctor from "../../../assets/icons/medical-center/users/users-list/doctor.svg";
import { ManagerIcon } from "./../../../assets";
import { useUserInvites } from "./UserInvitesState";
export function RoleImage({ role, width, height }) {
  let imageSrc;
  switch (role) {
    case "nurse":
      imageSrc = nurse;
      break;
    case "admin":
      imageSrc = ManagerIcon;
      break;
    case "secretary":
      imageSrc = secretary;
      break;
    default:
      imageSrc = doctor;
  }

  return <img className={`w-${width} h-${height}`} src={imageSrc} alt={role} />;
}

const BusinessCard = ({
  fullName,
  nationalNumber,
  phoneNumber,
  verificationCode,
  role,
}) => {
  return (
    <div className="w-full  rounded-xl overflow-hidden shadow-lg p-4 bg-white">
      <div className="flex items-center ">
        <RoleImage role={role} width={11} className="mr-4" />

        <div className="text-sm sm:text-lg">
          <p className="text-titleColor font-bold leading-none mr-1">{fullName}</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-6">
        <div className="flex">
          <p>رقم الهاتف:</p>
        <p className="text-gray-600 font-bold mr-1 text-xs sm:text-base">
            {phoneNumber}
        </p>
        </div>
        <div className="flex mt-2 ">
          <p>الرقم الوطني:</p>
        <p className="text-gray-600 font-bold mr-1 text-xs sm:text-base">
          {" "}
            {nationalNumber}
        </p>
        </div>
        <div className="flex mt-2">
          <p>كود الدعوة : </p>
        <p className="text-gray-600 font-bold mr-1 text-xs sm:text-base">
          {verificationCode}
        </p>
        </div>
      </div>
    </div>
  );
};

const UserInvites = () => {
  const {
    isUserInvitesSuccess,
    isUserInvitesLoading,
    userInvites,
    filteredDataForInvites,
    setSearchTermForInvites,
  } = useUserInvites();

  console.log("invite ",userInvites)

  const [searchTerm, setSearchTermState] = useState("");
  const [noResultsFound, setNoResultsFound] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      if (filteredDataForInvites.length) {
        setNoResultsFound(false);
      } else {
        setNoResultsFound(true);
      }
    } else {
      setNoResultsFound(false);
    }
  }, [searchTerm, filteredDataForInvites]);

  if (isUserInvitesLoading)
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
    );

  if (userInvites.length === 0 ) 
    return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h2 className="text-2xl font-bold text-gray-500 mr-48">لا يوجد دعوات </h2>
  </div>
  )

 

  const dataToDisplay = filteredDataForInvites.length
    ? filteredDataForInvites
    : userInvites;

  return (
    <>
      {isUserInvitesSuccess && userInvites && (
        <div className="flex-grow mr-48 min-h-screen bg-bgMedicalRecord  " dir="rtl">
          <div className="mx-[2%] mt-5">
          <Search
          handleInputValue={(e) => {
            setSearchTermForInvites(e.target.value);
            setSearchTermState(e.target.value);
          }}
          />
            <div className="mb-5"></div>
          {noResultsFound ? (
            <div
              className="no-results-message"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p>لم نعثر على أي نتائج مطابقة لبحثك.</p>
                <p>جرب كلمات مفتاحية مختلفة أو قم بتوسيع نطاق البحث.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 ">
              {dataToDisplay.map((card, index) => (
                <BusinessCard key={index} {...card} />
              ))}
            </div>
          )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserInvites;
