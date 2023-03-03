import { createContext, useState, useEffect } from 'react'

export const DesignContext = createContext()

export function DesignProvider({ children }) {
  const [originalFile, setOriginalFile] = useState(null)
  const [modifiedFile, setModifiedFile] = useState(null)
  const [publicId, setPublicId] = useState(null)
  const [modificationsList, setModificationsList] = useState({})
  const [fonts, setFonts] = useState([])

  useEffect(() => {
    const originalFileURL = window.localStorage.getItem('originalFile')
    const publicIdInfo = window.localStorage.getItem('publicId')
    const fontsList = window.localStorage.getItem('fonts')?.split(',') || []
    setOriginalFile(originalFileURL)
    setModifiedFile(originalFileURL)
    setPublicId(publicIdInfo)
    setFonts(fontsList)

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
        setOriginalFile,
        setModifiedFile,
        setPublicId,
        setModificationsList,
        setFonts
      }}
    >
      {children}
    </DesignContext.Provider>
  )
}
