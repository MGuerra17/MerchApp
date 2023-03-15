export const PROJECT_ACTION_TYPES = {
  UPDATE_STATE: 'UPDATE_STATE',
  CREATE_NEW_PROJECT: 'CREATE_NEW_PROJECT',
  DELETE_CURRENT_PROJECT: 'DELETE_CURRENT_PROJECT',
  SET_CURRENT_MODIFIED_FILE: 'SET_CURRENT_MODIFIED_FILE',
  ADD_MODIFICATIONS: 'ADD_MODIFICATIONS',
  UNDO_MODIFICATION: 'UNDO_MODIFICATION',
  RESET_MODIFICATIONS: 'RESET_MODIFICATIONS',
  ADD_FONT: 'ADD_FONT',
  DELETE_FONT: 'DELETE_FONT',
  SAVE_PROJECT: 'SAVE_PROJECT',
  DELETE_PROJECT: 'DELETE_PROJECT'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('projectsData', JSON.stringify(state))
}

const STATE_MODIFIERS = {
  [PROJECT_ACTION_TYPES.UPDATE_STATE]: (state, action) => {
    return action.payload
  },
  [PROJECT_ACTION_TYPES.CREATE_NEW_PROJECT]: (state, action) => {
    return { ...state, currentProject: action.payload }
  },
  [PROJECT_ACTION_TYPES.DELETE_CURRENT_PROJECT]: (state, action) => {
    const newState = { ...state }
    delete newState.currentProject
    return newState
  },
  [PROJECT_ACTION_TYPES.SET_CURRENT_MODIFIED_FILE]: (state, action) => {
    return { ...state, currentProject: { ...state.currentProject, modifiedImageURL: action.payload } }
  },
  [PROJECT_ACTION_TYPES.ADD_MODIFICATIONS]: (state, action) => {
    const { modifications } = state.currentProject
    const newModificationsList = [...modifications, ...action.payload]
    return { ...state, currentProject: { ...state.currentProject, modifications: newModificationsList } }
  },
  [PROJECT_ACTION_TYPES.UNDO_MODIFICATION]: (state, action) => {
    const { modifications } = state.currentProject
    const newModificationsList = [...modifications]
    newModificationsList.pop()
    return { ...state, currentProject: { ...state.currentProject, modifications: newModificationsList } }
  },
  [PROJECT_ACTION_TYPES.RESET_MODIFICATIONS]: (state, action) => {
    return { ...state, currentProject: { ...state.currentProject, modifications: [] } }
  },
  [PROJECT_ACTION_TYPES.ADD_FONT]: (state, action) => {
    const { fonts } = state
    const newFontsList = [...fonts, action.payload]
    return { ...state, fonts: newFontsList }
  },
  [PROJECT_ACTION_TYPES.DELETE_FONT]: (state, action) => {
    const { fonts } = state
    const newFontsList = fonts.filter(font => font.name !== action.payload)
    return { ...state, fonts: newFontsList }
  },
  [PROJECT_ACTION_TYPES.SAVE_PROJECT]: (state, action) => {
    const { projects } = state
    const newProjectsList = [...projects, action.payload]
    return { ...state, projects: newProjectsList }
  },
  [PROJECT_ACTION_TYPES.DELETE_PROJECT]: (state, action) => {
    const { projects } = state
    const newProjectsList = projects.filter(project => project.name !== action.payload)
    return { ...state, projects: newProjectsList }
  }
}

export const projectsReducer = (state, action) => {
  const { type: actionType } = action
  const stateModifier = STATE_MODIFIERS[actionType]
  const newState = stateModifier(state, action)
  updateLocalStorage(newState)
  return newState
}
