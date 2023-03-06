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
    title: 'FIRST MUG',
    description: 'Enjoy your favorite drink in our high quality mug',
    publicId: 'dkoyddrni1op4gglvsao',
    position: { x: '-100', y: '-50' }
  },
  {
    id: 2,
    title: 'SECOND MUG',
    description: 'Make your morning coffee special with our mug',
    publicId: 'y89ez68sfsiz473dyj4y',
    position: { x: '-150', y: '0' }
  },
  {
    id: 3,
    title: 'THIRD MUG',
    description: 'Our mugs are perfect to give to your loved ones',
    publicId: 'psz4buceklksw3l99zwq',
    position: { x: '-80', y: '-50' }
  }
]

const BOOK_LIST = [
  {
    id: 1,
    title: 'FIRST BOOK',
    description: 'Our notebooks have an elegant and unique design',
    publicId: 'nuvjdvtnzjduvgczigrt',
    position: { x: '0', y: '-40' }
  },
  {
    id: 2,
    title: 'SECOND BOOK',
    description: 'Make your ideas come to life in our beautiful notebooks',
    publicId: 'j8twovkjoch1vooz3scw',
    position: { x: '0', y: '-40' }
  },
  {
    id: 3,
    title: 'THIRD BOOK',
    description: 'The perfect notebook to take with you everywhere and take notes at any time',
    publicId: 'tanzu3kuwc2z2izk6jqa',
    position: { x: '300', y: '-100' }
  }
]

export default function ShowResults() {
  const router = useRouter()
  const { designPublicId } = router.query

  return (
    <>
      <div className='flex items-center justify-center'>
        <a href='/'>
          <h1 className='mx-auto py-4'>
            <span className='self-center text-5xl font-semibold whitespace-nowrap dark:text-white'>Merch<span className='text-orange-500 text-2xl'>App</span></span>
          </h1>
        </a>
      </div>
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
        {MUGS_LIST.map(({ id, title, description, publicId, position }) => {
          const url = designPublicId ? `https://res.cloudinary.com/dtp9alejv/image/upload/l_${designPublicId}.png,w_400,h_400,x_${position.x},y_${position.y},o_80/${publicId || 'yetyjjyg2fe1jze1tn70'}.png` : 'https://res.cloudinary.com/dtp9alejv/image/upload/v1677567045/yetyjjyg2fe1jze1tn70.png'
          return (
            <div key={id} className='flex items-center justify-center'>
              <div className='max-w-sm'>
                <a href={url} target='_blank' className='flex flex-col h-72 relative items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' rel='noreferrer'>
                  <img className='object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={url} alt='' />
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
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
