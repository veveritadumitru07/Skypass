import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          ✈ SkyPass
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/flights">Zboruri</NavLink>
          <NavLink to="/bookings">Rezervările mele</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
