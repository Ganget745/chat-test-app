/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  items: []
}

const DIALOGS_SET_ITEMS = 'DIALOGS_SET_ITEMS'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DIALOGS_SET_ITEMS: {
      return {
        items: payload
      }
    }
    default: {
      return state
    }
  }
}
