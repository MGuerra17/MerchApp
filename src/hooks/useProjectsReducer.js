import { useEffect, useReducer } from 'react'
import { projectsReducer, PROJECT_ACTION_TYPES } from '../reducers/projects'

export default function useProjectsReducer() {
  const initialProjectsState = { loading: true, fonts: [], projects: [] }
  const [state, dispatch] = useReducer(projectsReducer, initialProjectsState)

  useEffect(() => {
    if (window.localStorage.getItem('projectsData')) {
      const newProjectsState = JSON.parse(window.localStorage.getItem('projectsData'))
      updateState({ ...newProjectsState, loading: false })
    } else {
      updateState({ ...state, loading: false })
    }
  }, [])

  const updateState = newState => dispatch({
    type: PROJECT_ACTION_TYPES.UPDATE_STATE,
    payload: newState
  })

  const createNewProject = project => dispatch({
    type: PROJECT_ACTION_TYPES.CREATE_NEW_PROJECT,
    payload: project
  })

  const deleteCurrentProject = () => dispatch({
    type: PROJECT_ACTION_TYPES.DELETE_CURRENT_PROJECT
  })

  const setCurrentModifiedFile = newModifiedFileUrl => dispatch({
    type: PROJECT_ACTION_TYPES.SET_CURRENT_MODIFIED_FILE,
    payload: newModifiedFileUrl
  })

  const addModifications = modifications => dispatch({
    type: PROJECT_ACTION_TYPES.ADD_MODIFICATIONS,
    payload: modifications
  })

  const undoModification = () => dispatch({
    type: PROJECT_ACTION_TYPES.UNDO_MODIFICATION
  })

  const resetModifications = () => dispatch({
    type: PROJECT_ACTION_TYPES.RESET_MODIFICATIONS
  })

  const addFont = font => dispatch({
    type: PROJECT_ACTION_TYPES.ADD_FONT,
    payload: font
  })

  const deleteFont = fontName => dispatch({
    type: PROJECT_ACTION_TYPES.DELETE_FONT,
    payload: fontName
  })

  const saveProject = project => dispatch({
    type: PROJECT_ACTION_TYPES.SAVE_PROJECT,
    payload: project
  })

  const deleteProject = projectName => dispatch({
    type: PROJECT_ACTION_TYPES.DELETE_PROJECT,
    payload: projectName
  })

  return {
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
  }
}
