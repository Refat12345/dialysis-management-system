/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from './Card'


function ViewCard({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
  );
}

export default ViewCard;
