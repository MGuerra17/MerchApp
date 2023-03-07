import { Accordion, Button, Spinner, Tooltip } from 'flowbite-react'
import RangeInput from './RangeInput'
import useDesign from '@/hooks/useDesign'
import { useState } from 'react'
import BrightnessSvg from '../../public/BrightnessSvg'
import VibranceSvg from '../../public/VibranceSvg'
import SaturationSvg from '../../public/SaturationSvg'
import ContrastSvg from '../../public/ContrastSvg'
import CheckInput from './CheckInput'
import BlurSvg from '../../public/BlurSvg'
import ShapeInput from './ShapeInput'
import TwoFieldsInput from './TwoFieldsInput'
import RoundedInput from './RoundedInput'
import FontUploader from './FontUploader'
import TextEditor from './TextEditor'
import RotationSvg from '../../public/RotationSvg'
import UndoSvg from '../../public/UndoSvg'
import DeleteSvg from '../../public/DeleteSvg'

export default function ModificationsPanel() {
  const {
    modificationsList,
    applyModifications,
    newModification,
    setNewModification,
    projectName,
    saveProjectName,
    cleanContext,
    handleUndo
  } = useDesign()
  const [loading, setLoading] = useState(false)
  const handleApplyChanges = async () => {
    setLoading(true)
    setNewModification(false)
    await applyModifications(modificationsList)
    setLoading(false)
  }

  return (
    <div className='pl-5 overflow-y-scroll h-9/10 pb-4'>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between py-5'>
          <h2 className=' font-bold text-lg text-white'>Editing Panel</h2>
          <Button outline disabled={!newModification} onClick={handleApplyChanges}>
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
              : 'Apply'}
          </Button>
        </div>
        <div className='flex items-center justify-between mb-2'>
          <div className='flex items-center justify-between w-20'>
            <Tooltip content='Undo' placement='top'>
              <button className='w-8 text-slate-400' onClick={handleUndo}>
                <UndoSvg />
              </button>
            </Tooltip>
            <Tooltip content='Delete' placement='top'>
              <button className='w-8 text-slate-400' onClick={cleanContext}>
                <DeleteSvg />
              </button>
            </Tooltip>
          </div>
          <input type='text' className='rounded-lg flex-1 ml-5  mr-2 text-white font-bold bg-transparent border-blue-700 active:border-none active:outline-none' placeholder='Your project name...' value={projectName || ''} onChange={(e) => saveProjectName(e.target.value)} />
        </div>
      </div>
      <Accordion alwaysOpen>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Settings
          </Accordion.Title>
          <Accordion.Content>
            <RangeInput title='Brightness' min={-100} max={100} modificationName='adjustBrightness' icon={<BrightnessSvg />} />
            <RangeInput title='Saturation' min={-100} max={100} modificationName='adjustSaturation' icon={<SaturationSvg />} />
            <RangeInput title='Contrast' min={-100} max={100} modificationName='adjustContrast' icon={<ContrastSvg />} />
            <RangeInput title='Vibrance' min={-100} max={100} modificationName='adjustVibrance' icon={<VibranceSvg />} />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Background
          </Accordion.Title>
          <Accordion.Content>
            <Tooltip content='Not currently available' placement='top'>
              <CheckInput name='Remove Background' modificationName='removeBg' disabled />
            </Tooltip>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Transformations
          </Accordion.Title>
          <Accordion.Content>
            <TwoFieldsInput name='Resize' firstValueName='width' secondValueName='height' modificationName='resizeImage' />
            <RangeInput title='Rotation' min={0} max={360} modificationName='rotateImage' unit='°' icon={<RotationSvg />} />
            <RoundedInput />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Shapes
          </Accordion.Title>
          <Accordion.Content>
            <ShapeInput />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Filters
          </Accordion.Title>
          <Accordion.Content>
            <CheckInput name='Gray scale' modificationName='grayScaleFilter' />
            <CheckInput name='Cartoonify' modificationName='cartoonifyFilter' />
            <RangeInput title='Blur' min={0} max={100} modificationName='blurFilter' icon={<BlurSvg />} />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Text
          </Accordion.Title>
          <Accordion.Content>
            <FontUploader />
            <TextEditor />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}
