import { createContext, useState, useEffect } from 'react'

export const DesignContext = createContext()

export function DesignProvider({ children }) {
  const [originalFile, setOriginalFile] = useState(null)
  const [modifiedFile, setModifiedFile] = useState(null)
  const [publicId, setPublicId] = useState(null)
  const [modificationsList, setModificationsList] = useState({})
  const [originalDimensions, setOriginalDimensions] = useState({})
  const [fonts, setFonts] = useState([])
  const [modificationsHistory, setModificationsHistory] = useState([])
  const [newModification, setNewModification] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const originalFileURL = window.localStorage.getItem('originalFile')
    const publicIdInfo = window.localStorage.getItem('publicId')
    const fontsList = window.localStorage.getItem('fonts')?.split(',') || []
    const dimensionsValues = window.localStorage.getItem('dimensions')

    setOriginalFile(originalFileURL)
    setModifiedFile(originalFileURL)
    setPublicId(publicIdInfo)
    setFonts(fontsList)
    setOriginalDimensions(JSON.parse(dimensionsValues))

    if (window.localStorage.getItem('modificationsList')) {
      const modificationsInfo = JSON.parse(window.localStorage.getItem('modificationsList'))
      setModificationsList(modificationsInfo)
    }
  }, [])

  return (
    <DesignContext.Provider
      value={{
        originalFile,
        modifiedFile,
        publicId,
        modificationsList,
        fonts,
        originalDimensions,
        modificationsHistory,
        newModification,
        loading,
        setOriginalFile,
        setModifiedFile,
        setPublicId,
        setModificationsList,
        setFonts,
        setOriginalDimensions,
        setModificationsHistory,
        setNewModification,
        setLoading
      }}
    >
      {children}
    </DesignContext.Provider>
  )
}
