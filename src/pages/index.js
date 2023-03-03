export default function Home() {
  return (
    <>
      <form action='/api/uploadFont' method='POST'>
        <input type='text' name='name' placeholder='inserte Nombre' />
        <input type='text' name='url' placeholder='inserte url' />
        <button>Enviar</button>
      </form>

    </>
  )
}
