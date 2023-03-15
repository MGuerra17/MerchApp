import { useProjectsContext } from '@/contexts/projects'
import { Label, RangeSlider } from 'flowbite-react'
import { useEffect, useState } from 'react'

export default function RangeInput({ min, max, title, modificationName, modificationHandler, icon, unit, ...props }) {
  const { state } = useProjectsContext()
  const { modifications } = state.currentProject
  const [value, setValue] = useState(0)

  useEffect(() => {
    const newModificationsList = [...modifications]
    newModificationsList.reverse()
    const currentModification = newModificationsList.find(modification => modification.name === modificationName)
    if (currentModification) {
      setValue(currentModification.value)
    } else {
      setValue(0)
    }
  }, [state])

  const handleChange = (e) => {
    setValue(e.target.value)
    modificationHandler({ name: modificationName, value: e.target.value })
  }
  return (
    <div className='flex mb-3'>
      <div className='w-4 pt-7 mx-3 text-white'>
        {icon}
      </div>
      <div className='flex-1'>
        <div>
          <Label
            className=''
            htmlFor='sm-range'
            value={title}
          />
        </div>
        <RangeSlider
          id='sm-range'
          sizing='sm'
          min={min}
          max={max}
          value={value || 0}
          onChange={handleChange}
          {...props}
        />
      </div>
      <p className='text-white self-end px-3 w-14 whitespace-nowrap text-center'>{value}{unit}</p>
    </div>
  )
}
