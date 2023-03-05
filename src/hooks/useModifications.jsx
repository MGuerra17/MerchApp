import { useState } from 'react'

export default function useModifications() {
  const [newModification, setNewModification] = useState(false)
  return {
    newModification,
    setNewModification
  }
}
