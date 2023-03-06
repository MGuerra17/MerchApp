import useDesign from '@/hooks/useDesign'
import { ToggleSwitch } from 'flowbite-react'
import { useEffect, useState } from 'react'
export default function CheckInput({ name, modificationName, disabled }) {
  const [isChecked, setIsChecked] = useState(false)
  const { handleModification, setNewModification, modificationsList } = useDesign()

  useEffect(() => {
    if (modificationsList[modificationName]) {
      setIsChecked(modificationsList[modificationName])
    } else {
      setIsChecked(false)
    }
  }, [modificationsList])

  const handleChange = () => {
    handleModification({ name: modificationName, value: !isChecked })
    setNewModification(true)
    setIsChecked(!isChecked)
  }

  return (
    <ToggleSwitch
      className='mb-5'
      checked={isChecked}
      disabled={disabled}
      label={name}
      onChange={handleChange}
    />
  )
}
