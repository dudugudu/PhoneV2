import './phone.css'
import { useSelector } from 'react-redux'
import { RootState }  from '../store/ducks/rootReducer'  
import Routers from './main/routes'
import { useEffect } from 'react'
import { useDispatch }from 'react-redux'



function RootPhone() {
  const dispatch = useDispatch()
  const BG_Main = useSelector((state: RootState) => state.reducerStyle.phone_main)
  const APP = useSelector((state: RootState) => state.reducerStyle.open_app)
  const PS = useSelector((state: RootState) => state.reducerStyle.click_position)
   
  
  return(<>
    <div className='S20 background' 
      style={{ 
        color: BG_Main.color
      }}>
      <div className='Background-Main background' style={{ backgroundImage:'url(/static/media/walpaper.jpg)' }}></div>
      <div className='Background-App'
        style={{ 
          backgroundColor:BG_Main.bg_app,
          width:APP?'':'0',
          height:APP?'':'0',
          animation:APP?'open .4s  1':'close 400ms  1',
          transitionDuration:'.3s',
          color: BG_Main.color
      }}
      ></div>
      <style>{`
        @keyframes open {
          0% { 
            left:${PS.x}px;
            top:${PS.y}px;
            width:10px;
            height:10px;
          }
          100% { 
            left:0px;
            top:0px;
            width:305.5px;
            height:669px;
          }
        }
        @keyframes close {
          0% { 
            left:0px;
            top:0px;
            width:305.5px;
            height:669px;
          }
          70%{
            opacity: 1
            
          }
          85%{
            width:10px;
            height:10px;
          }
          100% { 
            left:${PS.x}px;
            top:${PS.y}px;
            opacity: 0.2
          }
        }
      `}</style>
      <div className='Background-All-App' ></div>
      <div className='Background-Viwer-Access'>
        <Routers/>
      </div>
    </div>
  </>)
}

export{
  RootPhone
}





//import { useSelector } from 'react-redux'
//import { RootState }  from './store/ducks/rootReducer'  
//const Background = useSelector((state: RootState) => state.reducerStyle.bg_Main)
//console.log(Background);