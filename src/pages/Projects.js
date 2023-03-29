import Navbar from '@/components/Navbar'
import { useProjectsContext } from '@/contexts/projects'
import Image from 'next/image'

export default function ShowResults() {
  const { state } = useProjectsContext()
  const { projects } = state
  return (
    <>
      <Navbar />
      <h2 className='text-white ml-14 text-4xl font-bold mt-5'>Your projects</h2>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-14'>
        {projects?.map(({ name, publicId, date }) => {
          const url = publicId ? `https://res.cloudinary.com/dtp9alejv/image/upload/${publicId}.png` : 'https://res.cloudinary.com/dtp9alejv/image/upload/v1677567045/yetyjjyg2fe1jze1tn70.png'
          return (
            <div key={publicId} className='w-full relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto'>
              <span className='absolute w-8 bottom-24 right-0 m-3'>
                <svg className='w-full text-slate-400' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M5.57489 2.07403C5.83474 2.19892 6 2.4617 6 2.75001C6 3.57985 6.31211 4.05763 6.70313 4.63948L6.73156 4.68175C7.0641 5.17579 7.5 5.8234 7.5 6.75001C7.5 7.69552 7.02282 8.52959 6.29615 9.02452C6.48733 9.1848 6.65672 9.38248 6.80225 9.61803C7.27801 10.388 7.5 11.5645 7.5 13.2549C7.5 14.967 7.27003 17.023 6.89541 18.6644C6.70914 19.4806 6.47843 20.2335 6.20272 20.7994C6.06598 21.08 5.89948 21.3541 5.69217 21.5685C5.48714 21.7804 5.17035 22.0049 4.75 22.0049C4.32965 22.0049 4.01286 21.7804 3.80783 21.5685C3.60052 21.3541 3.43402 21.08 3.29728 20.7994C3.02157 20.2335 2.79086 19.4806 2.60459 18.6644C2.22997 17.023 2 14.967 2 13.2549C2 11.5645 2.22199 10.388 2.69775 9.61803C2.84328 9.38248 3.01267 9.1848 3.20385 9.02452C2.47718 8.52959 2 7.69552 2 6.75001C2 6.38181 2.00034 5.74889 2.38341 4.93168C2.75829 4.13192 3.47066 3.21301 4.78148 2.16436C5.00661 1.98425 5.31504 1.94914 5.57489 2.07403ZM3.5 6.74875V6.75001C3.5 7.44036 4.05964 8.00001 4.75 8.00001C5.44036 8.00001 6 7.44036 6 6.75001C6 6.31097 5.81518 6.00743 5.45814 5.47615L5.44592 5.45796C5.21705 5.11747 4.94673 4.71532 4.75381 4.19756C4.21053 4.74999 3.9105 5.208 3.74159 5.56833C3.5 6.08374 3.5 6.4505 3.5 6.74875ZM3.97383 10.4065C3.72572 10.808 3.5 11.6315 3.5 13.2549C3.5 14.8565 3.71774 16.8005 4.06698 18.3306C4.24264 19.1003 4.44289 19.726 4.64574 20.1424C4.68308 20.219 4.71806 20.2834 4.75 20.3369C4.78194 20.2834 4.81692 20.219 4.85426 20.1424C5.05711 19.726 5.25736 19.1003 5.43302 18.3306C5.78226 16.8005 6 14.8565 6 13.2549C6 11.6315 5.77428 10.808 5.52617 10.4065C5.41327 10.2237 5.30119 10.1372 5.20105 10.0886C5.09322 10.0363 4.95068 10.0049 4.75 10.0049C4.54932 10.0049 4.40678 10.0363 4.29895 10.0886C4.19881 10.1372 4.08673 10.2237 3.97383 10.4065Z' fill='currentColor' />
                  <path d='M9.99994 14.917C9.46162 14.8267 8.94761 14.6647 8.46806 14.4412C8.48904 14.0349 8.49994 13.637 8.49994 13.2549C8.49994 13.0791 8.49768 12.9066 8.49298 12.7376C8.94409 13.0407 9.4531 13.2644 9.99994 13.3885V10.5C9.99994 9.67157 10.6715 9 11.4999 9H15.4999C15.4999 6.51472 13.4852 4.5 10.9999 4.5C9.97153 4.5 9.0237 4.84498 8.26586 5.42552C8.06633 4.8731 7.78116 4.44995 7.58275 4.15554L7.54248 4.09572C8.51976 3.40549 9.7125 3 10.9999 3C14.3136 3 16.9999 5.68629 16.9999 9H20.4999C21.3284 9 21.9999 9.67157 21.9999 10.5V19.5C21.9999 20.3284 21.3284 21 20.4999 21H11.4999C10.6715 21 9.99994 20.3284 9.99994 19.5V14.917ZM11.4999 14.9795V19.5H20.4999V10.5H16.8109C16.185 12.932 14.0726 14.7672 11.4999 14.9795ZM15.2439 10.5H11.4999V13.4725C13.239 13.2803 14.6794 12.097 15.2439 10.5Z' fill='currentColor' />
                </svg>
              </span>
              <a href={url} target='_blank' className=' flex items-center justify-center' rel='noreferrer'>
                <img className='p-8 w-full aspect-square object-contain' src={url} alt='product image' />
              </a>
              <div className='px-5 pb-5'>
                <a href='#'>
                  <h5 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{name}</h5>
                </a>
                <p className='text-slate-400 text-sm my-2'>{date?.split('T')?.join(' ')?.split('.')[0] || 'No date'}</p>
                <div className='flex flex-1 items-center justify-end'>
                  <a href={`/collections/${publicId}`} className='text-green-500 border-2 border-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-green-700 dark:focus:ring-green-800'>Go to Merch</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {projects?.length < 1 && (
        <div>
          <h3 className='text-center text-2xl font-semibold text-white mb-10'>Nothing here. <a href='/generateMerch' className='text-blue-700 hover:text-blue-800 hover:underline hover:decoration-solid  '>Create yor first design!</a> </h3>
          <Image className='mx-auto px-10 md:px-0' src='/Add-Files.png' width={400} height={300} alt='add file illustration' />
        </div>
      )}
    </>
  )
}
