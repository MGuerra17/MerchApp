import { useEffect } from 'react'
import useDesign from '../hooks/useDesign'

export default function GenerateMerchLayout({ children }) {
  const { validateRoute } = useDesign()

  useEffect(() => {
    validateRoute()
  })

  return (
    <div className='w-full min-h-screen bg-slate-50'>
      {children}
    </div>
  )
}
