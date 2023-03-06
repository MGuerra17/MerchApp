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
  const { originalDimensions, handleModification, setNewModification, modificationsList } = useDesign()
  const [fullSize, setFullSize] = useState(true)
  const [shapeWidth, setShapeWidth] = useState('')
  const [shapeHeight, setShapeHeight] = useState('')
  const [activeShape, setActiveShape] = useState('')
  const [someChange, setSomeChange] = useState(false)

  useEffect(() => {
    setShapeWidth(originalDimensions?.width)
    setShapeHeight(originalDimensions?.height)
  }, [originalDimensions])

  useEffect(() => {
    if (modificationsList.addShape) {
      const shapeConfig = modificationsList.addShape
      console.log(shapeConfig.shapeName)
      setActiveShape({ name: shapeConfig.shapeName, publicId: shapeConfig.publicId })
      setShapeWidth(shapeConfig.shapeDimensions.width)
      setShapeHeight(shapeConfig.shapeDimensions.height)
    }
  }, [modificationsList])

  const handleSaveConfig = () => {
    handleModification({
      name: 'addShape',
      value: {
        shapeName: activeShape.publicId,
        shapeDimensions: { width: shapeWidth, height: shapeHeight }
      }
    })
    setNewModification(true)
    setSomeChange(false)
  }

  const handleShapeChange = ({ name, publicId }) => {
    if (activeShape.name === name || activeShape.name === publicId) {
      setActiveShape({})
    } else {
      setActiveShape({ name, publicId })
    }
    setSomeChange(true)
  }

  const handleFullSize = (e) => {
    setFullSize(!fullSize)
    setShapeWidth(originalDimensions.width)
    setShapeHeight(originalDimensions.height)
    setSomeChange(true)
  }

  const handleWidthChange = (e) => {
    setShapeWidth(e.target.value)
    setSomeChange(true)
  }
  const handleHeightChange = (e) => {
    setShapeHeight(e.target.value)
    setSomeChange(true)
  }

  return (
    <div className='mx-3'>
      <Label
        htmlFor='shapeName'
        value='Shape'
      />
      <div className='flex w-72 mx-auto justify-between mt-4'>
        {SHAPES.map(({ name, publicId }) => {
          const isActive = (name === activeShape.name) || (publicId === activeShape.name)
          return <ShapeOption key={name} name={name} image={name} active={isActive} selectHandler={() => handleShapeChange({ name, publicId })} />
        })}
      </div>
      {activeShape.name && (
        <ToggleSwitch
          className='my-8'
          checked={fullSize}
          label='Fit to image'
          onChange={handleFullSize}
        />
      )}

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
          onChange={handleWidthChange}
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
          onChange={handleHeightChange}
        />
      </div>
      {someChange && <Button className='mx-auto mt-5' onClick={handleSaveConfig}>Save configuration</Button>}

    </div>
  )
}
