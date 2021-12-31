import { Reducer } from 'redux'
import { styleState, styleTypes} from './types'
const INITIAL_STATE: styleState ={
     bg_Main:{
       backgroundColor:'transparent',
       backgroundImage:'url(/static/media/walpaper.jpg)',
       Matte:'none',
       color:'#fff'
     },
     trans_Keypad:{
       duration:'0s',
       heightKeypad:'410px',
       heightSerch:'140px',
       heightOverflow:'105px'
     },
     keypad_Rodape:{
        display:'none',
        position:'space-evenly',
        active:'teclado'
     },
     navigation:'/'
}



const Style: Reducer<styleState> = ( state = INITIAL_STATE, action)=>{

  switch (action.type) {
    case styleTypes.UPDATED_BACKGROUND:
      return { ...state , background:{backgroundColor: action.Bcolor, backgroundImage: action.Bimg, Matte: action.Matte, color: action.color}};
    default:
      return state;
  }

}


export default Style