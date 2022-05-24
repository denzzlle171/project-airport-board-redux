// const baseUrl = 'https://api.iev.aero/api/flights/10-02-2020';

const baseUrl = 'https://6287ac5a7864d2883e8a322f.mockapi.io/api/v1/Flights';

// export const fetchFlightList = () =>
//   fetch(baseUrl).then((response) => response.json());


export const fetchFlightList = () =>{
 return fetch(baseUrl).then((response) => response.json())}