// Transformă textul în litere mici și elimină diacriticele,
// astfel încât „chisinau” să găsească și „Chișinău”.
export function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

// Păstrează doar zborurile al căror oraș de plecare sau destinație
// (sau codul aeroportului) conține textul căutat.
export function filterFlights(flights, query) {
  const search = normalize(query)

  if (search === '') {
    return flights
  }

  return flights.filter((flight) =>
    [flight.from, flight.to, flight.fromCode, flight.toCode].some((value) =>
      normalize(value).includes(search),
    ),
  )
}