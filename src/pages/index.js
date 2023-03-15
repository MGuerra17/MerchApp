import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useRef } from 'react'
import AiHomeSvg from '../../public/AiHomeSvg'
import LastHomeSvg from '../../public/LastHomeSvg'
import SecondHomeSvg from '../../public/SecondHomeSvg'

export default function Home() {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()

  return (
    <>
      <Navbar />
      <main className='w-full px-8 md:px-36 home-bg'>
        <div className='w-full text-center mt-20 font-bold text-3xl md:text-5xl animate-gradient-text capitalize'>Unleash your creativity with our unique design app</div>
        <h3 className='w-4/5 md:w-2/5 mx-auto text-center mt-10 text-slate-400 text-sm md:text-xl'>Our application offers you tools so you can create exclusive and original designs, with no limits to your creativity!</h3>
        <div className='w-full flex my-10 justify-center gap-8'>
          <a href='/generateMerch' className=''>
            <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Get started</button>
          </a>
          <a onClick={executeScroll}>
            <button type='button' className='text-white border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  dark:focus:ring-blue-800'>Sample products</button>
          </a>
        </div>

        <p className='w-full text-4xl my-20 text-white font-bold text-center'>FEATURES</p>
        <div className='flex flex-col gap-3 lg:flex-row w-full justify-center my-12'>
          <div className='m-2 flex items-center justify-center'>
            <div className='component flex max-w-xs pt-16 h-96'>
              <div className='w-full flex flex-col items-center justify-center px-1 md:px-8 shadow-lg rounded-lg bg-slate-800 text-center relative md:min-h-[350px]'>
                <div className='absolute top-0 left-0 right-0 '>
                  <div className='inline-block bg-indigo-200 rounded-full p-8 transform -translate-y-1/2'>
                    <SecondHomeSvg className='w-10' />

                  </div>
                </div>
                <div className='uppercase text-blue-700 font-bold'>Your design, your rules</div>
                <div className='mt-3 text-sm text-slate-400 px-3'>With our unique design app, you can upload your own files and turn them into unique designs in a matter of seconds. You can also upload your own fonts in OTF or TTF format and use it to make amazing designs.</div>
                <div className='absolute bottom-0 mx-auto mb-5 w-full'><a href='/generateMerch' className='uppercase font-bold border-b-2 text-blue-500 border-blue-200 hover:border-blue-500 hover:text-blue-600'>Try it</a></div>
              </div>
            </div>
          </div>
          <div className='m-2 flex items-center justify-center'>
            <div className='component flex max-w-xs pt-16 h-96'>
              <div className='w-full flex flex-col items-center justify-center px-1 md:px-8 shadow-lg rounded-lg bg-slate-800 text-center relative md:min-h-[350px]'>
                <div className='absolute top-0 left-0 right-0 '>
                  <div className='inline-block bg-indigo-200 rounded-full p-8 transform -translate-y-1/2'>
                    <AiHomeSvg className='w-10' />
                  </div>
                </div>
                <div className='uppercase text-blue-700 font-bold'>Create using AI</div>
                <div className='mt-3 text-sm text-slate-400 px-3'>Our unique design app combines human creativity with the power of artificial intelligence so you can create amazing designs in seconds. Creating beautiful designs has never been so easy.</div>
                <div className='absolute bottom-0 mx-auto mb-5 w-full'><a href='/generateMerch/GenerateDesign' className='uppercase font-bold border-b-2 text-blue-500 border-blue-200 hover:border-blue-500 hover:text-blue-600'>Try it</a></div>
              </div>
            </div>
          </div>
          <div className='m-2 flex items-center justify-center'>
            <div className='component flex max-w-xs pt-16 h-96'>
              <div className='w-full flex flex-col items-center justify-center px-1 md:px-8 shadow-lg rounded-lg bg-slate-800 text-center relative md:min-h-[350px]'>
                <div className='absolute top-0 left-0 right-0 '>
                  <div className='inline-block bg-indigo-200 rounded-full p-8 transform -translate-y-1/2'>
                    <LastHomeSvg className='w-10' />
                  </div>
                </div>
                <div className='uppercase text-blue-700 font-bold'>Save your work</div>
                <div className='mt-3 text-sm text-slate-400 px-3'>Our application allows you to save the information of your current edition so that it is not lost when you close the project. In addition, at the end of the edition the design will be saved automatically so that you can view the collection later</div>
                <div className='absolute bottom-0 mx-auto mb-5 w-full'><a href='/Designs' className='uppercase font-bold border-b-2 text-blue-500 border-blue-200 hover:border-blue-500 hover:text-blue-600'>Try it</a></div>
              </div>
            </div>
          </div>
        </div>
        <h1 className='w-full text-4xl mt-20 text-white font-bold text-center capitalize' ref={myRef}>SAMPLE PRODUCTS</h1>
        <div className='grid lg:grid-cols-3 gap-8 py-8 mt-10'>
          <div className='flex flex-col items-center justify-between mx-auto'>
            <p className='text-3xl mb-5 font-bold text-white'>Notebook</p>
            <div className='flex flex-1 items-center'>
              <Image src='/sample-notebook.png' width={300} height={300} alt='Tshirt created with merch app' />
            </div>
          </div>
          <div className='flex flex-col items-center justify-between mx-auto'>
            <p className='text-3xl mb-5 font-bold text-white'>T-shirt</p>
            <div className='flex flex-1 items-center'>
              <Image src='/tshirt.png' width={300} height={300} alt='Mug created with merch app' />
            </div>
          </div>

          <div className='flex flex-col items-center justify-between mx-auto'>
            <p className='text-3xl mb-5 font-bold text-white'>Mug</p>
            <div className='flex flex-1 items-center'>
              <Image src='/mug.png' width={300} height={300} alt='Notebook created with merch app' />
            </div>
          </div>
        </div>
      </main>

      <footer className='p-4 mt-10 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
        <div className='flex text-white'>
          Powered By:
          <Image className='ml-8 object-contain' src='/Cloudinary_logo.png' width={100} height={60} alt='Cloudinary Logo' />
        </div>
      </footer>

    </>
  )
}
