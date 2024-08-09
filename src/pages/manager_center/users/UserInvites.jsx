import { PageLoader } from "../../../components";
import nurse from "./../../../assets/icons/medical-center/users/users-list/doctor.svg";
import { useUsers } from "./users-list/UserListState";
import { useState, useEffect } from "react";

const BusinessCard = ({
  fullName,
  nationalNumber,
  phoneNumber,
  email,
  verificationCode,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-UserInviteCard ">
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src={nurse}
          alt="QR Code"
        />
        <div className="text-lg">
          <p className="text-gray-900 leading-none">{fullName}</p>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-600">رقم الهاتف: {phoneNumber}</p>
        <p className="text-gray-600 mt-3"> الرقم الوطني: {nationalNumber}</p>

        <p className="text-gray-600 mt-3">كود الدعوة : {verificationCode}</p>
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
  } = useUsers();

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

  if (!userInvites) return <div>No data available</div>;
  
  const dataToDisplay = filteredDataForInvites.length ? filteredDataForInvites : userInvites;

  console.log("poiuiop",filteredDataForInvites)

  return (
    
    <>
      {/* {isUserInvitesSuccess && userInvites && (
        <div className="flex-grow mr-56 ml-8 mt-3" dir="rtl">
            <input
                  type="text"
                  placeholder="...البحث"
                  className="bg-search text-right w-3/12 p-2.5 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600 mb-4"
                  onChange={(e) => setSearchTermForInvites(e.target.value)}
                />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {userInvites.map((card, index) => (
              <BusinessCard key={index} {...card} />
            ))}
          </div>
        </div>
      )} */}

      {isUserInvitesSuccess && userInvites && (
        <div className="flex-grow mr-56 ml-8 mt-3" dir="rtl">
          <input
            type="text"
            placeholder="...البحث"
            className="bg-search text-right w-3/12 p-2.5 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600 mb-4"
            onChange={(e) => {
                setSearchTermForInvites(e.target.value)
                setSearchTermState(e.target.value)
            } 
                
            }
          />

          {
            noResultsFound ? (
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

            ) :
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dataToDisplay.map((card, index) => (
              <BusinessCard key={index} {...card} />
            ))}
          </div>
          }

         
        </div>
      )}
    </>
  );
};

export default UserInvites;
