import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ShowResults() {
  const [designs, setDesigns] = useState([])

  useEffect(() => {
    const designsList = window.localStorage.getItem('designList')
    if (designsList) {
      setDesigns(JSON.parse(designsList))
    }
  }, [])

  return (
    <>
      <div className='flex items-center justify-center'>
        <a href='/'>
          <h1 className='mx-auto py-4'>
            <span className='self-center text-5xl font-semibold whitespace-nowrap dark:text-white'>Merch<span className='text-orange-500 text-2xl'>App</span></span>
          </h1>
        </a>
      </div>
      <h2 className='text-white ml-14 text-4xl font-bold mt-5'>Your designs</h2>
      <div className='w-full py-5 flex flex-wrap justify-evenly mt-8 gap-5'>
        {designs.map(({ name, publicId }) => {
          const url = publicId ? `https://res.cloudinary.com/dtp9alejv/image/upload/${publicId}.png` : 'https://res.cloudinary.com/dtp9alejv/image/upload/v1677567045/yetyjjyg2fe1jze1tn70.png'
          return (
            <div key={publicId} className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href={url} target='_blank' className=' flex items-center justify-center' rel='noreferrer'>
                <img className='p-8 rounded-t-lg h-80' src={url} alt='product image' />
              </a>
              <div className='px-5 pb-5'>
                <a href='#'>
                  <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{name}</h5>
                </a>
                <div className='flex flex-1 items-center justify-end'>
                  <a href={`/ShowResults/${publicId}`} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Go to Merch</a>
                </div>
              </div>
            </div>
          )
        })}
        {designs.length < 1 && (
          <div>
            <h3 className='text-center text-2xl font-semibold text-white mb-10'>No designs yet. <a href='/generateMerch' className='text-blue-700 hover:text-blue-800 hover:underline hover:decoration-solid  '>Create the first one!</a> </h3>
            <Image src='/Add-Files.png' width={400} height={300} alt='add file illustration' />
          </div>
        )}
      </div>
    </>
  )
}
