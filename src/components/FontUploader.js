import useDesign from '@/hooks/useDesign'
import Dropzone from 'dropzone'
import { useEffect, useState } from 'react'

export default function FontUploader() {
  const [fontName, setFontName] = useState('')
  const [fontType, setFontType] = useState('ttf')
  const [warning, setWarning] = useState('')
  const { saveFont, fonts } = useDesign()

  useEffect(() => {
    const dropzoneForm = new Dropzone('#uploadFont', {
      uploadMultiple: false,
      acceptedFiles: '.otf,.ttf,.fnt',
      maxFiles: 1
    })

    dropzoneForm.on('sending', (file, xhr, formData) => {
      formData.append('fontName', fontName)
      formData.append('fontType', fontType)
    })

    dropzoneForm.on('success', (file, response) => {
      saveFont(response.public_id)
      console.log(response)
    })

    dropzoneForm.on('error', (file, response) => {
      console.log('todo ha ido mal')
      console.log(response)
    })

    dropzoneForm.on('complete', function (file) {
      dropzoneForm.removeFile(file)
      setFontName('')
      setFontType('ttf')
    })

    return () => {
      dropzoneForm.destroy()
    }
  }, [fontName, fontType])

  const handleFontNameChange = (e) => {
    const fontNameValue = e.target.value
    if (fonts.includes(fontNameValue + '.ttf')) {
      setWarning('Esta fuente ya existe')
    } else {
      setWarning('')
    }
    setFontName(fontNameValue)
  }

  return (
    <div>
      <input className='border-2 border-blue-300' type='text' name='fontName' value={fontName} onChange={handleFontNameChange} />
      <select value={fontType} name='fontType' onChange={(e) => setFontType(e.target.value)}>
        <option value='ttf'>ttf</option>
        <option value='otf'>otf</option>
        <option value='fnt'>fnt</option>
      </select>
      {warning && <p className='text-yellow-500'>{warning}</p>}
      <form
        id='uploadFont'
        action='/api/uploadFont'
        method='post'
        className='w-60 h-60 border-dashed border-2 border-gray-400 p-8 flex justify-center items-center cursor-pointer'
      >
        Subir fuente
      </form>
    </div>
  )
}
