import NationalInformation from "./NationalInformation";
import ContactInformation from "./ContactInformation";
import {
  useDetailsUsers,
} from "./../../../../pages/manager_center/users/user-details/UserDetailsState";
import { useState, useEffect } from "react";
import AdressInformation from "./AdressInformation";
import { ToastContainer } from "react-toastify";
import PublicLoader from "../../../public/loader/PublicLoader";

function UserDetailsView() {
  const { userData, isLoading, isSuccess } = useDetailsUsers();

  const [data, setData] = useState(null);

  useEffect(() => {
    if (isSuccess && !isLoading && userData) {
      const { userDetails } = userData;
      setData(userDetails);

      const telecomData = userDetails.telecom.reduce(
        (acc, { system, value, use }) => {
          if (!acc[system]) {
            acc[system] = [];
          }
          acc[system].push({ value, use });
          return acc;
        },
        {}
      );

      const addressData = userDetails.address.reduce((acc, { use, cityName }) => {
        if (!acc[use]) {
          acc[use] = [];
        }
        acc[use].push({ cityName });
        return acc;
      }, {});
      setData((prevState) => ({
        ...prevState,
        telecomData,
        addressData,
      }));
    }
  }, [isSuccess, isLoading, userData]);

  if (isLoading) return  <div className=" h-screen bg-white">
  <PublicLoader />
</div>;
  if (!userData) return <div>No data available</div>;



  return (
    
    <>
        <ToastContainer/>

      {isSuccess && !isLoading && data &&  (
        <div>
          <h3 dir="rtl" className="-mt-12 pb-6 text-2xl text-titleColor font-bold">
            تفاصيل الحساب
          </h3>
          <div className="grid grid-cols-2 gap-4 p-4">
            <NationalInformation data={data} />
          { data.address && <AdressInformation data={data} setData={setData}  />}
            {data.address != null ? (
              <ContactInformation
                data={data}
                setData={setData}              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default UserDetailsView;