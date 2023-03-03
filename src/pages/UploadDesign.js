import FontUploader from '@/components/FontUploader'
import FileUploader from '@/components/FileUploader'

export default function UploadDesign() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col'>
      <h1>Subir imagen</h1>
      <FileUploader />
      <h1>Subir fuente</h1>
      <FontUploader />
    </div>
  )
}
