import { useContext, useState } from 'react'
import { DesignContext } from '@/contexts/design'
import imageModifications from '@/helpers/imageModifications'

export default function useDesign() {
  const {
    projectName,
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
    designList,
    setProjectName,
    setFonts,
    setOriginalDimensions,
    modificationsHistory,
    setModificationsHistory,
    setNewModification,
    setDesignList,
    loading,
    setLoading,
    cleanContext
  } = useContext(DesignContext)

  const [showOriginal, setShowOriginal] = useState(false)

  const saveProjectName = (name) => {
    window.localStorage.setItem('projectName', name)
    setProjectName(name)
  }

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

  const applyModifications = async (modifications) => {
    console.log(modifications)
    setLoading(true)
    if (!modifications) {
      setLoading(false)
      return
    }
    const newModifiedFile = imageModifications.createImage(window.localStorage.getItem('publicId'))
    if (Object.keys(modifications).length > 0) {
      if (Object.keys(modifications).includes('removeBg')) {
        console.log('removeBg')
        const modificationFunction = imageModifications.removeBg
        modificationFunction(newModifiedFile, true)
      }
      for (const modification in modifications) {
        if (modification === 'removeBg') break
        const modificationFunction = imageModifications[modification]
        modificationFunction(newModifiedFile, modifications[modification])
      }
    }
    window.localStorage.setItem('modificationsList', JSON.stringify(modifications))
    console.log(newModifiedFile?.toURL())
    setModifiedFile(newModifiedFile?.toURL())
    setLoading(false)
  }

  const saveDesign = ({ name, publicId }) => {
    const newDesignList = [...designList]
    const projectIndex = newDesignList.findIndex(x => x.name === name)
    if (projectIndex !== -1) {
      newDesignList[projectIndex] = { name, publicId }
    } else {
      newDesignList.push({ name, publicId })
    }
    console.log(newDesignList)
    window.localStorage.setItem('designList', JSON.stringify(newDesignList))
    setDesignList(newDesignList)
  }

  return {
    projectName,
    originalFile,
    fonts,
    saveOriginalFile,
    modifiedFile,
    setModifiedFile,
    publicId,
    originalDimensions,
    modificationsList,
    newModification,
    setProjectName,
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
    setShowOriginal,
    saveDesign,
    saveProjectName,
    designList,
    cleanContext
  }
}
