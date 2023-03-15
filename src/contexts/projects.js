import { createContext, useContext } from 'react'
import useProjectsReducer from '../hooks/useProjectsReducer'

export const ProjectsContext = createContext()

export const useProjectsContext = () => useContext(ProjectsContext)

export const ProjectsProvider = ({ children }) => {
  const {
    state,
    createNewProject,
    deleteCurrentProject,
    setCurrentModifiedFile,
    addModifications,
    undoModification,
    resetModifications,
    addFont,
    deleteFont,
    saveProject,
    deleteProject
  } = useProjectsReducer()

  return (
    <ProjectsContext.Provider
      value={{
        state,
        createNewProject,
        deleteCurrentProject,
        setCurrentModifiedFile,
        addModifications,
        undoModification,
        resetModifications,
        addFont,
        deleteFont,
        saveProject,
        deleteProject
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
