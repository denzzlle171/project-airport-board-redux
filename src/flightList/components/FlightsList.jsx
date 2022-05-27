
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import DeparturesList from './DeparturesList';
import ArrivalsList from './ArrivalsList';
import CreateFlightInput from './CreateFlightInput';
import NavigationBar from './NavigationBar';
import  {fetchFlightList}  from '../flightGateway'
import { connect } from 'react-redux';
import * as allActions  from '../flight.actions'
import { useSearchParams } from 'react-router-dom';

const FlightsList = ({ flightDataRecived }) => {

  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    fetchFlightList().then((flightData) => flightDataRecived(flightData[0]));
  });

 

 
  
  return (
    <div className="page">
      <h1 className="page_title">SEARCH FLIGHT</h1>
      <main className="page_search">
        <CreateFlightInput setSearchParam={setSearchParam} />
        <Routes>
          <Route
            path="/departures"
            
            element={
              <>
                <NavigationBar activTabDep={true} searchParam={searchParam} />
                <DeparturesList />
              </>
            }
          />
          <Route
            path="/arrivals"
            element={
              <>
                <NavigationBar activTabArr={true} searchParam={searchParam} />
                <ArrivalsList />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <NavigationBar activTabDep={true} searchParam={searchParam} />
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


