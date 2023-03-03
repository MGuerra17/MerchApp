import useDesign from '@/hooks/useDesign'

export default function CheckInput({ name, modificationName }) {
  const { handleModification } = useDesign()
  return (
    <div className='relative mx-3'>
      <label htmlFor='name'>{name}</label>
      <input
        type='checkbox'
        name={name}
        className='bg-gray-100 rounded-md p-2 mx-1'
        onChange={(e) => handleModification({ name: modificationName, value: e.target.checked })}
        required
      />
    </div>
  )
}
