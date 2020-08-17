import { combineReducers } from 'redux'
import nav from './nav'

const rootReducer = combineReducers({
  nav
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
