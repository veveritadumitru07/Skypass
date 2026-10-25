import { request } from './http.js'

// Toate zborurile
export function getFlights() {
  return request('/flights')
}

// Un singur zbor, după id
export function getFlightById(id) {
  return request(`/flights/${id}`)
}