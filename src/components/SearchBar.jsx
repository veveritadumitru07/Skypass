// Câmpul de căutare. Valoarea este ținută în pagina părinte (componentă controlată).
function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="search"
        placeholder="De unde sau unde zbori? (ex: Roma, Chișinău, FCO)"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar