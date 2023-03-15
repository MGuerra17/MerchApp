import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export default function useModifications() {
  const [loading, setLoading] = useState(false)
  const [newModifications, setNewModifications] = useState([])

  const modificationsHandler = useDebouncedCallback((newModification) => {
    const newModificationList = [...newModifications]
    const modificationIndex = newModificationList.findIndex(modification => modification.name === newModification.name)
    if (modificationIndex !== -1) {
      newModificationList[modificationIndex] = newModification
    } else {
      newModificationList.push(newModification)
    }
    setNewModifications(newModificationList)
  }, 500)

  return {
    loading,
    newModifications,
    setLoading,
    setNewModifications,
    modificationsHandler
  }
}
