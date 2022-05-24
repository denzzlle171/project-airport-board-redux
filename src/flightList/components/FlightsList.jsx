import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DeparturesList from './DeparturesList';
import ArrivalsList from './ArrivalsList';

import CreateFlightInput from './CreateFlightInput';
import NavigationBar from './NavigationBar';
import  {fetchFlightList}  from '../flightGateway'
import { connect } from 'react-redux';
import * as allActions  from '../flight.actions'

class FlightsList extends Component {


  componentDidMount() {

    // fetchFlightList().
    //   then((flightData) =>
    //   console.log(flightData[0])
    // );

    fetchFlightList().
      then((flightData) =>
      this.props.flightDataRecived(flightData[0])
    );
  }

  render() {
    return (
      <div className="page">
        <h1 className="page_title">SEARCH FLIGHT</h1>
        <main className="page_search">
          <CreateFlightInput />

          <Switch>
            <Route path={'/departures'}>
              <NavigationBar activTabDep={true} />
              <DeparturesList />
            </Route>

            <Route path="/arrivals">
              <NavigationBar activTabArr={true} />
              <ArrivalsList />
            </Route>

            <Route exact path="/">
              <NavigationBar activTabDep={true} />
              <DeparturesList />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}


const mapDispatch = {
  flightDataRecived: allActions.flightDataRecived,
};


export default connect(null, mapDispatch)(FlightsList)
