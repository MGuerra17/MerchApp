import Dropzone from 'dropzone'
import { useEffect, useState } from 'react'
import useDesign from '../hooks/useDesign'
import FullPageLoading from './FullPageLoading'

export default function FileUploader() {
  const { saveOriginalFile, savePublicId, saveDimensions, setModifiedFile } = useDesign()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    const dropzoneForm = new Dropzone('#uploadDesign', {
      uploadMultiple: false,
      acceptedFiles: '.jpg,.png,.webp',
      maxFiles: 1
    })

    dropzoneForm.on('sending', (file, xhr, formData) => {
      setLoading(true)
      formData.append('upload_preset', 'ml_default')
      formData.append('timestamp', (Date.now() / 1000))
      formData.append('api_key', 756857925269576)
    })

    dropzoneForm.on('success', (file, response) => {
      const { public_id, secure_url, width, height } = response
      saveDimensions({ width, height })
      savePublicId(public_id)
      saveOriginalFile(secure_url)
      setModifiedFile(secure_url)
      setLoading(false)
    })

    dropzoneForm.on('error', (file, response) => {
      console.log(response)
      setError('An error occurred while trying to upload the file')
      setLoading(false)
    })

    dropzoneForm.on('complete', function (file) {
      dropzoneForm.removeFile(file)
    })
  }, [])

  return (
    <div className='w-full h-full'>
      <p className='text-xs text-red-500'>{error}</p>
      <form
        id='uploadDesign'
        action='https://api.cloudinary.com/v1_1/dtp9alejv/upload'
        className='w-full h-full border-dashed border-4 border-slate-800 flex justify-center items-center cursor-pointer text-slate-300 text-xl'
      >
        {loading ? <FullPageLoading /> : 'Drag your file or click here to explore'}
      </form>
    </div>
  )
}
