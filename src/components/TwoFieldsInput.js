import useDesign from '@/hooks/useDesign'
import { useState } from 'react'

export default function TwoFieldsInput({ name, firstValueName, secondValueName, modificationName }) {
  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const { handleModification } = useDesign()

  const handleValueChange = ({ name, value }) => {
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
    <div className='relative mx-3'>
      <label htmlFor='name'>{name}</label>
      <input
        type='text'
        name={name}
        className='bg-gray-100 rounded-md p-2 w-20 mx-1'
        value={firstValue}
        onChange={(e) => handleValueChange({ name: firstValueName, value: e.target.value })}
        required
      />
      <span>{firstValueName}</span>
      <input
        type='text'
        name={name}
        className='bg-gray-100 rounded-md p-2 w-20 mx-1'
        value={secondValue}
        onChange={(e) => handleValueChange({ name: secondValueName, value: e.target.value })}
        required
      />
      <span>{secondValueName}</span>
    </div>
  )
}
