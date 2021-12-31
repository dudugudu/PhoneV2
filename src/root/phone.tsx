import './phone.css'
import { useSelector } from 'react-redux'
import { RootState }  from '../store/ducks/rootReducer'  
import { Icon,JContent } from '../component/tools/tools'
import Routers from './main/routes'

function RootPhone() {
  const BG = useSelector((state: RootState) => state.reducerStyle.bg_Main)
  
  return(<>
    <div className='S20 background' style={{ color: BG.color}}>
      <div className='S20-Fundo background' style={{backgroundColor:BG.backgroundColor, backgroundImage: BG.backgroundImage}}></div>
      <div className='S20-matte' style={{display:BG.Matte}}></div>
      <div className='S20-notify' ></div>
      <div className='S20-topbar'>
        <div className='topbar-content'>
          <div >Underground</div>
          <div style={{ display:'flex' }}>
            <Icon margin='-2px -4px 0 0 '  fontsize='14px' color={BG.color} >4g_mobiledata</Icon>
            <Icon margin='0 5px 0 0 '  fontsize='14px' color={BG.color} >signal_cellular_4_bar</Icon>
            <Icon margin='0 2px 0 0 '  fontsize='14px' color={BG.color} >battery_full</Icon>
          </div>
        </div>
      </div>
      <div className='S20-viwer'>
          <Routers/>
      </div>
      <div className='S20-rodape'> 
        <JContent positon='space-evenly' ac> 
          <Icon to='' fontsize='24px' color={BG.color} cursor>chevron_left</Icon>
          <Icon fontsize='19px' color={BG.color} cursor>check_box_outline_blank</Icon>
          <Icon fontsize='19px' color={BG.color} rotate='90' cursor>menu</Icon>
        </JContent>   
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