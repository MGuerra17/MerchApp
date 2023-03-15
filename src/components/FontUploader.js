import Dropzone from 'dropzone'
import { useEffect, useState } from 'react'
import { Label, TextInput, Select } from 'flowbite-react'
import { useProjectsContext } from '@/contexts/projects'

export default function FontUploader() {
  const [fontName, setFontName] = useState('')
  const [fontType, setFontType] = useState('ttf')
  const [warning, setWarning] = useState('')
  const [uploaded, setUploaded] = useState(false)
  const [success, setSuccess] = useState(false)
  const { state, addFont } = useProjectsContext()

  useEffect(() => {
    const dropzoneForm = new Dropzone('#uploadFont', {
      uploadMultiple: false,
      acceptedFiles: '.otf,.ttf',
      maxFiles: 1
    })

    dropzoneForm.on('sending', (file, xhr, formData) => {
      formData.append('fontName', fontName)
      formData.append('fontType', fontType)
    })

    dropzoneForm.on('success', (file, response) => {
      setUploaded(true)
      setSuccess(true)
      addFont({ name: fontName, publicId: response.public_id })
    })

    dropzoneForm.on('error', (file, response) => {
      setWarning('An error has occurred')
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
    setSuccess(false)
    if (state.fonts.includes(fontNameValue + '.' + fontType)) {
      setWarning('Esta fuente ya existe')
    } else if (fontNameValue === '') {
      setWarning('Debe ingresar un nombre valido')
    } else {
      setWarning('')
    }
    setFontName(fontNameValue)
  }

  const handleFontTypeChange = (e) => {
    const fontTypeValue = e.target.value
    if (state.fonts.includes(fontName + '.' + fontTypeValue)) {
      setWarning('Esta fuente ya existe')
    } else if (fontType === '') {
      setWarning('Debe ingresar un nombre valido')
    } else {
      setWarning('')
    }
    setFontType(fontTypeValue)
  }

  return (
    <div className='flex flex-col'>
      <h3 className='text-slate-200 text-sm font-bold mb-4'>Add font</h3>
      <div className='flex'>
        <div className='flex mb-4 w-full'>
          <div className='mb-2 flex items-center'>
            <Label
              htmlFor='small'
              value='Font name'
            />
          </div>
          <TextInput
            className='flex-1 mx-5'
            id='small'
            type='text'
            sizing='md'
            value={fontName}
            onChange={handleFontNameChange}
          />
          <Select
            value={fontType} name='fontExtension' onChange={handleFontTypeChange}
          >
            <option value='ttf'>ttf</option>
            <option value='otf'>otf</option>
          </Select>
        </div>
      </div>
      {warning && <p className='text-red-500 text-xs mb-3'>{warning}</p>}
      {success && <p className='text-green-500 text-xs mb-3'>Font uploaded successfully. Find it in the fonts list</p>}
      <form
        id='uploadFont'
        action='/api/uploadFont'
        method='post'
        className={`w-full mt-4 mb-8 h-28 border-dashed text-white border-2 rounded-2xl border-gray-400 p-8 flex justify-center items-center cursor-pointer ${!fontName && 'hidden'}`}
      >
        {!uploaded && 'Upload font'}
      </form>
    </div>
  )
}
