/* eslint-disable no-unused-vars */
import { PaginationComponent, SideBar } from "../../../../components";
import Header from "../../../../components/manager_center/users/Header";
import ViewCard from "../../../../components/manager_center/users/ViewCard";
import { cardsData } from "../../../../data/data";
import React, { useState, useEffect } from 'react';

const UsersListPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    function handleResize() {
      let height = window.innerHeight;
      if (height < 500) {
        setItemsPerPage(8);
      } else if (height >= 500 && height < 700) {
        setItemsPerPage(12);
      } else if (height >= 700 && height < 900) {
        setItemsPerPage(12);
      } else if (height >= 900) {
        setItemsPerPage(16);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="flex-grow mr-56 ml-8">
      <Header />
      <PaginationComponent
        data={cardsData}
        RenderComponent={ViewCard}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default UsersListPage;
