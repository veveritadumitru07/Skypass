import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Pagina pe care o cauți nu există.</p>
      <Link to="/" className="btn">
        Înapoi la Dashboard
      </Link>
    </section>
  )
}

export default NotFound
