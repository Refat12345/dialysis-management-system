/* eslint-disable no-unused-vars */
import { PaginationComponent, SideBar } from "../../../../components";
import Header from "../../../../components/manager_center/users/Header";
import ViewCard from "../../../../components/manager_center/users/ViewCard";
import React, { useState, useEffect } from "react";
import { PageLoader } from "../../../../components/index";
import { useUsers } from "./UserListState";
import { useSelector } from "react-redux";

const UsersListPage = () => {
  const { userData, isLoading, isSuccess, setSearchTerm, filteredData } =
    useUsers();
  const [searchTerm, setSearchTermState] = useState("");
  const [noResultsFound, setNoResultsFound] = useState(false);
  const user = useSelector((state) => state.user);



  useEffect(() => {
    if (searchTerm) {
      if (filteredData.length) {
        setNoResultsFound(false);
      } else {
        setNoResultsFound(true);
      }
    } else {
      setNoResultsFound(false);
    }
  }, [searchTerm, filteredData]);

  if (isLoading)
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
    );
  if (!userData.length && !searchTerm) return <div>No data available</div>;

  return (
    <>
      {isSuccess && !isLoading && (
        <div className="flex-grow mr-56 ml-8">
          <Header
            title={"user"}
            setSearchTerm={(term) => {
              setSearchTermState(term);
              setSearchTerm(term);
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
            <PaginationComponent
              data={filteredData.length ? filteredData : userData}
              RenderComponent={ViewCard}
              itemsPerPage={4}
            />
          )}
        </div>
      )}
    </>
  );
};

export default UsersListPage;

