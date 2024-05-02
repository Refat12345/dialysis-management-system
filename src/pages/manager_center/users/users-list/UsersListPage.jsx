/* eslint-disable no-unused-vars */
import { SideBar } from "../../../../components";
import Header from "../../../../components/manager_center/users/Header";
import ViewCard from "../../../../components/manager_center/users/ViewCard";
import { managerCenterSideBar, cardsData } from "../../../../data/data";

const UsersListPage = () => {
  return (
    <div className="flex-grow mr-52">
      <Header />
      <ViewCard cardsData={cardsData} />
    </div>
  );
};

export default UsersListPage;





