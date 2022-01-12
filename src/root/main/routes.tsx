

import { useDispatch,useSelector }from 'react-redux'
import { Display,Icon } from '../../component/tools/tools'
import { RootState }  from '../../store/ducks/rootReducer'  
import { KeyPad } from './app/keypad/keypad'
import { Home } from './home'

function Routers() {
  
  const dispatch = useDispatch()
  const APP = useSelector((state: RootState) => state.reducerStyle.open_app)
  const MAIN = useSelector((state: RootState) => state.reducerStyle.phone_main)

  

  function WhatPage(name:string){
    
    switch(name){
      case 'keypad': 
        return <KeyPad/>;
      case 'contatos':  
        return <></>; 
      case 'cauladora':  
        return <></>; 
      default: 
        return <></>
    }
    // eslint-disable-next-line no-unreachable
    return<></>
  }
  
    function CloseApp() {
      dispatch({ type:'UPDATED_PHONE_MAIN',  what_app:'home', color:'#fff', bg_app:'transparent'})
      dispatch({ type:'OPEN_APP',state:false})
    }

  return(<>
     <div className='Top-Bar-Main'>
          <Display width='50%'></Display>
          <Display width='50%'alignItem='center' justifyContent='right' padding='0 15px 0 0'>
            <Icon margin='0 2px '>signal_cellular_4_bar</Icon>
            <Icon margin='0 2px '>battery_full</Icon>
          </Display>
        </div>
        <div className='Viwer-Access-Full'>
          {APP && MAIN.what_app !== ''?
            WhatPage(MAIN.what_app)
          :
            <Home/>
          }
        </div>
        <div className='Rodape-Maind'>
          <Display width='100%' justifyContent='space-evenly' alignItem='center'>
            <Icon onClick={()=>{CloseApp()}} fontSize='26px' cursor>chevron_left</Icon>
            <Icon onClick={()=>{CloseApp()}}  fontSize='20px' cursor>crop_square</Icon>
            <Icon  fontSize='19px' rot='90' cursor>menu</Icon>
          </Display>
        </div>
  </>)
}
export default Routers