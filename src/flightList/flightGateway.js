// const baseUrl = 'https://api.iev.aero/api/flights/10-02-2020'; -- original API

const baseUrl = 'https://6287ac5a7864d2883e8a322f.mockapi.io/api/v1/Flights'; //-castom API
export const fetchFlightList = () =>{
 return fetch(baseUrl).then((response) => response.json())}