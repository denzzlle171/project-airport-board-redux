export const FLIGHT_DATA_RECIVED = 'FLIGHT_DATA_RECIVED';

export const flightDataRecived = (flightData) => {
  return {
      type: FLIGHT_DATA_RECIVED,
        payload: flightData,
      
  };
};
