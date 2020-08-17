const SHOW_HOME = 'nav/SHOW_HOME' as const

export const showHome = () => ({
  type: SHOW_HOME
})

type NavAction = ReturnType<typeof showHome>

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
    default:
      return state
  }
}

export default Nav
