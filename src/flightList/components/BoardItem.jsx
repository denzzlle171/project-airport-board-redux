import React from 'react';

const BoardItem = ({ item }) => {
  
  return (
    <li className="board-list__item">
      <span className="elmt">{item.term}</span>
      <span className="elmt">{item.time}</span>
      <span className="elmt">{item.destination}</span>
      <span className="elmt">{item.landed}</span>
      <span className="elmt">{item.airLine}</span>
      <span className="elmt">{item.flight}</span>
    </li>
  );
};






export default BoardItem;