const SHOW_HOME = 'nav/SHOW_HOME' as const
const SHOW_AUTH = 'nav/SHOW_AUTH' as const
const SET_SETUP_END = 'nav/SET_SETUP_END' as const

export const showHome = () => ({
  type: SHOW_HOME
})
export const showAuth = () => ({
  type: SHOW_AUTH
})
export const setSetupEnd = (status: boolean) => ({
  type: SET_SETUP_END,
  payload: status
})

type NavAction = ReturnType<
  typeof showHome | typeof showAuth | typeof setSetupEnd
>

type NavState = {
  showHome: boolean
  setupEnd: boolean
}

const initialState: NavState = {
  showHome: false,
  setupEnd: false
}

const Nav = (state: NavState = initialState, action: NavAction): NavState => {
  switch (action.type) {
    case SHOW_HOME:
      return {
        ...state,
        showHome: true
      }
    case SHOW_AUTH:
      return {
        ...state,
        showHome: false
      }
    case SET_SETUP_END:
      return {
        ...state,
        setupEnd: action.payload
      }
    default:
      return state
  }
}

export default Nav
