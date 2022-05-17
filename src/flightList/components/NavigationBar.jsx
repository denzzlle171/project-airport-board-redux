import React from 'react';
import { Link } from 'react-router-dom';




const NavigationBar = () => {
  return (
    <div className="navigation-bar ">
      <ul className="navigation">
        <li className="navigation__item  navigation__item-selected ">
          <Link to="/Departures">
            <i className="fa-solid fa-plane-departure "></i>
            Departures
          </Link>
        </li>
        <li className="navigation__item ">
          <Link to="/Arrivals">
            <i className="fa-solid fa-plane-arrival "></i>
            Arrivals
          </Link>
        </li>
      </ul>

      <div className="list-title">
        <ul className="list-title__board">
          <li className="list-title__item">Terminal</li>
          <li className="list-title__item">Local time</li>
          <li className="list-title__item">Destination</li>
          <li className="list-title__item">Status</li>
          <li className="list-title__item">Airline</li>
          <li className="list-title__item">Flight</li>
        </ul>
      </div>
    </div>
  );
};
export default NavigationBar;



