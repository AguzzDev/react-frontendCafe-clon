import { types } from '../types/Types'

const initialState = {
  modalOpen: false,
  msgError: null
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true
      }
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false
      }
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload
      }
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null
      }
    default:
      return state
  }
}
