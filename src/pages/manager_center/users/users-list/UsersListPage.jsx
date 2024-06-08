/* eslint-disable no-unused-vars */
import { PaginationComponent, SideBar } from "../../../../components";
import Header from "../../../../components/manager_center/users/Header";
import ViewCard from "../../../../components/manager_center/users/ViewCard";
import { cardsData } from "../../../../data/data";
import React, { useState, useEffect } from "react";
import { useGetUserQuery } from "./UserSlice";
import LoadingComponent from "../../../../components/public/LoadingComponent ";
import { UserProvider, useUsers } from "./UserListState";
// const UsersListPage = () => {
//   const { userData, isLoading, isSuccess,setSearchTerm ,filteredData} = useUsers();

//   if (isLoading) return <LoadingComponent />;
//   if (!filteredData.length) return <div>No data available</div>; // التحقق من filteredData

//   return (
//     <>
//       {isSuccess && !isLoading && (
//         <div className="flex-grow mr-56 ml-8">
//           <Header setSearchTerm={setSearchTerm} />
//           <PaginationComponent
//             data={filteredData}
//             RenderComponent={ViewCard}
//             itemsPerPage={4}
//           />
//         </div>
//       )}
//     </>
//   );
// };
const UsersListPage = () => {
  const { userData, isLoading, isSuccess, setSearchTerm, filteredData } = useUsers();
  const [searchTerm, setSearchTermState] = useState('');
  const [noResultsFound, setNoResultsFound] = useState(false);

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

  if (isLoading) return <LoadingComponent />;
  if (!userData.length && !searchTerm) return <div>No data available</div>;

  return (
    <>
      {isSuccess && !isLoading && (
        <div className="flex-grow mr-56 ml-8">
          <Header setSearchTerm={(term) => {
            setSearchTermState(term);
            setSearchTerm(term);
          }} />
          {noResultsFound && <div>No results found for your search.</div>}
          <PaginationComponent
            data={filteredData.length ? filteredData : userData}
            RenderComponent={ViewCard}
            itemsPerPage={4}
          />
        </div>
      )}
    </>
  );
};

export default UsersListPage;
