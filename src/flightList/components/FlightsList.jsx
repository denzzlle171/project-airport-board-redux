import React, { Component } from 'react';
import DeparturesList from './DeparturesList';
import CreateFlightInput from './CreateFlightInput';
import NavigationBar from './NavigationBar';
import  {fetchFlightList}  from '../flightGateway'
import { connect } from 'react-redux';
import * as allActions  from '../flight.actions'


// import { sortedTasksListSelector } from '../tasks.selectors';



class FlightsList extends Component {

  // componentDidMount() {
  //   fetchFlightList().
  //     then((flightData) =>
  //     this.props.flightDataRecived(flightData)
  //   );
  // }

  render() {
    return (
      <div className="page">
        <h1 className="page_title">SEARCH FLIGHT</h1>
        <main className="page_search">
          <CreateFlightInput />
          <NavigationBar />
          <DeparturesList />
        </main>
      </div>
    );
  }
}


// const mapDispatch = {
//   flightDataRecived: allActions.flightDataRecived,
// };


export default FlightsList;
  // connect(null, mapDispatch)(FlightsList);