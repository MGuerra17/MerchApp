import { useEffect, useState } from 'react'
import { Label, TextInput } from 'flowbite-react'
import { useProjectsContext } from '@/contexts/projects'

export default function TwoFieldsInput({ name, firstValueName, secondValueName, modificationName, modificationHandler }) {
  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const { state } = useProjectsContext()
  const { modifications, originalImage } = state.currentProject
  const { dimensions } = originalImage

  useEffect(() => {
    const newModificationsList = [...modifications]
    newModificationsList.reverse()
    const currentModification = newModificationsList.find(modification => modification.name === modificationName)
    if (currentModification) {
      const { width, height } = currentModification.value
      setFirstValue(width || dimensions?.width || 0)
      setSecondValue(height || dimensions?.height || 0)
    } else {
      setFirstValue(dimensions?.width || 0)
      setSecondValue(dimensions?.height || 0)
    }
  }, [])

  const handleValueChange = ({ name, value }) => {
    if (name === firstValueName) {
      setFirstValue(value)
      modificationHandler({ name: modificationName, value: { [firstValueName]: value, [secondValueName]: secondValue } })
    }
    if (name === secondValueName) {
      setSecondValue(value)
      modificationHandler({ name: modificationName, value: { [firstValueName]: firstValue, [secondValueName]: value } })
    }
  }

  return (
    <div className='relative mx-3 flex flex-col'>
      <Label
        className='mb-5'
        htmlFor='small'
        value={name}
      />
      <div className='flex justify-center'>

        <div className='flex mb-4'>
          <div className='mb-2 block'>
            <Label
              htmlFor='small'
              value={firstValueName.charAt(0).toUpperCase() + firstValueName.slice(1)}
            />
          </div>
          <TextInput
            className='w-14 mx-5'
            id='small'
            type='text'
            sizing='sm'
            value={firstValue || ''}
            onChange={(e) => handleValueChange({ name: firstValueName, value: e.target.value })}
          />
        </div>
        <div className='flex'>
          <div className='mb-2 block'>
            <Label
              htmlFor='small'
              value={secondValueName.charAt(0).toUpperCase() + secondValueName.slice(1)}
            />
          </div>
          <TextInput
            className='w-14 mx-5'
            id='small'
            type='text'
            sizing='sm'
            value={secondValue || ''}
            onChange={(e) => handleValueChange({ name: secondValueName, value: e.target.value })}
          />
        </div>
      </div>
    </div>
  )
}
