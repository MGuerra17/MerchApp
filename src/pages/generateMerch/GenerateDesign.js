import { useState } from 'react'
import { createDesign, uploadDesign } from '@/services/design'
import { useProjectsContext } from '@/contexts/projects'
import RouteValidator from '@/components/RouteValidator'
import Image from 'next/image'
import AiSvg from '../../../public/AiSvg'
import RightArrowSvg from '../../../public/RightArrowSvg'
import { Button, Spinner } from 'flowbite-react'

export default function GenerateDesign() {
  const [projectName, setProjectName] = useState('')
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { createNewProject } = useProjectsContext()

  const handleGenerateImage = async () => {
    setLoading(true)
    const file = await createDesign(prompt)
    setResult(file?.data)
    if (!file?.data) setError('An error occurred while trying to create the image')
    setLoading(false)
  }

  const handleUploadImage = async () => {
    if (!result) return setError('')
    const { public_id, secure_url, width, height } = await uploadDesign(result)
    const newProject = {
      projectName,
      originalImage: {
        publicId: public_id,
        url: secure_url,
        dimensions: {
          width,
          height
        }
      },
      modifiedImageURL: secure_url,
      modifications: []
    }
    createNewProject(newProject)
  }

  return (
    <RouteValidator>
      <div className='flex w-full flex-wrap flex-col md:flex-row md:flex-nowrap'>
        <div className='w-2/5 md:h-screen flex justify-center items-center px-16'>
          <div className='flex flex-col w-full bg-slate-800 rounded-xl px-8 py-10'>
            <div className='flex justify-center items-center'>
              <AiSvg />
            </div>
            <h1 className='text-2xl mt-3 mb-12 text-white text-center font-bold'>Generate design</h1>
            <label htmlFor='projectName' className=' text-md text-white mb-2'>Project name</label>
            <input name='projectName' className='text-white w-full bg-transparent border border-blue-400 rounded-lg mb-3' placeholder='My project name' type='text' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            <div className='bg-slate-600 rounded-lg'>
              <label htmlFor='message' className='block mb-2 text-sm font-medium text-slate-100 pt-1 pl-3'>Prompt</label>
              <textarea id='message' rows='4' className='block resize-none p-2.5 h-56 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Write your thoughts here...' onChange={(e) => setPrompt(e.target.value)} />
            </div>
            <p className=' text-white text-sm mt-2 mb-4'>Would you like to <a className='text-blue-600' href='https://pitch.com/v/DALL-E-prompt-book-v1-tmd33y' target='_blank' rel='noreferrer'>be a master</a> in image generation?</p>
            <p className='text-red-500'>{error}</p>
            <Button className='mt-5' onClick={handleGenerateImage}>
              {loading
                ? (
                  <div>
                    <Spinner
                      className='mr-3'
                      size='sm'
                      light
                    />
                    Loading...
                  </div>)
                : 'Generate'}
            </Button>
          </div>
        </div>
        <div className='w-3/5 md:h-screen flex flex-col items-center justify-center relative border-l border-slate-800'>
          <div className='bg-slate-600 rounded-lg aspect-video w-3/4 max-w-2xl '>
            <p className='block mb-2 text-sm font-medium text-slate-100 pt-1 pl-3'>Generated image</p>
            <div className='relative h-full w-full bg-black rounded-lg'>
              <Image className='rounded-lg object-contain' src={result || '/image-placeholder.jpg'} priority fill sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw' alt={result} />
            </div>
          </div>
          {result && <button className='m-8 absolute bottom-0 right-0 w-16 h-16 dark:text-gray-400 dark:hover:text-blue-700 duration-200 hover:scale-110' onClick={handleUploadImage}><RightArrowSvg /></button>}
        </div>
      </div>
    </RouteValidator>
  )
}
