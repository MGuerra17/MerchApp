import { ToggleSwitch } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useProjectsContext } from '@/contexts/projects'

export default function CheckInput({ name, modificationName, modificationHandler, disabled }) {
  const [isChecked, setIsChecked] = useState(false)
  const { state } = useProjectsContext()
  const { modifications } = state.currentProject

  useEffect(() => {
    const newModificationsList = [...modifications]
    newModificationsList.reverse()
    const currentModification = newModificationsList.find(modification => modification.name === modificationName)
    if (currentModification?.value) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [state])

  const handleChange = () => {
    setIsChecked(!isChecked)
    modificationHandler({ name: modificationName, value: !isChecked })
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
