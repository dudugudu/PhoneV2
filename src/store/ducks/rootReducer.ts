import { combineReducers } from 'redux'



import  Style  from './style'

export const rootReducer = combineReducers({
  reducerStyle: Style,
})


export type RootState = ReturnType<typeof rootReducer>