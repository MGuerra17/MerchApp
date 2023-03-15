import { useState, useEffect } from 'react'
import ShapeOption from './ShapeOption'
import { Label } from 'flowbite-react'
import { useProjectsContext } from '@/contexts/projects'

const SHAPES = [
  { name: 'Triangle', publicId: 'v3q1oppjoh3m7weq1icx' },
  { name: 'InvertedT', publicId: 'btrepcnvt0izvdjmceie' },
  { name: 'Pentagon', publicId: 'bcpezceepuik75fnurnl' },
  { name: 'Hexagon', publicId: 'i64v41879slh0i3tk8qr' }]

export default function ShapeInput({ modificationHandler }) {
  const { state } = useProjectsContext()
  const { originalImage, modifications } = state.currentProject
  const { dimensions } = originalImage
  const [activeShape, setActiveShape] = useState({})

  useEffect(() => {
    const newModificationsList = [...modifications]
    newModificationsList.reverse()
    const currentModification = newModificationsList.find(modification => modification.name === 'addShape')
    if (currentModification) {
      const { shapeName, shapePublicId } = currentModification.value
      setActiveShape({ name: shapeName, publicId: shapePublicId })
    } else {
      setActiveShape({})
    }
  }, [state])

  const handleShapeChange = ({ name, publicId }) => {
    if (activeShape.name === name) {
      modificationHandler({ name: 'addShape', value: {} })
      setActiveShape({})
      return
    }

    const { modifications } = state.currentProject
    const resizeModification = modifications.find(modification => modification.name === 'resizeImage')
    const width = resizeModification?.value?.width || dimensions?.width
    const height = resizeModification?.value?.height || dimensions?.height

    modificationHandler({
      name: 'addShape',
      value: {
        shapeName: name,
        shapePublicId: publicId,
        shapeDimensions: { width, height }
      }
    })
    setActiveShape({ name, publicId })
  }

  return (
    <div className='mx-3'>
      <Label
        htmlFor='shapeName'
        value='Shape'
      />
      <div className='flex w-72 mx-auto justify-between my-4'>
        {SHAPES.map(({ name, publicId }) => {
          const isActive = name === activeShape.name
          return <ShapeOption key={name} name={name} image={name} active={isActive} selectHandler={() => handleShapeChange({ name, publicId })} />
        })}
      </div>
    </div>
  )
}
