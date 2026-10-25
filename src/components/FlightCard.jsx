import { Link } from 'react-router-dom'

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('ro-RO', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  })
}

// Cardul unui zbor. Dacă nu mai sunt locuri, butonul devine „Indisponibil”.
function FlightCard({ flight }) {
  const soldOut = flight.seatsAvailable === 0

  return (
    <article className="flight-card">
      <div className="flight-top">
        <span className="flight-airline">{flight.airline}</span>
        <span className="flight-date">{formatDate(flight.date)}</span>
      </div>

      <div className="flight-route">
        <div>
          <div className="flight-time">{flight.departure}</div>
          <div className="flight-code">{flight.fromCode}</div>
          <div className="flight-city">{flight.from}</div>
        </div>
        <div className="flight-line">✈</div>
        <div className="flight-right">
          <div className="flight-time">{flight.arrival}</div>
          <div className="flight-code">{flight.toCode}</div>
          <div className="flight-city">{flight.to}</div>
        </div>
      </div>

      <div className="flight-bottom">
        <div>
          <div className="flight-price">de la {flight.price} €</div>
          <div className={soldOut ? 'flight-seats sold-out' : 'flight-seats'}>
            {soldOut ? 'Nu mai sunt locuri' : `${flight.seatsAvailable} locuri disponibile`}
          </div>
        </div>
        {soldOut ? (
          <button type="button" className="btn" disabled>
            Indisponibil
          </button>
        ) : (
          <Link to={`/book/${flight.id}`} className="btn">
            Rezervă
          </Link>
        )}
      </div>
    </article>
  )
}

export default FlightCard