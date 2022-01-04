import { AnyAction, Reducer } from 'redux'
import { styleState} from './types'
const INITIAL_STATE: styleState ={
    navigation:'/',
    click_position:{
      x: 0,
      y: 0,
    },
    phone_main:{
      what_app:'phone',
      color:'#ffffff',
      bg_app:'transparent'
    },
    open_app: false,
    style_apps:[
      { appName:'keypad',
        style:[
          {typestyle:'light',bg_color:'#ffffff',color:'black'}
        ]
      },
    
    ]
   
}



const Style: Reducer<styleState> = ( state = INITIAL_STATE , action:AnyAction)=>{
  switch (action.type) {
    case 'UPDATED_CLICK_POSITION':
      return { ...state , click_position:{x: action.x, y: action.y}};
    case 'OPEN_APP':
      return { ...state , open_app:action.state};
    case 'UPDATED_NAVIGATION':
      return { ...state , navigation:action.navigation}
    case 'UPDATED_PHONE_MAIN':
      return { ...state , phone_main:{what_app:action.what_app,color:action.color,bg_app:action.bg_app}}

    default:
      return state;
  }

}


export default Style