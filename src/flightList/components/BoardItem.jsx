import React from 'react';
import { TimeParsing } from '../flightGateway';

  const BoardItem = ({ item }) => {
    return (
      <li className="board-list__item">
        <span className="elmt">
          {item.term === 'A' ? (
            <i className="fa-solid fa-a"></i>
          ) : (
            <i className="fa-solid fa-d"></i>
          )}
        </span>
        <span className="elmt">{TimeParsing(item.actual)}</span>
        <span className="elmt">
          {item['airportToID' + '.' + 'city_en'] ||
            item['airportFromID' + '.' + 'city_en']}
        </span>
        <span className="elmt">landed {TimeParsing(item.timeTakeofFact)}</span>
        <span className="elmt">
          <img
            className="image"
            src={`${item.codeShareData[0].airline.en.logoSmallName}`}
            alt=""
          />
          <span> {item.codeShareData[0].airline.en.name} </span>
        </span>
        <span className="elmt">{item.codeShareData[0].codeShare}</span>
      </li>
    );
  };


export default BoardItem;

