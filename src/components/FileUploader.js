import Dropzone from 'dropzone'
import { useEffect } from 'react'
import useDesign from '../hooks/useDesign'

export default function FileUploader() {
  const { saveOriginalFile, savePublicId } = useDesign()
  useEffect(() => {
    const dropzoneForm = new Dropzone('#uploadDesign', {
      uploadMultiple: false,
      acceptedFiles: '.jpg,.png,.webp',
      maxFiles: 1
    })

    dropzoneForm.on('sending', (file, xhr, formData) => {
      formData.append('upload_preset', 'ml_default')
      formData.append('timestamp', (Date.now() / 1000))
      formData.append('api_key', 756857925269576)
    })

    dropzoneForm.on('success', (file, response) => {
      savePublicId(response.public_id)
      saveOriginalFile(response.secure_url)
    })

    dropzoneForm.on('error', (file, response) => {
      console.log('todo ha ido mal')
      console.log(response)
    })
  }, [])

  return (
    <form
      id='uploadDesign'
      action='https://api.cloudinary.com/v1_1/dtp9alejv/upload'
      className='w-60 h-60 border-dashed border-2 border-gray-400 p-8 flex justify-center items-center cursor-pointer'
    >
      Subir archivo
    </form>
  )
}
