import { useParams } from 'react-router-dom'

function BookingFormPage() {
  const { flightId, id } = useParams()
  const isEdit = Boolean(id)

  return (
    <section>
      <h1>{isEdit ? 'Editează rezervarea' : 'Rezervare nouă'}</h1>
      <p>{isEdit ? `Rezervarea #${id}` : `Zborul #${flightId}`}</p>
    </section>
  )
}

export default BookingFormPage
