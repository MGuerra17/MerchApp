import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'

const TSHIRT_LIST = [
  {
    id: 1,
    title: 'WHITE TSHIRT',
    description: 'Add a touch of style to your wardrobe with this sweater',
    publicId: 'tcoijl2g092ak7lqchry'
  },
  {
    id: 2,
    title: 'BLACK TSHIRT',
    description: 'This sweater is perfect for any occasion',
    publicId: 'yetyjjyg2fe1jze1tn70'
  },
  {
    id: 3,
    title: 'BLUE TSHIRT',
    description: 'Our sweater is soft, comfortable and durable',
    publicId: 'vpb7eknvdagsz6nusbon'
  },
  {
    id: 4,
    title: 'RED TSHIRT',
    description: 'The perfect choice for a casual and comfortable look',
    publicId: 'nlghsfko8sgvo0tdqq5d'
  },
  {
    id: 5,
    title: 'BLUEDARK TSHIRT',
    description: 'Keep your elegant and modern style with this sweater',
    publicId: 'wpgcpqqf9hsyc4n7l6c1'
  },
  {
    id: 6,
    title: 'YELLOW TSHIRT',
    description: 'This sweater adapts to any body and style',
    publicId: 'fql0hfg3mxvofm0ky09r'
  },
  {
    id: 7,
    title: 'GREEN TSHIRT',
    description: 'Show your unique style with our sweater',
    publicId: 'gtke3e07nsa4yrglda0j'
  },
  {
    id: 8,
    title: 'PURPLE TSHIRT',
    description: 'A quality sweater that will accompany you for years',
    publicId: 'iovxmukoplgqzgwoyzgf'
  },
  {
    id: 9,
    title: 'PINK TSHIRT',
    description: 'Our sweater is an investment worth it for any closet',
    publicId: 'hz2e6nrhhchmzyb2xrct'
  },
  {
    id: 10,
    title: 'SKY TSHIRT',
    description: 'This sweater is easy to combine with any item of clothing',
    publicId: 'jdbkd7t4ag7g5suvllpe'
  },
  {
    id: 11,
    title: 'ORANGE TSHIRT',
    description: 'The perfect gift for someone special who loves fashion.',
    publicId: 'aeejeyfn59wz9kkjdxxi'
  },
  {
    id: 12,
    title: 'TEAL TSHIRT',
    description: 'You will not regret having this sweater in your wardrobe',
    publicId: 'am9c6n71nmkcog8bgdit'
  }
]

const MUGS_LIST = [
  {
    id: 1,
    title: 'WHITE MUG #1',
    description: 'Enjoy your favorite drink in our high quality mug',
    publicId: 'dkoyddrni1op4gglvsao',
    position: { x: '-100', y: '-50' },
    size: { w: '350', h: '350' }
  },
  {
    id: 2,
    title: 'WHITE MUG #2',
    description: 'Make your morning coffee special with our mug',
    publicId: 'y89ez68sfsiz473dyj4y',
    position: { x: '-140', y: '30' },
    size: { w: '350', h: '350' }
  },
  {
    id: 3,
    title: 'WHITE MUG #3',
    description: 'Our mugs are perfect to give to your loved ones',
    publicId: 'psz4buceklksw3l99zwq',
    position: { x: '-80', y: '-40' },
    size: { w: '300', h: '300' }
  },
  {
    id: 4,
    title: 'DARK MUG #1',
    description: 'The perfect mug to accompany you at any time of the day',
    publicId: 'eej42or7fqnnxltzjzjv',
    position: { x: '-100', y: '-50' },
    size: { w: '350', h: '350' }
  },
  {
    id: 5,
    title: 'DARK MUG #2',
    description: 'The ideal gift for any coffee or tea lover: our personalized mug.',
    publicId: 'tjoocxj7zkauygy0hu7g',
    position: { x: '-140', y: '30' },
    size: { w: '350', h: '350' }
  },
  {
    id: 6,
    title: 'DARK MUG #3',
    description: 'Make your drink more special with our elegant mug',
    publicId: 'v4ky6ipxrbjgjy7ybraz',
    position: { x: '-80', y: '-40' },
    size: { w: '300', h: '300' }
  }
]

const BOOK_LIST = [
  {
    id: 1,
    title: 'WHITE BOOK #1',
    description: 'Our notebooks have an elegant and unique design',
    publicId: 'nuvjdvtnzjduvgczigrt',
    position: { x: '0', y: '-40' }
  },
  {
    id: 2,
    title: 'WHITE BOOK #2',
    description: 'Make your ideas come to life in our beautiful notebooks',
    publicId: 'j8twovkjoch1vooz3scw',
    position: { x: '0', y: '-40' }
  },
  {
    id: 3,
    title: 'WHITE BOOK #3',
    description: 'The perfect notebook to take with you everywhere and take notes at any time',
    publicId: 'tanzu3kuwc2z2izk6jqa',
    position: { x: '300', y: '-100' }
  },
  {
    id: 4,
    title: 'DARK BOOK #1',
    description: 'Our notebooks have an elegant and unique design',
    publicId: 'pyrmyl7kx1p37ymassmw',
    position: { x: '0', y: '-40' }
  },
  {
    id: 5,
    title: 'DARK BOOK #2',
    description: 'Make your ideas come to life in our beautiful notebooks',
    publicId: 'bm0lwmswh7i3otlrkqfw',
    position: { x: '0', y: '-40' }
  },
  {
    id: 6,
    title: 'DARK BOOK #3',
    description: 'The perfect notebook to take with you everywhere and take notes at any time',
    publicId: 'y3jkrtcjl1bnzfzuhgqv',
    position: { x: '300', y: '-100' }
  }
]

export default function ShowResults() {
  const router = useRouter()
  const { designPublicId } = router.query

  return (
    <>
      <Navbar />
      <h2 className='text-white ml-14 text-4xl font-bold mt-5'>Your Collection</h2>
      <h3 className='text-white ml-14 text-2xl font-bold mt-5'>T-Shirts</h3>

      <div className='w-full py-5 flex flex-wrap justify-evenly mt-8 gap-5'>
        {TSHIRT_LIST.map(({ id, title, description, publicId }) => {
          const url = designPublicId ? `https://res.cloudinary.com/dtp9alejv/image/upload/l_${designPublicId}.png,w_400,h_400,x_-20,y_-280,o_90/${publicId || 'yetyjjyg2fe1jze1tn70'}.png` : 'https://res.cloudinary.com/dtp9alejv/image/upload/v1677567045/yetyjjyg2fe1jze1tn70.png'
          return (
            <div key={id} className='flex items-center justify-center'>
              <div className='max-w-sm'>
                <a href={url} target='_blank' className='flex flex-col h-72 relative items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' rel='noreferrer'>
                  <img className='object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={url} alt='' />
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
                    <div className='flex items-center mt-2.5 mb-5'>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>First star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Second star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Third star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Fourth star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Fifth star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>5.0</span>
                    </div>
                    <div className='text-green-400 absolute bottom-0 right-0 py-1 px-2 rounded-md m-4 border border-green-400'>Download</div>
                  </div>
                </a>
              </div>
            </div>
          )
        })}

      </div>
      <h3 className='text-white ml-14 text-2xl font-bold mt-5'>Mugs</h3>
      <div className='w-full py-5 flex flex-wrap justify-evenly mt-8 gap-5'>
        {MUGS_LIST.map(({ id, title, description, publicId, position, size }) => {
          const url = designPublicId ? `https://res.cloudinary.com/dtp9alejv/image/upload/l_${designPublicId}.png,w_${size.w},h_${size.h},x_${position.x},y_${position.y},o_70/${publicId || 'yetyjjyg2fe1jze1tn70'}.png` : 'https://res.cloudinary.com/dtp9alejv/image/upload/v1677567045/yetyjjyg2fe1jze1tn70.png'
          return (
            <div key={id} className='flex items-center justify-center'>
              <div className='max-w-sm'>
                <a href={url} target='_blank' className='flex flex-col h-72 relative items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' rel='noreferrer'>
                  <img className='object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={url} alt='' />
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
                    <div className='flex items-center mt-2.5 mb-5'>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>First star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Second star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Third star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Fourth star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Fifth star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>5.0</span>
                    </div>
                    <div className='text-green-400 absolute bottom-0 right-0 py-1 px-2 rounded-md m-4 border border-green-400'>Download</div>
                  </div>
                </a>
              </div>
            </div>
          )
        })}
      </div>

      <h3 className='text-white ml-14 text-2xl font-bold mt-5'>NoteBooks</h3>
      <div className='w-full py-5 flex flex-wrap justify-evenly mt-8 gap-5'>
        {BOOK_LIST.map(({ id, title, description, publicId, position }) => {
          const url = designPublicId ? `https://res.cloudinary.com/dtp9alejv/image/upload/l_${designPublicId}.png,w_400,h_400,x_${position.x},y_${position.y},o_80/${publicId || 'yetyjjyg2fe1jze1tn70'}.png` : 'https://res.cloudinary.com/dtp9alejv/image/upload/v1677567045/yetyjjyg2fe1jze1tn70.png'
          return (
            <div key={id} className='flex items-center justify-center'>
              <div className='max-w-sm'>
                <a href={url} target='_blank' className='flex flex-col h-72 relative items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' rel='noreferrer'>
                  <img className='object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={url} alt='' />
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
                    <div className='flex items-center mt-2.5 mb-5'>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>First star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Second star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Third star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Fourth star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <svg aria-hidden='true' className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Fifth star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                      <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>5.0</span>
                    </div>
                    <div className='text-green-400 absolute bottom-0 right-0 py-1 px-2 rounded-md m-4 border border-green-400'>Download</div>
                  </div>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
