/* eslint-disable no-unused-vars */
import { PaginationComponent, SideBar } from "../../../../components";
import Header from "../../../../components/manager_center/users/Header";
import ViewCard from "../../../../components/manager_center/users/ViewCard";
import {  cardsData } from "../../../../data/data";

const UsersListPage = () => {
  return (
    <div className="flex-grow mr-52">
      <Header />
      <PaginationComponent data={cardsData} RenderComponent={ViewCard} itemsPerPage={12}/>
    </div>
  );
};

export default UsersListPage;





