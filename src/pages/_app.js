import '@/styles/globals.css'
import { ProjectsProvider } from '@/contexts/projects'

export default function App({ Component, pageProps }) {
  return (
    <ProjectsProvider>
      <Component {...pageProps} />
    </ProjectsProvider>
  )
}
