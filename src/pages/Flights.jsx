import { useFlights } from '../hooks/useFlights.js'
import FlightCard from '../components/FlightCard.jsx'
import Loader from '../components/Loader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import '../styles/flights.css'

function Flights() {
  const { flights, loading, error, reload } = useFlights()

  if (loading) {
    return <Loader text="Se încarcă zborurile…" />
  }

  if (error) {
    return (
      <div className="error-box">
        <p>{error}</p>
        <button type="button" className="btn" onClick={reload}>
          Încearcă din nou
        </button>
      </div>
    )
  }

  return (
    <section>
      <h1>Zboruri disponibile</h1>

      {flights.length === 0 ? (
        <EmptyState icon="✈️" title="Nu s-au găsit zboruri" />
      ) : (
        <div className="flight-list">
          {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Flights