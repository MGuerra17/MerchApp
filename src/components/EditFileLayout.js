import useDesign from '@/hooks/useDesign'
import ModificationsPanel from './ModificationsPanel'
import { Button, Tooltip, Spinner } from 'flowbite-react'
import OpenEyeSvg from '../../public/OpenEyeSvg'
import { useState, useEffect } from 'react'
import CloseEyeSvg from '../../public/CloseEyeSvg'
import RightArrowSvg from '../../public/RightArrowSvg'
import { useRouter } from 'next/router'
import { uploadDesign } from '@/services/design'

export default function EditFileLayout(props) {
  const { projectName, originalFile, modifiedFile, saveDesign } = useDesign()
  const [showOriginal, setShowOriginal] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const [imageLoaded, setImageLoaded] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  const MAX_RETRIES = 10
  const RETRY_DELAY = 1000

  useEffect(() => {
    if (!imageLoaded && retryCount < MAX_RETRIES) {
      console.log('ejecutado')
      const timer = setTimeout(() => {
        setRetryCount(retryCount + 1)
      }, RETRY_DELAY)

      return () => clearTimeout(timer)
    }
  }, [imageLoaded, retryCount])

  const handleImageLoaded = () => {
    setImageLoaded(true)
  }

  const handleGenerateMerch = async () => {
    setLoading(true)
    const response = await uploadDesign(modifiedFile)
    console.log(response)
    saveDesign({ name: projectName, publicId: response.public_id })
    setTimeout(() => {
      router.push('/generateMerch/ShowResults')
      setLoading(false)
    }, 800)
  }

  return (
    <div className='w-full h-screen flex' {...props}>
      <div className='w-2/3 flex items-center justify-center image-editor relative flex-col'>
        <div className='rounded-full absolute top-0 z-10 w-52 flex justify-evenly items-center mt-12 pt-2'>
          <Tooltip content='Show original' placement='top'>
            <button className='w-12 p-2 text-white bg-slate-400/70 rounded-full' onMouseDown={() => setShowOriginal(true)} onMouseUp={() => setShowOriginal(false)}>
              {showOriginal ? <CloseEyeSvg /> : <OpenEyeSvg />}
            </button>
          </Tooltip>
        </div>
        <div className='w-4/5 aspect-video max-w-4xl relative'>
          {showOriginal
            ? <img className='w-full object-contain aspect-video' src={originalFile} alt={originalFile} />
            : <img className='w-full object-contain aspect-video' src={modifiedFile} alt={modifiedFile} onLoad={handleImageLoaded} />}
        </div>
      </div>
      <div className='w-1/3 mx-auto max-w-lg rounded-md'>
        <ModificationsPanel />
        <div className='w-full h-1/10 flex items-center justify-center'>
          {projectName
            ? (
              <Button className='py-2' onClick={handleGenerateMerch}>
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
                  : (
                    <div className='w-full flex'>
                      Generate merch
                      <div className='ml-3 w-5 aspect-square'><RightArrowSvg /></div>
                    </div>)}
              </Button>)
            : (
              <Tooltip content='Enter a valid project name' placement='top'>
                <Button disabled className='py-2' onClick={handleGenerateMerch}>
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
                    : (
                      <div className='w-full flex'>
                        Generate merch
                        <div className='ml-3 w-5 aspect-square'><RightArrowSvg /></div>
                      </div>)}
                </Button>
              </Tooltip>)}
        </div>
      </div>
    </div>
  )
}
