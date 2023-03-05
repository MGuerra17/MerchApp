import useDesign from '@/hooks/useDesign'
import ModificationsPanel from './ModificationsPanel'
import { Tooltip } from 'flowbite-react'
import OpenEyeSvg from '../../public/OpenEyeSvg'
import { useState } from 'react'
import CloseEyeSvg from '../../public/CloseEyeSvg'
import UndoSvg from '../../public/UndoSvg'

export default function EditFileLayout(props) {
  const { originalFile, modifiedFile, handleUndo } = useDesign()
  const [showOriginal, setShowOriginal] = useState(false)
  return (
    <div className='w-full h-screen flex' {...props}>
      <div className='w-4/6 flex items-center justify-center image-editor relative flex-col'>
        <div className='bg-slate-400/70 rounded-full absolute top-0 z-10 w-32 flex justify-evenly items-center mt-16 pt-2'>
          <Tooltip content='Undo' placement='left'>
            <button className='w-12 text-white' onClick={handleUndo}>
              <UndoSvg />
            </button>
          </Tooltip>
          <Tooltip content='Show original' placement='right'>
            <button className='w-8 text-white' onMouseDown={() => setShowOriginal(true)} onMouseUp={() => setShowOriginal(false)}>
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
      <div className='w-2/6 overflow-y-scroll rounded-md pb-8'>
        <ModificationsPanel />
      </div>
    </div>
  )
}
