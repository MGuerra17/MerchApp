import { useRouter } from 'next/router'
import { isUserAuthenticated } from '../lib/auth'

export default function WithDesign(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter()

    if (!isUserAuthenticated()) {
      // Redirecciona al usuario a otra página si no está autenticado
      router.push('/login')
      return null
    }

    return <Component {...props} />
  }
}
