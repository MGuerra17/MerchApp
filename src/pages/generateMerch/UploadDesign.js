import FileUploader from '@/components/FileUploader'
import RouteValidator from '@/components/RouteValidator'

export default function UploadDesign() {
  return (
    <RouteValidator>
      <div className='w-full min-h-screen flex justify-center items-center flex-col'>
        <h1>Subir imagen</h1>
        <FileUploader />
      </div>
    </RouteValidator>
  )
}
