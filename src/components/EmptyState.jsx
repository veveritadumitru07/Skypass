import { Link } from 'react-router-dom'
import '../styles/common.css'

// Mesaj afișat când o listă nu are elemente.
// "action" este opțional: { to: '/flights', label: 'Caută zboruri' }
function EmptyState({ icon = '🧳', title, message, action }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icon}</div>
      <h2>{title}</h2>
      {message && <p>{message}</p>}
      {action && (
        <Link to={action.to} className="btn">
          {action.label}
        </Link>
      )}
    </div>
  )
}

export default EmptyState