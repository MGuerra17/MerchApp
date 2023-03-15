import { useRouter } from 'next/router'
import { useProjectsContext } from '@/contexts/projects'
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
  const { state } = useProjectsContext()
  const router = useRouter()

  const isNotProtectedRoute = ROUTES_WITHOUT_DESIGN.includes(router.pathname)
  const isProtectedRoute = ROUTES_WITH_DESIGN.includes(router.pathname)

  if (state.loading) return <FullPageLoading />

  if (state?.currentProject && isNotProtectedRoute) {
    router.push('/generateMerch/EditDesign')
  } else if (!state?.currentProject && isProtectedRoute) {
    router.push('/generateMerch')
  } else {
    return children
  }
}
