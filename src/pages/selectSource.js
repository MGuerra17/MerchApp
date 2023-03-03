import LinkCard from '../components/LinkCard'

export default function SelectSource() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col'>
      <h1>Select Source</h1>
      <div className='flex gap-5'>
        <LinkCard
          title='Create Design using IA'
          description='If you dont have your design already'
          to='generateDesign'
        />
        <LinkCard
          title='Upload Design'
          description='If you already have your design'
          to='uploadDesign'
        />
      </div>
    </div>
  )
}
