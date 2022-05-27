import React from 'react';


  const BoardItem = ({ item }) => {
    return (
      <li className="board-list__item">
        <span className="elmt">{item.Terminal}</span>
        <span className="elmt">{item.Time}</span>
        <span className="elmt">{item.Destination}</span>
        <span className="elmt">{item.Status}</span>
        <span className="elmt">{item.Airline}</span>
        <span className="elmt">{item.Flight}</span>
      </li>
    );
  };


export default BoardItem;