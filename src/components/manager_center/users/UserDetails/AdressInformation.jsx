/* eslint-disable react/prop-types */
import location from "./../../../../assets/icons/medical-center/users/user-details/locationInformation.svg";
import { useDetailsUsers } from "./../../../../pages/manager_center/users/user-details/UserDetailsState";

function AdressInformation({ data }) {
    const { isLoading, isSuccess } = useDetailsUsers();

  return (
    <>
    {isSuccess && !isLoading && data.length != 0 && (
      <div className="border p-4 rounded-xl bg-whiteCard">
        <div className="flex flex-row justify-end  mt-2 mb-2 ">
          <div dir="ltr" className="flex flex-grow justify-start items-center">

            <img src={location} />
          
        </div>

          <h3 className="text-xl text-bgtitle">العنوان</h3>
        </div>

        <div className="flex flex-row-reverse  ">
          <div className="flex flex-col gap-2 mt-3">
           
             {data.addressData?.work?.[0]?.cityName !== undefined ? (
                <>
                  <h3 className="text-right">:العمل</h3>
                  <h3 className="text-right">
                    {data.addressData.work[0].cityName}
                  </h3>
                </>
              ) : null}
           {data.addressData?.home?.[0]?.cityName !== undefined ? (
                <>
                  <h3 className="text-right">:العمل</h3>
                  <h3 className="text-right">
                    {data.addressData.home[0].cityName}
                  </h3>
                </>
              ) : null}
          </div>
        </div>
      

    
      </div>
    )}
  </>
  )
}

export default AdressInformation
