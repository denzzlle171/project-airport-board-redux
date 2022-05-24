export const arrivalsSelector = (state) => {
  if (state.flight.flightData !== null) {
    return state.flight.flightData.body.arrivals;
  }
};

export const departuresSelector = (state) => {
  if (state.flight.flightData !== null) {
    return state.flight.flightData.body.departures;
  }
};
