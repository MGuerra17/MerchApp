import useDesign from '@/hooks/useDesign'
import { ToggleSwitch } from 'flowbite-react'
import { useState } from 'react'
export default function CheckInput({ name, modificationName }) {
  const [isChecked, setIsChecked] = useState(false)
  const { handleModification, setNewModification } = useDesign()

  const handleChange = () => {
    handleModification({ name: modificationName, value: !isChecked })
    setNewModification(true)
    setIsChecked(!isChecked)
  }

  return (
    <ToggleSwitch
      className='mb-5'
      checked={isChecked}
      label={name}
      onChange={handleChange}
    />
  )
}
