export default function EditFileLayout(props) {
  return (
    <div className='w-full h-screen bg-slate-50 flex' {...props}>
      <div className='w-3/4 bg-slate-600'>
        Imagen aqui
      </div>
      <div className='w-1/4 bg-sky-300'>
        Opciones aqui
      </div>
    </div>
  )
}
