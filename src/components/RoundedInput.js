import CheckInput from './CheckInput'
import RangeInput from './RangeInput'
import { useProjectsContext } from '@/contexts/projects'

export default function RoundedInput({ modificationsHandler, modificationsList }) {
  const { state } = useProjectsContext()
  const { originalImage, modifications } = state.currentProject
  const { dimensions } = originalImage
  let isRoundedFull = modificationsList.find(modification => modification.name === 'roundCircle')
  if (!isRoundedFull) {
    const newModificationsList = [...modifications].reverse()
    isRoundedFull = newModificationsList.find(modification => modification.name === 'roundCircle')
  }

  return (
    <div className='mt-8'>
      <CheckInput name='Rounded full' modificationName='roundCircle' modificationHandler={modificationsHandler} />
      {!isRoundedFull?.value && (
        <RangeInput title='Border radius' min={0} max={dimensions?.width} modificationName='roundCorners' modificationHandler={modificationsHandler} unit=' px' />
      )}
    </div>

  )
}
