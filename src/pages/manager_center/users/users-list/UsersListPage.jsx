import { SideBar } from "../../../../components";
import Header from "../../../../components/manager_center/users/Header";
import ViewCard from "../../../../components/manager_center/users/ViewCard";
import { adminSideBar,cardsData } from "../../../../data/data";

const UsersListPage = () => {
  return (
    <div>
      <SideBar sideBarData={adminSideBar} />
      <Header/>
      <ViewCard cardsData={cardsData}/>
    </div>
  );
};

export default UsersListPage;
