import useDesign from '@/hooks/useDesign'
import ModificationsPanel from './ModificationsPanel'
import { Button, Tooltip, Spinner, Toast } from 'flowbite-react'
import OpenEyeSvg from '../../public/OpenEyeSvg'
import { useState, useEffect } from 'react'
import CloseEyeSvg from '../../public/CloseEyeSvg'
import RightArrowSvg from '../../public/RightArrowSvg'
import { useRouter } from 'next/router'
import { uploadDesign } from '@/services/design'

export default function EditFileLayout(props) {
  const { projectName, originalFile, modifiedFile, saveDesign, applyModifications, modificationsList } = useDesign()
  const [showOriginal, setShowOriginal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [warning, setWarning] = useState('')
  const router = useRouter()

  // const [imageLoaded, setImageLoaded] = useState(false)
  // const [retryCount, setRetryCount] = useState(0)

  // const MAX_RETRIES = 10
  // const RETRY_DELAY = 1000

  // useEffect(() => {
  //   if (!imageLoaded && retryCount < MAX_RETRIES) {
  //     console.log('ejecutado')
  //     const timer = setTimeout(() => {
  //       setRetryCount(retryCount + 1)
  //     }, RETRY_DELAY)

  //     return () => clearTimeout(timer)
  //   }
  // }, [imageLoaded, retryCount])

  // const handleImageLoaded = () => {
  //   setImageLoaded(true)
  // }
  console.log({ modifiedFile })
  useEffect(() => {
    if (modificationsList) {
      const existList = Object.keys(modificationsList).length > 0
      if (existList) {
        applyModifications(modificationsList)
      }
    } else {
      applyModifications(JSON.parse(window.localStorage.getItem('modificationsList')))
    }
  }, [])

  const handleGenerateMerch = async () => {
    setLoading(true)
    if (window.localStorage.getItem('designList')) {
      const designList = JSON.parse(window.localStorage.getItem('designList'))
      const design = designList.find(design => design.name === projectName)
      if (design) {
        setWarning('Project already exists. Try another name.')
        setLoading(false)
        return
      }
    }
    const response = await uploadDesign(modifiedFile)
    console.log(response)
    saveDesign({ name: projectName, publicId: response.public_id })
    const url = `/ShowResults/${response.public_id}`
    setTimeout(() => {
      router.push(url)
      setLoading(false)
    }, 800)
  }

  return (
    <div className='w-full h-screen flex relative' {...props}>
      <div className='w-full absolute z-20 top-0'>
        {warning && (
          <Toast className='h-20 mx-auto mt-6' onClick={() => setWarning(false)}>
            <div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-orange-500 bg-orange-500 dark:text-orange-200'>
              <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 20 20' className='h-5 w-5' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clipRule='evenodd' />
              </svg>
            </div>
            <div className='ml-3 text-sm font-normal'>
              Project name already exists
            </div>
            <Toast.Toggle />
          </Toast>
        )}
      </div>
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
            : <img className='w-full object-contain aspect-video' src={modifiedFile} alt={modifiedFile} />}
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
