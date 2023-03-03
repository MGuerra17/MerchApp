import '@/styles/globals.css'
import { DesignProvider } from '@/contexts/design'

export default function App({ Component, pageProps }) {
  return (
    <DesignProvider>
      <Component {...pageProps} />
    </DesignProvider>
  )
}
