import { useEffect } from 'react'
import useDesign from '@/hooks/useDesign'
import RouteValidator from '@/components/RouteValidator'
import OneFieldInput from '@/components/OneFieldInput'
import TwoFieldsInput from '@/components/TwoFieldsInput'
import CheckInput from '@/components/CheckInput'
import FontUploader from '@/components/FontUploader'
import TextEditor from '@/components/TextEditor'

export default function EditDesign() {
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
    <RouteValidator>
      <div>
        <h1>Edit Design</h1>
        <div className='bg-gray bg-gray-300 flex gap-8'>
          <img className='w-80 h-80 m-8' src={originalFile} alt={originalFile} />
          <img className='w-80 h-80 m-8' src={modifiedFile} alt={modifiedFile} />
        </div>
        <div className='flex'>
          <div>
            <OneFieldInput name='Blur' valueName='%' modificationName='blurFilter' />
            <OneFieldInput name='Redondear bordes' valueName='%' modificationName='roundCorners' />
            <OneFieldInput name='Girar' valueName='%' modificationName='rotateImage' />
            <TwoFieldsInput name='Redimensionar' firstValueName='width' secondValueName='height' modificationName='resize' />
            <CheckInput name='Filtro B/N' modificationName='grayScaleFilter' />
            <CheckInput name='Cartoonizar' modificationName='cartoonifyFilter' />
            <CheckInput name='Quitar fondo' modificationName='removeBg' />
            <CheckInput name='Recortar circulo' modificationName='roundCircle' />
            <button onClick={() => handleModification({ name: 'addText', value: 1 })} className='bg-red-300 p-1 m-1'>Agregar text</button>
            <button onClick={applyModifications} className='bg-green-300 p-3'>Aplicar</button>
          </div>
          <div>
            <FontUploader />
            <TextEditor />
          </div>
        </div>
      </div>
    </RouteValidator>
  )
}
