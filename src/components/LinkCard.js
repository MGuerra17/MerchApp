import Link from 'next/link'

export default function LinkCard({ title, description, to, ...props }) {
  return (
    <Link href={to}>
      <div className='p-3 bg-slate-200 border border-gray-500 rounded-lg' {...props}>
        <h2 className=' text-md text-gray-500 font-bold'>{title}</h2>
        <p className='text-sm text-gray-400'>{description}</p>
      </div>
    </Link>
  )
}
