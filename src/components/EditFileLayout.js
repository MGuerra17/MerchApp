import ModificationsPanel from './ModificationsPanel'
import { Tooltip } from 'flowbite-react'
import OpenEyeSvg from '../../public/OpenEyeSvg'
import { useState, useEffect } from 'react'
import CloseEyeSvg from '../../public/CloseEyeSvg'
import { useProjectsContext } from '@/contexts/projects'
import imageModifications from '@/helpers/imageModifications'

export default function EditFileLayout(props) {
  const { state, setCurrentModifiedFile } = useProjectsContext()
  const { originalImage } = state?.currentProject
  const { createImage, getCurrentModifications } = imageModifications
  const [modifiedImage, setModifiedImage] = useState('')
  const [showOriginal, setShowOriginal] = useState(false)

  useEffect(() => {
    const currentModifications = getCurrentModifications(state?.currentProject.modifications)
    const { publicId } = state?.currentProject.originalImage
    const newModifiedFile = createImage(publicId)
    for (const modification of currentModifications) {
      const modificationFunction = imageModifications[modification.name]
      modificationFunction(newModifiedFile, modification.value)
    }
    const newModifiedFileUrl = newModifiedFile?.toURL()
    if (newModifiedFileUrl !== state.currentProject.modifiedImageURL) {
      setCurrentModifiedFile(newModifiedFileUrl)
    }
    setModifiedImage(newModifiedFileUrl)
  }, [state])

  return (
    <div className='w-full h-screen flex relative' {...props}>
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
            ? <img className='w-full object-contain aspect-video' src={originalImage.url} alt={originalImage.url} />
            : <img className='w-full object-contain aspect-video' src={modifiedImage} alt={modifiedImage} />}
        </div>
      </div>
      <ModificationsPanel />
    </div>
  )
}
