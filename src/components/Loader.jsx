import '../styles/common.css'

function Loader({ text = 'Se încarcă…' }) {
  return (
    <div className="loader" role="status">
      <span className="loader-spinner" />
      <span>{text}</span>
    </div>
  )
}

export default Loader