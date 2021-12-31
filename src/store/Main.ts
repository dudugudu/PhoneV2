import { createStore, Store } from 'redux'
import { styleState } from './ducks/style/types'

import  {rootReducer}  from './ducks/rootReducer'

export interface AplicationState{
  style: styleState
}

const store: Store<AplicationState> = createStore(rootReducer)



export default store