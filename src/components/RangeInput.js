import { Label, RangeSlider } from 'flowbite-react'
import { useState } from 'react'
import useDesign from '@/hooks/useDesign'

export default function RangeInput({ min, max, title, modificationName, icon, ...props }) {
  const [value, setValue] = useState(0)
  const { handleModification, setNewModification } = useDesign()

  const handleChange = (e) => {
    setNewModification(true)
    setValue(e.target.value)
    handleModification({ name: modificationName, value: e.target.value })
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
          value={value}
          onChange={handleChange}
          {...props}
        />
      </div>
      <p className='text-white self-end px-3'>{value}</p>
    </div>
  )
}
