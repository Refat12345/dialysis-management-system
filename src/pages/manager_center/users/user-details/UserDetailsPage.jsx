import React from "react";
import UserDetailsView from "../../../../components/manager_center/users/UserDetails/UserDetailsView";

export default function UserDetailsPage() {
  return (
    <>
      <div className="flex-grow mr-36 ml-8 h-full mt-20 bg-cardDetailsColor ">
        <UserDetailsView />
      </div>
    </>
  );
}
