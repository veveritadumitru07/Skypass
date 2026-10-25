// Adresa serverului json-server (pornit cu "npm run server")
const BASE_URL = 'http://localhost:3001'

// Funcție comună pentru toate cererile către API.
// Transformă răspunsul în JSON și aruncă o eroare clară dacă ceva nu merge.
export async function request(path, options = {}) {
  let response

  try {
    response = await fetch(`${BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    })
  } catch {
    throw new Error('Serverul nu răspunde. Verifică dacă rulează „npm run server”.')
  }

  if (!response.ok) {
    throw new Error(`Eroare ${response.status}: cererea nu a reușit.`)
  }

  return response.json()
}