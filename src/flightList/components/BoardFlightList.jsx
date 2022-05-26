import React from "react";
import BoardItem from './BoardItem';
// import NotFound from './NotFound';
import { useSearchParams } from 'react-router-dom';

const BoardFlightList = ({ flightsData }) => {

  const [searchParam, setSearchParam] = useSearchParams();

  const filter = searchParam.get('search') || '';


  if (!flightsData) {
  return null
  }
  
  return (
    <>
    <ul className="board-list">
      {flightsData
        .filter((line) =>
          line.Flight.toUpperCase().includes(filter.toUpperCase())
        )
        .map((item) => (
          <BoardItem key={item.Flight} item={item} />
           
        ))}
    </ul>
    {/* <NotFound/> */}
    </>
  );
};


export default BoardFlightList;
