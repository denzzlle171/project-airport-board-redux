import React from "react";
import BoardItem from './BoardItem';

const BoardFlightList = ({ flightsData }) => {

// console.log(flightsData);
  if (!flightsData) {
  return null
  }
  
  return (
    <ul className="board-list">
      {flightsData.map((item) => (
        <BoardItem key={item.flight} item={item} />
      ))}
    </ul>
  );
};


export default BoardFlightList;
