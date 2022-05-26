
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import DeparturesList from './DeparturesList';
import ArrivalsList from './ArrivalsList';
import CreateFlightInput from './CreateFlightInput';
import NavigationBar from './NavigationBar';
import  {fetchFlightList}  from '../flightGateway'
import { connect } from 'react-redux';
import * as allActions  from '../flight.actions'


const FlightsList = ({ flightDataRecived }) => {

  useEffect(() => {
    fetchFlightList().then((flightData) => flightDataRecived(flightData[0]));
  });

  const serchParam = window.location.search;
  console.log(serchParam);
  
  return (
    <div className="page">
      <h1 className="page_title">SEARCH FLIGHT</h1>
      <main className="page_search">
        <CreateFlightInput />
        <Routes>
          <Route
            path="/departures"
            // path={`/departures${serchParam}`}
            element={
              <>
                <NavigationBar activTabDep={true} />
                <DeparturesList />
              </>
            }
          />
          <Route
            path="/arrivals"
            element={
              <>
                <NavigationBar activTabArr={true} />
                <ArrivalsList />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <NavigationBar activTabDep={true} />
                <DeparturesList />
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
  // }
};


const mapDispatch = {
  flightDataRecived: allActions.flightDataRecived,
};


export default connect(null, mapDispatch)(FlightsList)


