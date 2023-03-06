import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='w-full px-36 home-bg'>
        <h1 className='w-full text-center mt-20 font-bold text-white text-5xl'>Unleash your creativity with our unique design app</h1>
        <h3 className='w-full text-center mt-10 text-slate-400 text-xl'>Our application offers you tools so you can create exclusive and original designs, with no limits to your creativity!</h3>
        <div className='flex justify-center gap-8 py-8 mt-10'>
          <div className='w-40 flex items-center justify-center'>
            <Image src='/image1.png' width={200} height={200} alt='Tshirt created with merch app' />
          </div>
          <div className='w-40 items-center justify-center'>
            <Image src='/image2.png' width={200} height={200} alt='Mug created with merch app' />
          </div>
          <div className='w-40 items-center justify-center'>
            <Image className='my-auto' src='/image4.png' width={200} height={200} alt='Notebook created with merch app' />
          </div>
        </div>
        <h2 className='w-full text-center mt-20 font-bold text-white text-5xl'>Features</h2>

        <article className='w-full flex mt-10 h-80'>
          <div className='w-2/3 flex items-center flex-col justify-center'>
            <h5 className='w-full text-white font-bold text-2xl'>Create using AI</h5>
            <p className='w-full mt-10 text-slate-400 text-lg'>Our unique design app combines human creativity with the power of artificial intelligence so you can create amazing designs in seconds.</p>
          </div>

          <div className='w-1/3 flex items-center justify-center'>
            <Image src='/IA.png' alt='AI image' width={700} height={700} />
          </div>
        </article>
        <article className='w-full flex mt-10 h-80'>
          <div className='w-1/3 flex items-center justify-center'>
            <Image src='/uploadpng.png' alt='AI image' width={300} height={300} />
          </div>
          <div className='w-2/3 flex items-center flex-col justify-center'>
            <h5 className='w-full text-white font-bold text-2xl'>Use your own images</h5>
            <p className='w-full mt-10 text-slate-400 text-lg'>With our unique design app, you can upload your own files and turn them into unique designs in a matter of seconds. Be the master of your creativity and start designing today!.</p>
          </div>
        </article>
        <article className='w-full flex mt-10 h-80'>
          <div className='w-2/3 flex items-center flex-col justify-center'>
            <h5 className='w-full text-white font-bold text-2xl'>Use your favorite font</h5>
            <p className='w-full mt-10 text-slate-400 text-lg'>Our uniquely designed app allows you to customize your designs even further as you can upload your own fonts in OTF or TTF format. Create unique designs with your favorite fonts and get the most out of your creativity!.</p>
          </div>

          <div className='w-1/3 flex items-center justify-center'>
            <Image src='/font.png' alt='AI image' width={700} height={700} />
          </div>
        </article>
        <article className='w-full flex mt-10 h-80'>
          <div className='w-1/3 flex items-center justify-center'>
            <Image src='/folder.png' alt='AI image' width={700} height={700} />
          </div>
          <div className='w-2/3 flex items-center flex-col justify-center'>
            <h5 className='w-full text-white font-bold text-2xl'>Your designs are safe</h5>
            <p className='w-full mt-10 text-slate-400 text-lg'>Don't waste your creative ideas. With our uniquely designed app, you can save your designs anytime, anywhere for later reference. Get inspired and keep your designs organized with our application</p>
          </div>
        </article>
      </main>

      <footer className='p-4 mt-10 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Made with ❤️ for Midu
        </span>
        <div className='flex text-white'>
          Powered By:
          <Image className='ml-8' src='/Cloudinary_logo.png' width={100} height={60} alt='Cloudinary Logo' />
        </div>
      </footer>

    </>
  )
}
