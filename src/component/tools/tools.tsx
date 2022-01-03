import { useDispatch,useSelector }from 'react-redux'
import { RootState }  from '../../store/ducks/rootReducer'  
import { IconProps,DisplayProps,AppIconProps }   from './toolsType';

import './tools.css'

function Icon(props:IconProps):JSX.Element  {
  const BG_Main = useSelector((state: RootState) => state.reducerStyle.phone_main)
  const{children,onClick,outlined,cursor,color,fontSize,rot} = props
  return(<>
    <div  
      onClick={onClick} 
      style={{
        cursor:cursor?'pointer': 'auto' ,
        fontSize:fontSize?fontSize:'14px',
        color:color?color:BG_Main.color,
        transform: rot?`rotate(${rot}deg)`:'0'
      }} 
      className={outlined? 'material-icons-outlined':'material-icons'} 
    >{children}</div>
    </>)
}

function Display(props:DisplayProps) {
  const {children,onClick,flexDirection,height,width,alignItem,justifyContent,margin,padding,className,Bcolor}=props
  return(<>
  <div 
    style={{
      display:'flex',
      height:height?height:'100%',
      width:width?width:'100%',
      flexDirection:flexDirection?flexDirection:'row',
      alignItems:alignItem?alignItem:'stretch',
      justifyContent:justifyContent?justifyContent:'center',
      margin:margin?margin:'0',
      padding:padding?padding:'0',
      backgroundColor:Bcolor?Bcolor:'transparent'
    }} 
    className={className}
    onClick={onClick}  
  >{children}</div>
  </>)
}
function AppIcon(props:AppIconProps) {
  const {onClick,iconName}=props
  const dispatch = useDispatch() 
  function click_position(x:number,y:number) {  
      dispatch({ type:'UPDATED_CLICK_POSITION',x: x -(window.innerWidth - 340)  ,y:y - (window.innerHeight - 720)})  
  }
  return(<>
    <div onMouseDownCapture={(e)=>{click_position(e.nativeEvent.clientX,e.nativeEvent.clientY);}}  onClick={onClick} className='AppIcon background' style={{ backgroundImage: `url(./static/icons/${iconName}.png)`}}/>
  </>)
}




export  {
  Icon,
  Display,
  AppIcon
}