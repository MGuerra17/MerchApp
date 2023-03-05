import useDesign from '@/hooks/useDesign'
import { useEffect, useState } from 'react'
import ShapeOption from './ShapeOption'
import { Label, ToggleSwitch, TextInput, Button } from 'flowbite-react'

const SHAPES = [
  { name: 'Triangle', publicId: 'v3q1oppjoh3m7weq1icx' },
  { name: 'InvertedT', publicId: 'btrepcnvt0izvdjmceie' },
  { name: 'Pentagon', publicId: 'bcpezceepuik75fnurnl' },
  { name: 'Hexagon', publicId: 'i64v41879slh0i3tk8qr' }]

export default function ShapeInput() {
  const { originalDimensions, handleModification, setNewModification } = useDesign()
  const [fullSize, setFullSize] = useState(true)
  const [shapeWidth, setShapeWidth] = useState('')
  const [shapeHeight, setShapeHeight] = useState('')
  const [activeShape, setActiveShape] = useState('')

  useEffect(() => {
    setShapeWidth(originalDimensions?.width)
    setShapeHeight(originalDimensions?.height)
  }, [originalDimensions])

  const handleSaveConfig = () => {
    handleModification({
      name: 'addShape',
      value: {
        shapeName: activeShape.publicId,
        shapeDimensions: { width: shapeWidth, height: shapeHeight }
      }
    })
    setNewModification(true)
  }

  const handleFullSize = (e) => {
    setFullSize(!fullSize)
    setShapeWidth(originalDimensions.width)
    setShapeHeight(originalDimensions.height)
  }

  return (
    <div className='mx-3'>
      <Label
        htmlFor='shapeName'
        value='Shape'
      />
      <div className='flex w-72 mx-auto justify-between mt-4'>
        {SHAPES.map(({ name, publicId }) => {
          const isActive = name === activeShape.name
          return <ShapeOption key={name} name={name} image={name} active={isActive} selectHandler={() => setActiveShape({ name, publicId })} />
        })}
      </div>
      <ToggleSwitch
        className='my-8'
        checked={fullSize}
        label='Fit to image'
        onChange={handleFullSize}
      />

      <div className={`flex justify-center ${fullSize && 'hidden'}`}>
        <div className='mb-2 block'>
          <Label
            className='mr-3'
            htmlFor='width'
            value='Width'
          />
        </div>
        <TextInput
          id='width'
          type='text'
          sizing='sm'
          value={shapeWidth || ''}
          disabled={fullSize}
          className='w-14'
          onChange={(e) => setShapeWidth(e.target.value)}
        />
        <div className='mb-2 block'>
          <Label
            className='ml-5 mr-3'
            htmlFor='height'
            value='Height'
          />
        </div>
        <TextInput
          id='Height'
          type='text'
          sizing='sm'
          value={shapeHeight || ''}
          disabled={fullSize}
          className='w-14'
          onChange={(e) => setShapeHeight(e.target.value)}
        />
      </div>
      <Button className='mx-auto mt-5' onClick={handleSaveConfig}>Save configuration</Button>
    </div>
  )
}
