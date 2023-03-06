import useDesign from '@/hooks/useDesign'
import { useEffect } from 'react'
import CheckInput from './CheckInput'
import RangeInput from './RangeInput'

export default function RoundedInput() {
  const { originalDimensions, modificationsList } = useDesign()
  useEffect(() => {
  }, [modificationsList])
  return (
    <div className='mt-8'>
      <CheckInput name='Rounded full' modificationName='roundCircle' />
      {!modificationsList?.roundCircle && (
        <RangeInput title='Border radius' min={0} max={originalDimensions?.width} modificationName='roundCorners' unit=' px' />
      )}
    </div>

  )
}
