import React from "react";
import BoardItem from './BoardItem';
import NotFound from './NotFound';
import { useSearchParams } from 'react-router-dom';
import { parseData } from '../flightGateway';
 
const BoardFlightList = ({ flightsData }) => {
  const [searchParam] = useSearchParams();
  const filter = searchParam.get('search') || '';



  if (!flightsData) {
    return null;
  }


  const getDay = 10 // new Date(data).getDate();

  const searchFiltred = flightsData.filter(
    (item) => parseData(item.actual) === getDay
  );
 
  const filterData = searchFiltred.filter(
    (line) => line.codeShareData[0].codeShare
        .toUpperCase()
        .includes(filter.toUpperCase())
  );

  return (
    <>
      <ul className="board-list">
        {filterData.map((item) => (
          <BoardItem key={item.ID} item={item} />
        ))}
      </ul>
      {filterData.length === 0 && <NotFound />}
    </>
  );
};


export default BoardFlightList;
