import RouteValidator from '@/components/RouteValidator'
import useDesign from '@/hooks/useDesign'
import { useEffect, useState } from 'react'
import { Button } from 'flowbite-react'

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
    publicId: ''
  },
  {
    id: 8,
    title: 'PURPLE TSHIRT',
    description: 'A quality sweater that will accompany you for years',
    publicId: ''
  },
  {
    id: 9,
    title: 'PINK TSHIRT',
    description: 'Our sweater is an investment worth it for any closet',
    publicId: ''
  },
  {
    id: 10,
    title: 'SKY TSHIRT',
    description: 'This sweater is easy to combine with any item of clothing',
    publicId: ''
  },
  {
    id: 11,
    title: 'TSHIRT',
    description: 'The perfect gift for someone special who loves fashion.',
    publicId: ''
  },
  {
    id: 12,
    title: 'TSHIRT',
    description: 'You will not regret having this sweater in your wardrobe',
    publicId: ''
  }
]

export default function ShowResults() {
  const { designList, cleanContext } = useDesign()
  const [currentDesign, setCurrentDesign] = useState('')

  useEffect(() => {
    const lastDesign = [...designList]?.pop()
    setCurrentDesign(lastDesign)
  }, [designList])

  return (
    <RouteValidator>
      <div className='flex items-center justify-center'>
        <h1 className='mx-auto py-4'>
          <span className='self-center text-5xl font-semibold whitespace-nowrap dark:text-white'>Merch<span className='text-orange-500 text-2xl'>App</span></span>
        </h1>
      </div>
      <h2 className='text-white ml-14 text-5xl font-bold'>{currentDesign?.name}</h2>
      <div className='flex justify-between px-14 mt-5'>
        <h2 className='text-slate-300 text-4xl'>Categories</h2>
        <Button onClick={cleanContext}>Finalizar</Button>
      </div>
      <h3 className='text-white ml-14 text-2xl font-bold mt-5'>T-Shirts</h3>

      <div className='w-full py-5 flex flex-wrap justify-evenly mt-8 gap-5'>
        {TSHIRT_LIST.map(({ id, title, description, publicId }) => {
          const url = currentDesign?.publicId ? `https://res.cloudinary.com/dtp9alejv/image/upload/l_${currentDesign?.publicId}.png,w_400,h_400,x_-20,y_-280,o_90/${publicId || 'yetyjjyg2fe1jze1tn70'}.png` : 'https://res.cloudinary.com/dtp9alejv/image/upload/v1677567045/yetyjjyg2fe1jze1tn70.png'
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
    </RouteValidator>
  )
}
