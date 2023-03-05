import Link from 'next/link'

export default function LinkCard({ title, description, to, icon }) {
  return (
    <Link href={to}>
      <div href='#' className='block w-80 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        {icon}
        {/* <svg class='w-10 h-10 mb-2 text-gray-500 dark:text-gray-400' ariaHidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z' clipRule='evenodd' /><path d='M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z' /></svg> */}
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
        <p className='font-normal text-gray-700 dark:text-gray-400 text-sm'>{description}</p>
      </div>
    </Link>
  )
}
