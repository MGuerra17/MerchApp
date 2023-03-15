import { Accordion, Button, Spinner, Tooltip } from 'flowbite-react'
import RangeInput from './RangeInput'
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
import RightArrowSvg from '../../public/RightArrowSvg'
import { useRouter } from 'next/router'
import { uploadDesign } from '@/services/design'
import { useProjectsContext } from '@/contexts/projects'
import useModifications from '@/hooks/useModifications'

export default function ModificationsPanel() {
  const { state, addModifications, saveProject, undoModification, deleteCurrentProject } = useProjectsContext()
  const { loading, newModifications, setLoading, setNewModifications, modificationsHandler } = useModifications()
  const router = useRouter()
  const pendingChange = newModifications.length > 0

  const handleGenerateMerch = async () => {
    setLoading(true)

    const { projectName, modifiedImageURL } = state?.currentProject
    const response = await uploadDesign(modifiedImageURL)
    const resultUrl = `/collections/${response?.public_id}`

    saveProject({ name: projectName, publicId: response.public_id, date: new Date().toISOString() })
    setLoading(false)
    router.push(resultUrl)
    setTimeout(() => deleteCurrentProject(), 1000)
  }

  const handleApplyChanges = () => {
    addModifications(newModifications)
    setNewModifications([])
  }

  return (
    <div className='w-1/3 mx-auto max-w-lg rounded-md'>
      <div className='pl-5 overflow-y-scroll h-9/10 pb-4'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between py-5'>
            <h2 className=' font-bold text-lg text-white'>Editing Panel</h2>
            <Button outline disabled={!pendingChange} onClick={handleApplyChanges}>
              Apply
            </Button>
          </div>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center justify-between w-20'>
              <Tooltip content='Undo' placement='top'>
                <button className='w-8 text-slate-400' onClick={undoModification}>
                  <UndoSvg />
                </button>
              </Tooltip>
              <Tooltip content='Delete' placement='top'>
                <button className='w-8 text-slate-400' onClick={deleteCurrentProject}>
                  <DeleteSvg />
                </button>
              </Tooltip>
            </div>
            <span className='flex-1 ml-5  mr-2 text-white font-bold text-end'>{state?.currentProject?.projectName}</span>
          </div>
        </div>
        <Accordion alwaysOpen>
          <Accordion.Panel>
            <Accordion.Title className='focus:ring-0'>
              Settings
            </Accordion.Title>
            <Accordion.Content>
              <RangeInput title='Brightness' min={-100} max={100} modificationName='adjustBrightness' modificationHandler={modificationsHandler} icon={<BrightnessSvg />} />
              <RangeInput title='Saturation' min={-100} max={100} modificationName='adjustSaturation' modificationHandler={modificationsHandler} icon={<SaturationSvg />} />
              <RangeInput title='Contrast' min={-100} max={100} modificationName='adjustContrast' modificationHandler={modificationsHandler} icon={<ContrastSvg />} />
              <RangeInput title='Vibrance' min={-100} max={100} modificationName='adjustVibrance' modificationHandler={modificationsHandler} icon={<VibranceSvg />} />
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='focus:ring-0'>
              Background
            </Accordion.Title>
            <Accordion.Content>
              <Tooltip content='Not currently available' placement='top'>
                <CheckInput name='Remove Background' modificationName='removeBg' disabled modificationHandler={modificationsHandler} />
              </Tooltip>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='focus:ring-0'>
              Transformations
            </Accordion.Title>
            <Accordion.Content>
              <TwoFieldsInput name='Resize' firstValueName='width' secondValueName='height' modificationName='resizeImage' modificationHandler={modificationsHandler} />
              <RangeInput title='Rotation' min={0} max={360} modificationName='rotateImage' unit='°' modificationHandler={modificationsHandler} icon={<RotationSvg />} />
              <RoundedInput modificationsHandler={modificationsHandler} modificationsList={newModifications} />
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='focus:ring-0'>
              Shapes
            </Accordion.Title>
            <Accordion.Content>
              <ShapeInput modificationHandler={modificationsHandler} />
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='focus:ring-0'>
              Filters
            </Accordion.Title>
            <Accordion.Content>
              <CheckInput name='Gray scale' modificationName='grayScaleFilter' modificationHandler={modificationsHandler} />
              <CheckInput name='Cartoonify' modificationName='cartoonifyFilter' modificationHandler={modificationsHandler} />
              <RangeInput title='Blur' min={0} max={100} modificationName='blurFilter' modificationHandler={modificationsHandler} icon={<BlurSvg />} />
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='focus:ring-0'>
              Text
            </Accordion.Title>
            <Accordion.Content>
              <FontUploader />
              <TextEditor modificationHandler={modificationsHandler} />
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className='w-full h-1/10 flex items-center justify-center'>
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
        </Button>
      </div>
    </div>
  )
}
