import { useEffect } from 'react'
import useDesign from '@/hooks/useDesign'
import EditFileLayout from '@/components/EditFileLayout'
import RouteValidator from '@/components/RouteValidator'

export default function EditDesign() {
  const {
    applyModifications
  } = useDesign()

  useEffect(() => {
    if (window.localStorage.getItem('modificationsList')) {
      const modificationsInfo = JSON.parse(window.localStorage.getItem('modificationsList'))
      applyModifications(modificationsInfo)
    }
  }, [])

  return (
    <RouteValidator>
      <EditFileLayout />
    </RouteValidator>
  )
}
