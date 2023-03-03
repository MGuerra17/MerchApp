import useDesign from '@/hooks/useDesign'

export default function OneFieldInput({ name, valueName, modificationName }) {
  const { handleModification } = useDesign()
  return (
    <div className='relative mx-3'>
      <label htmlFor='name'>{name}</label>
      <input
        type='text'
        name={name}
        className='bg-gray-100 rounded-md p-2 w-20 mx-1'
        onChange={(e) => handleModification({ name: modificationName, value: e.target.value })}
        required
      />
      <span>{valueName}</span>
    </div>
  )
}
