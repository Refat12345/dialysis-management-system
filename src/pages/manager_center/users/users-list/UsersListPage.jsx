/* eslint-disable no-unused-vars */
import { PaginationComponent, SideBar } from "../../../../components";
import Header from "../../../../components/manager_center/users/Header";
import ViewCard from "../../../../components/manager_center/users/ViewCard";
import { cardsData } from "../../../../data/data";
import React, { useState, useEffect } from "react";
import { useGetUserQuery } from "./UserSlice";
import LoadingComponent from "../../../../components/public/LoadingComponent ";
import { UserProvider, useUsers } from "./UserListState";
const UsersListPage = () => {
  const { userData, isLoading, isSuccess } = useUsers();
  console.log("userData in UsersListPage:", userData);

  if (isLoading) return <LoadingComponent />;
  if (!userData) return <div>No data available</div>;

  return (
    <>
      {isSuccess && !isLoading && (
        <div className="flex-grow mr-56 ml-8">
          <Header />
          <PaginationComponent
            data={userData}
            RenderComponent={ViewCard}
            itemsPerPage={4}
          />
        </div>
      )}
    </>
  );
};

export default UsersListPage;
