import { useContext, useEffect, useState } from 'react'
import { DesignContext } from '@/contexts/design'
import imageModifications from '@/helpers/imageModifications'

export default function useDesign() {
  const {
    originalFile,
    setOriginalFile,
    publicId,
    modificationsList,
    modifiedFile,
    fonts,
    originalDimensions,
    newModification,
    setModifiedFile,
    setPublicId,
    setModificationsList,
    setFonts,
    setOriginalDimensions,
    modificationsHistory,
    setModificationsHistory,
    setNewModification,
    loading,
    setLoading
  } = useContext(DesignContext)

  useEffect(() => {
    console.log(modificationsList)
  }, [modificationsList])

  const [showOriginal, setShowOriginal] = useState(false)

  const saveOriginalFile = (data) => {
    window.localStorage.setItem('originalFile', data)
    setOriginalFile(data)
  }

  const savePublicId = (data) => {
    window.localStorage.setItem('publicId', data)
    setPublicId(data)
  }

  const saveDimensions = (data) => {
    window.localStorage.setItem('dimensions', JSON.stringify(data))
    setOriginalDimensions(data)
  }

  const saveFont = (fontName) => {
    if (fonts.includes(fontName)) return

    const newFontsList = [fontName, ...fonts]

    window.localStorage.setItem('fonts', newFontsList.toString())
    setFonts(newFontsList)
  }

  const handleUndo = () => {
    if (modificationsHistory.length === 0) return
    setLoading(true)
    const allModifications = { ...modificationsList }
    const lastModifications = [...modificationsHistory]
    const lastModification = lastModifications.pop()
    delete allModifications[lastModification]
    console.log(modificationsList, allModifications)
    applyModifications(allModifications)
    setModificationsList(allModifications)
    setModificationsHistory(lastModifications)
    setLoading(false)
  }

  const handleModification = ({ name, value }) => {
    if (modificationsHistory[modificationsHistory.length - 1] !== name) {
      const newHistory = [...modificationsHistory]
      newHistory.push(name)
      console.log(newHistory)
      setModificationsHistory(newHistory)
    }
    console.log('no')
    setModificationsList({ ...modificationsList, [name]: value })
  }

  const applyModifications = (modifications) => {
    setLoading(true)
    console.log('cargango..')
    const newModifiedFile = imageModifications.createImage(window.localStorage.getItem('publicId'))

    if (Object.keys(modifications).length > 0) {
      for (const modification in modifications) {
        const modificationFunction = imageModifications[modification]
        modificationFunction(newModifiedFile, modifications[modification])
      }
    }
    console.log({ modifications })
    window.localStorage.setItem('modificationsList', JSON.stringify(modifications))
    console.log(newModifiedFile?.toURL())
    setLoading(false)
  }

  return {
    originalFile,
    fonts,
    saveOriginalFile,
    modifiedFile,
    setModifiedFile,
    publicId,
    originalDimensions,
    modificationsList,
    newModification,
    savePublicId,
    setModificationsList,
    setPublicId,
    saveDimensions,
    handleModification,
    applyModifications,
    saveFont,
    handleUndo,
    modificationsHistory,
    setNewModification,
    loading,
    setLoading,
    showOriginal,
    setShowOriginal
  }
}
