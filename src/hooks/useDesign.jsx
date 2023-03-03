import { useContext } from 'react'
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
    setModifiedFile,
    setPublicId,
    setModificationsList,
    setFonts
  } = useContext(DesignContext)

  const saveOriginalFile = (data) => {
    window.localStorage.setItem('originalFile', data)
    setOriginalFile(data)
  }

  const savePublicId = (data) => {
    window.localStorage.setItem('publicId', data)
    setPublicId(data)
  }

  const saveFont = (fontName) => {
    if (fonts.includes(fontName)) return

    const newFontsList = [fontName, ...fonts]

    window.localStorage.setItem('fonts', newFontsList.toString())
    setFonts(newFontsList)
  }

  const handleModification = ({ name, value }) => {
    setModificationsList({ ...modificationsList, [name]: value })
  }

  const applyModifications = () => {
    const newModifiedFile = imageModifications.createImage(publicId)

    if (Object.keys(modificationsList).length < 1) return

    for (const modification in modificationsList) {
      const modificationFunction = imageModifications[modification]
      modificationFunction(newModifiedFile, modificationsList[modification])
    }
    window.localStorage.setItem('modificationsList', JSON.stringify(modificationsList))
    console.log(newModifiedFile.toURL())
  }

  return {
    originalFile,
    fonts,
    saveOriginalFile,
    modifiedFile,
    setModifiedFile,
    publicId,
    modificationsList,
    savePublicId,
    setModificationsList,
    handleModification,
    applyModifications,
    saveFont
  }
}
