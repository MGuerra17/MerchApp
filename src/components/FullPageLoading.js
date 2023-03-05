import { Spinner } from 'flowbite-react'
export default function FullPageLoading() {
  return (
    <div className='w-full bg-slate-600/20 absolute inset-0 m-auto z-10 flex justify-center items-center'>
      <Spinner aria-label='Loading...' size='xl' />
    </div>

  )
}
