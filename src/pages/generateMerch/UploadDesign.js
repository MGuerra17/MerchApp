import FileUploader from '@/components/FileUploader'
import RouteValidator from '@/components/RouteValidator'

export default function UploadDesign() {
  return (
    <RouteValidator>
      <div className='w-full h-screen p-20 flex justify-center items-center flex-col'>
        <h1 className=' text-4xl text-slate-400 mb-4'>Upload your design</h1>
        <FileUploader />
      </div>
    </RouteValidator>
  )
}
