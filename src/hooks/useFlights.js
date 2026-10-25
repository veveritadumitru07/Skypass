import { useEffect, useState } from 'react'
import { getFlights } from '../api/flightsApi.js'

// Hook care încarcă zborurile din API și ține starea lor:
// lista, dacă se încarcă și eventuala eroare.
export function useFlights() {
  const [flights, setFlights] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    // "ignore" evită actualizarea stării dacă pagina a fost părăsită între timp
    let ignore = false

    getFlights()
      .then((data) => {
        if (!ignore) setFlights(data)
      })
      .catch((err) => {
        if (!ignore) setError(err.message)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [reloadKey])

  // Reîncarcă lista (butonul „Încearcă din nou”)
  function reload() {
    setLoading(true)
    setError(null)
    setReloadKey((key) => key + 1)
  }

  return { flights, loading, error, reload }
}