import useDesign from '@/hooks/useDesign'
import { useEffect, useState } from 'react'
import { Label, TextInput } from 'flowbite-react'

export default function TwoFieldsInput({ name, firstValueName, secondValueName, modificationName }) {
  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const { handleModification, setNewModification, originalDimensions } = useDesign()

  useEffect(() => {
    if (originalDimensions && Object.keys(originalDimensions)?.length > 0) {
      setFirstValue(originalDimensions?.width)
      setSecondValue(originalDimensions?.height)
    }
  }, [originalDimensions])

  const handleValueChange = ({ name, value }) => {
    setNewModification(true)
    if (name === firstValueName) {
      handleModification({ name: modificationName, value: { [firstValueName]: value, [secondValueName]: secondValue } })
      setFirstValue(value)
    }
    if (name === secondValueName) {
      handleModification({ name: modificationName, value: { [firstValueName]: firstValue, [secondValueName]: value } })
      setSecondValue(value)
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
      {/* <label htmlFor='name'>{name}</label>
      <input
        type='text'
        name={name}
        className='bg-gray-100 rounded-md p-2 w-20 mx-1'
        value={firstValue}
        onChange={(e) => handleValueChange({ name: firstValueName, value: e.target.value })}
        required
      />
      <span>{firstValueName}</span> */}
      {/* <input
        type='text'
        name={name}
        className='bg-gray-100 rounded-md p-2 w-20 mx-1'
        value={secondValue}
        onChange={(e) => handleValueChange({ name: secondValueName, value: e.target.value })}
        required
      /> */}
      {/* <span>{secondValueName}</span> */}
    </div>
  )
}
