import WithDesign from '@/components/WithDesign'
import { useEffect } from 'react'
import FontUploader from '../components/FontUploader'
import useDesign from '../hooks/useDesign'

function EditDesign() {
  const {
    originalFile,
    modifiedFile,
    modificationsList,
    handleModification,
    applyModifications
  } = useDesign()

  useEffect(() => {
    applyModifications()
  }, [])
  console.log(modificationsList)
  return (
    <div>
      <h1>Edit Design</h1>
      <div className='bg-gray bg-gray-300 flex gap-8'>
        <img className='w-80 h-80 m-8' src={originalFile} alt={originalFile} />
        <img className='w-80 h-80 m-8' src={modifiedFile} alt={modifiedFile} />
      </div>
      <a className='bg-sky-300 p-3 m-8' download='miImagen' href={originalFile}>Descargar</a>
      <button onClick={() => handleModification({ name: 'removeBg', value: 1 })} className='bg-red-300 p-3 m-3'>Quitar fondo</button>
      <button onClick={() => handleModification({ name: 'grayScaleFilter', value: 1 })} className='bg-red-300 p-1 m-1'>Filtro b/n</button>
      <button onClick={() => handleModification({ name: 'blurFilter', value: 80 })} className='bg-red-300 p-1 m-1'>Agregar blur (80)</button>
      <button onClick={() => handleModification({ name: 'blurFilter', value: 20 })} className='bg-red-300 p-1 m-1'>Agregar blur (20)</button>
      <button onClick={() => handleModification({ name: 'addText', value: 1 })} className='bg-red-300 p-1 m-1'>Agregar text</button>
      <button onClick={() => handleModification({ name: 'resize', value: { height: 100, width: 200 } })} className='bg-red-300 p-1 m-1'>Redimensionar</button>
      <button onClick={applyModifications} className='bg-green-300 p-3'>Aplicar</button>
      <FontUploader />
    </div>
  )
}

export default WithDesign(EditDesign)
