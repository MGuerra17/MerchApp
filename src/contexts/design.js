import { createContext, useState, useEffect } from 'react'

export const DesignContext = createContext()

export function DesignProvider({ children }) {
  const [projectName, setProjectName] = useState('')
  const [originalFile, setOriginalFile] = useState('')
  const [modifiedFile, setModifiedFile] = useState('')
  const [publicId, setPublicId] = useState('')
  const [modificationsList, setModificationsList] = useState({})
  const [originalDimensions, setOriginalDimensions] = useState({})
  const [fonts, setFonts] = useState([])
  const [modificationsHistory, setModificationsHistory] = useState([])
  const [newModification, setNewModification] = useState(false)
  const [loading, setLoading] = useState(false)
  const [designList, setDesignList] = useState([])

  useEffect(() => {
    const projectNameValue = window.localStorage.getItem('projectName')
    const originalFileURL = window.localStorage.getItem('originalFile')
    const publicIdInfo = window.localStorage.getItem('publicId')
    const fontsList = window.localStorage.getItem('fonts')?.split(',') || []
    const dimensionsValues = window.localStorage.getItem('dimensions')

    setProjectName(projectNameValue)
    setOriginalFile(originalFileURL)
    setPublicId(publicIdInfo)
    setFonts(fontsList)
    setOriginalDimensions(JSON.parse(dimensionsValues))

    if (window.localStorage.getItem('designList')) {
      const designListValue = JSON.parse(window.localStorage.getItem('designList'))
      setDesignList(designListValue)
    }

    if (window.localStorage.getItem('modificationsList')) {
      const modificationsInfo = JSON.parse(window.localStorage.getItem('modificationsList'))
      setModificationsList(modificationsInfo)
    }
  }, [])

  const cleanContext = () => {
    window.localStorage.removeItem('projectName')
    window.localStorage.removeItem('originalFile')
    window.localStorage.removeItem('publicId')
    window.localStorage.removeItem('dimensions')
    window.localStorage.removeItem('modificationsList')

    setProjectName('')
    setOriginalFile(null)
    setModifiedFile(null)
    setPublicId(null)
    setModificationsList({})
    setOriginalDimensions({})
    setModificationsHistory([])
  }

  return (
    <DesignContext.Provider
      value={{
        projectName,
        originalFile,
        modifiedFile,
        publicId,
        modificationsList,
        fonts,
        originalDimensions,
        modificationsHistory,
        newModification,
        designList,
        loading,
        setProjectName,
        setOriginalFile,
        setModifiedFile,
        setPublicId,
        setModificationsList,
        setFonts,
        setOriginalDimensions,
        setModificationsHistory,
        setNewModification,
        setDesignList,
        setLoading,
        cleanContext
      }}
    >
      {children}
    </DesignContext.Provider>
  )
}
