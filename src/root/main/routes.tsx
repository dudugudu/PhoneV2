

import { useDispatch,useSelector }from 'react-redux'
import { Display,Icon,AppIcon } from '../../component/tools/tools'

import { RootState }  from '../../store/ducks/rootReducer'  
import {KeyPad} from './app/keypad/keypad'

function Routers() {
  
  const dispatch = useDispatch()
  const APP = useSelector((state: RootState) => state.reducerStyle.open_app)
  const MAIN = useSelector((state: RootState) => state.reducerStyle.phone_main)
  const APPSTYLE = useSelector((state: RootState) => state.reducerStyle.style_apps)

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
  function OpenApp(name:string) {
    APPSTYLE.map((obj)=>{
      if (obj.appName === name) {
        obj.style.map((theme)=>{
          if (theme.typestyle === 'light') {
            dispatch({ type:'UPDATED_PHONE_MAIN',  what_app:name, color:theme.color, bg_app:theme.bg_color})
            dispatch({ type:'OPEN_APP',state:true})
          }
          return null
        })
      }
      return null
    })
  }

  return(<>

     
     <div className='Top-Bar-Main'>
          <Display width='50%'></Display>
          <Display width='50%'alignItem='center'>
            <Icon>battery_full</Icon>
          </Display>
        </div>
        <div className='Viwer-Access-Full'>
          {APP && MAIN.what_app !== ''?
            WhatPage(MAIN.what_app)
          :
            <>
              <Display justifyContent='space-evenly'>
                <AppIcon onClick={()=>{OpenApp('keypad')}} iconName='phone'/>
                <AppIcon onClick={()=>{OpenApp('call')}} iconName='calendar'/>
                <AppIcon iconName='camera'/>
                <AppIcon iconName='apps'/>
              </Display>
            </>
          }
          
        </div>
        {APP&&
          <div className='Rodape-Maind'>
            <Display width='100%' justifyContent='space-evenly' alignItem='center'>
              <Icon onClick={()=>{ dispatch({ type:'OPEN_APP',state:false})}} fontSize='26px' cursor>chevron_left</Icon>
              <Icon onClick={()=>{ dispatch({ type:'OPEN_APP',state:false})}}  fontSize='20px' cursor>crop_square</Icon>
              <Icon  fontSize='19px' rot='90' cursor>menu</Icon>
            </Display>
          </div>
        }



  </>)
}
export default Routers