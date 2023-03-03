import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useDesign from '@/hooks/useDesign'
import FullPageLoading from './FullPageLoading'

const ROUTES_WITHOUT_DESIGN = [
  '/generateMerch',
  '/generateMerch/',
  '/generateMerch/GenerateDesign',
  '/generateMerch/UploadDesign'
]

const ROUTES_WITH_DESIGN = [
  '/generateMerch/EditDesign'
]

export default function RouteValidator({ children }) {
  const { originalFile } = useDesign()
  const router = useRouter()

  useEffect(() => {
    const originalFileURL = window.localStorage.getItem('originalFile')
    const isNotProtectedRoute = ROUTES_WITHOUT_DESIGN.includes(router.pathname)
    const isProtectedRoute = ROUTES_WITH_DESIGN.includes(router.pathname)
    if (originalFileURL && isNotProtectedRoute) {
      router.push('/generateMerch/EditDesign')
    } else if (!originalFileURL && isProtectedRoute) {
      router.push('/generateMerch')
    }
  }, [originalFile])

  return originalFile ? children : <FullPageLoading />
}
