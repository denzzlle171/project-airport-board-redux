import React from "react";
import BoardItem from './BoardItem';


 const arrTest = [
  {
    term: 'A',
    time: '0:55',
    destination: 'Warshawa',
    landed: '0:50',
    airLine: 'Wiz Air',
    flight: 'W66777',
  },
  {
    term: 'C',
    time: '3:20',
    destination: 'Minsk',
    landed: '3:10',
    airLine: 'LoT',
    flight: 'L11133',
  },
  {
    term: 'A',
    time: '04:21',
    destination: 'Dubai',
    landed: '4:14',
    airLine: 'Wiz Air',
    flight: 'D88887',
  },
];

const DeparturesList = () => {

  return (
    <ul className="board-list">
      {arrTest.map((item) => (
        <BoardItem key={item.flight} item={item} />
      ))}
    </ul>
  );
};
export default DeparturesList;