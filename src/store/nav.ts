const SHOW_HOME = 'nav/SHOW_HOME' as const
const SHOW_AUTH = 'nav/SHOW_AUTH' as const

export const showHome = () => ({
  type: SHOW_HOME
})
export const showAuth = () => ({
  type: SHOW_AUTH
})

type NavAction = ReturnType<typeof showHome | typeof showAuth>

type NavState = {
  showHome: boolean
}

const initialState: NavState = {
  showHome: false
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
    default:
      return state
  }
}

export default Nav
