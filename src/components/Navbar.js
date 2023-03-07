export default function Navbar() {
  return (

    <nav className='border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-lg'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='/' className='flex items-center'>
          <span className='self-center text-md md:text-2xl font-bold whitespace-nowrap dark:text-white flex items-center'>
            <svg className='w-7 md:w-12 text-blue-700 mx-1 md:mx-3' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.01 9.01999 9.02C12.19 9.27 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z' fill='currentColor' />
              <path opacity='0.4' d='M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.27 9.01999 9.02C9.00999 8.85 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z' fill='currentColor' />
              <path d='M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.07999 6.93 3.70999 6.3L6.29999 3.71001C6.91999 3.08001 6.48 2 5.59 2Z' fill='currentColor' />
              <path d='M18.4097 22H20.9997C21.5497 22 21.9997 21.55 21.9997 21V18.41C21.9997 17.52 20.9197 17.07 20.2897 17.7L17.6997 20.29C17.0797 20.92 17.5197 22 18.4097 22Z' fill='currentColor' />
            </svg>
            Merch<span className='text-blue-700'>App</span>
          </span>
        </a>
        <div className='flex md:order-2'>
          <a href='/generateMerch'>
            <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Create Design</button>
          </a>
          <button data-collapse-toggle='navbar-cta' type='button' className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-cta' aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' /></svg>
          </button>
        </div>
        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-cta'>
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 '>
            <li>
              <a href='/' className='block py-2 pl-3 pr-4 hover:text-white text-gray-400 bg-blue-700 rounded md:bg-transparent md:p-0' aria-current='page'>Home</a>
            </li>
            <li>
              <a href='/Designs' className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-white text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'>Designs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
