import { Label } from 'flowbite-react'
import Image from 'next/image'

export default function ShapeOption({ name, active, selectHandler, image, ...props }) {
  return (
    <div className='flex-col items-center justify-center'>
      <div
        className={`relative w-10 h-10 border-2 border-slate-500 rounded-md mx-auto ${active && 'border-gray-400'}`}
        onClick={selectHandler}
        {...props}
      >
        {active && (
          <span className='absolute bottom-8 left-8 border-2 rounded-full w-4 h-4 bg-green-200'>
            <svg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17.0001 9L10 16L7 13' stroke='#000000' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </span>
        )}
        <Image className='p-1' src={`/${image}.png`} priority fill sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw' alt={image} />
      </div>
      <Label value={name} />
    </div>

  )
}
