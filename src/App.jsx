import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Flights from './pages/Flights.jsx'
import Bookings from './pages/Bookings.jsx'
import BookingFormPage from './pages/BookingFormPage.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/book/:flightId" element={<BookingFormPage />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/:id/edit" element={<BookingFormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
