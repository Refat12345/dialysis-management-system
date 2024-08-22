/* eslint-disable react/prop-types */
import { PageLoader } from "../../../components";
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
    <div className="w-full  rounded overflow-hidden shadow-lg p-4 bg-UserInviteCard">
      <div className="flex items-center ">
        <RoleImage role={role} width={11} className="mr-4" />

        <div className="text-sm sm:text-lg">
          <p className="text-gray-900 leading-none mr-1">{fullName}</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-6">
        <p className="text-gray-600 text-xs sm:text-base">
          رقم الهاتف: {phoneNumber}
        </p>
        <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-base">
          {" "}
          الرقم الوطني: {nationalNumber}
        </p>
        <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-base">
          كود الدعوة : {verificationCode}
        </p>
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
        <div className="flex-grow mr-56 ml-8 mt-3" dir="rtl">
          <input
            type="text"
            placeholder="...البحث"
            className="bg-search text-right w-3/12 p-2.5 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600 mb-4"
            onChange={(e) => {
              setSearchTermForInvites(e.target.value);
              setSearchTermState(e.target.value);
            }}
          />

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
      )}
    </>
  );
};

export default UserInvites;
