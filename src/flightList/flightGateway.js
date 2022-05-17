const baseUrl = 'https://api.iev.aero/api/flights/10-02-2020';

export const fetchFlightList = () =>
  fetch(baseUrl).then((response) => response.json());
