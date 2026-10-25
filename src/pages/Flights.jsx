import { useState } from 'react'
import { useFlights } from '../hooks/useFlights.js'
import { filterFlights } from '../utils/filterFlights.js'
import FlightCard from '../components/FlightCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Loader from '../components/Loader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import '../styles/flights.css'

function Flights() {
  const { flights, loading, error, reload } = useFlights()
  const [query, setQuery] = useState('')

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

  // Lista se recalculează la fiecare literă tastată
  const visibleFlights = filterFlights(flights, query)

  return (
    <section>
      <h1>Zboruri disponibile</h1>

      <SearchBar value={query} onChange={setQuery} />

      <p className="results-count">
        {visibleFlights.length} din {flights.length} zboruri
      </p>

      {visibleFlights.length === 0 ? (
        <EmptyState
          icon="✈️"
          title="Nu s-au găsit zboruri"
          message="Încearcă alt oraș sau verifică ce ai scris."
        />
      ) : (
        <div className="flight-list">
          {visibleFlights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Flights