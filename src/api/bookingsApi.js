import { request } from './http.js'

// Toate rezervările, fiecare cu datele zborului atașate (câmpul "flight")
export function getBookings() {
  return request('/bookings?_expand=flight')
}

// O singură rezervare, cu datele zborului
export function getBookingById(id) {
  return request(`/bookings/${id}?_expand=flight`)
}

// Create: adaugă o rezervare nouă
export function createBooking(booking) {
  return request('/bookings', {
    method: 'POST',
    body: JSON.stringify(booking),
  })
}

// Update: înlocuiește datele unei rezervări existente
export function updateBooking(id, booking) {
  // Câmpul "flight" vine din _expand și nu trebuie salvat în db.json
  // eslint-disable-next-line no-unused-vars
  const { flight, ...data } = booking
  return request(`/bookings/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

// Delete: șterge o rezervare
export function deleteBooking(id) {
  return request(`/bookings/${id}`, { method: 'DELETE' })
}