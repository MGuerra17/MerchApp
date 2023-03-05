import useDesign from '@/hooks/useDesign'
import { Label, TextInput } from 'flowbite-react'

export default function OneFieldInput({ name, valueName, modificationName }) {
  const { handleModification } = useDesign()
  return (
    <div>
      <div className='mb-2 block'>
        <Label
          htmlFor='small'
          value={name}
        />
      </div>
      <TextInput
        id='small'
        type='text'
        sizing='sm'
      />
      <span>{valueName}</span>
    </div>
    // <div className='relative mx-3'>
    //   <label htmlFor='name'>{name}</label>
    //   <input
    //     type='text'
    //     name={name}
    //     className='bg-gray-100 rounded-md p-2 w-20 mx-1'
    //     onChange={(e) => handleModification({ name: modificationName, value: e.target.value })}
    //     required
    //   />
    //   <span>{valueName}</span>
    // </div>
  )
}
