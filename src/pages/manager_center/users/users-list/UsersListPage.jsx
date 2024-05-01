import { SideBar } from "../../../../components";
import Header from "../../../../components/manager_center/users/Header";
import ViewCard from "../../../../components/manager_center/users/ViewCard";
import { managerCenterSideBar,cardsData } from "../../../../data/data";

const UsersListPage = () => {
  return (
    <div  className=" flex flex-row-reverse h-screen">
      <SideBar sideBarData={managerCenterSideBar}/>
        <div className="flex-grow">
      <Header/>
      <ViewCard cardsData={cardsData}/>
    </div>
    </div>
  );
};

export default UsersListPage;
