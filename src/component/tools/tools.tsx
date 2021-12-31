import { Link } from 'react-router-dom'
import { useDispatch }from 'react-redux'
import { useState,useEffect } from 'react';
import { IconProps,JContentProps,AppIconProps,ViweBoxProps,CicleNumberProps,CicleProps } from "./toolsType";
import './tools.css'

function Icon(props:IconProps):JSX.Element {
  const {children, fontsize, color, to, navigation, onclick, outlined, margin, rotate, cursor} = props;
  const dispatch = useDispatch()
  const [Verify, setVerify] = useState({to:'',navigation:''})

  useEffect(() => {
    if(to && navigation) {setVerify({to:to,navigation:navigation})}
    else{
      if(to){setVerify({to:to,navigation:''})}
      if(navigation){setVerify({to:'',navigation:navigation})}
    }
  }, [to,navigation])

  function UPDATED_NAVIGATION(nav:string) {
    dispatch({ type:'UPDATED_NAVIGATION',navigation:nav})
  }
 
  return(<>
  {Verify.to.length >=1?
      <Link 
        to={Verify.to} 
        onClick={()=>{UPDATED_NAVIGATION(Verify.navigation); if (onclick) onclick()}}
        style={{
          cursor: cursor ? 'pointer' : 'auto',
          transform: rotate ? `rotate(${rotate}deg)` : 'rotate(0deg)', 
          margin: margin ? margin : '0',
          fontSize: fontsize ? fontsize : '12px',
          color: color ? color : '#fff'
        }} 
        className={outlined?'material-icons-outlined':'material-icons'}
      >{children}</Link>
    :
      <div 
        onClick={onclick} 
        style={{
          cursor: cursor ? 'pointer' : 'auto',
          transform: rotate ? `rotate(${rotate}deg)` : 'rotate(0deg)',
          margin: margin ? margin : '0',
          fontSize: fontsize ? fontsize : '12px', 
          color: color ? color : '#fff'
        }} 
        className={outlined?'material-icons-outlined':'material-icons'}
      >{children}</div>
    }
  </>)
}
/**
 * 
 */

function JContent(props:JContentProps):JSX.Element {
    const {children,padding,widht,height,positon,Bcolor,ac,Fdirection,transitionDuration,overflou} =props;
  return(<>
    <div 
    style={{
      transitionDuration:transitionDuration?transitionDuration:'0',
      overflow: overflou? overflou:'hiden',
      padding:padding?padding:'0',
      width: widht ? widht: '100%', 
      backgroundColor: Bcolor? Bcolor: 'transparent',
      height:height ? height: '100%', 
      display: 'flex',
      alignItems:ac ? 'center' : 'stretch',
      justifyContent: positon ? positon : 'space-between',
      flexDirection: Fdirection ? Fdirection :'row'
    }}
  >{children}</div>
  
  </>)
}

/**
 * 
 */

function AppIcon(props:AppIconProps):JSX.Element {
  const {icon,widht,height,margin,to,navigation,onclick,cursor} = props;
  const dispatch = useDispatch()
  const [Verify, setVerify] = useState({to:'',navigation:''})

  useEffect(() => {
    if(to && navigation) {setVerify({to:to,navigation:navigation})}
    else{
      if(to){setVerify({to:to,navigation:''})}
      if(navigation){setVerify({to:'',navigation:navigation})}
    }
  }, [to,navigation])



  function UPDATED_NAVIGATION(nav:string) {
    dispatch({ type:'UPDATED_NAVIGATION',navigation:nav})
  }
 
  return(<>
      {Verify.to.length >=1?
      <Link 
        to={Verify.to} 
        onClick={()=>{UPDATED_NAVIGATION(Verify.navigation); if (onclick) onclick()}} 
        style={{ 
          backgroundImage: `url(/static/icons/${icon}.png)`, 
          margin: margin ? margin:'0',  
          height: height ? height:'50px', 
          width: widht ? widht:'50px',
          cursor: cursor ? 'pointer' : 'auto' 
        }} 
        className='background'
      ></Link>
    :
      <div 
        onClick={onclick} 
        style={{ 
          backgroundImage: `url(/static/icons/${icon}.png)`,
          margin: margin ? margin : '0',
          height: height ? height : '50px',
          width: widht ? widht : '50px' ,
          cursor: cursor ? 'pointer' : 'auto' 
        }} 
        className='background'
      ></div>
    }
  
  </>)
}
/**
 * 
 */


function ViweBox(props:ViweBoxProps) {
  const {children,width,height,display,Bcolor,padding,overflou,transitionDuration} = props
  return(<>
   <div 
      style={{
        transitionDuration:transitionDuration?transitionDuration:'0',
        overflow: overflou? overflou:'hiden',
        padding: padding ? padding :'',
        display:display?display:'block',
        width:width?width:'100%',
        height:height?height:'500px',
        backgroundColor:Bcolor?Bcolor:'transparent' 
      }}
      >{children}</div>
  
  </>)
}
/**
 * 
 */


function CicleNumber(props:CicleNumberProps):JSX.Element {
  const {children,d,Bcolor,fontSize,span,onclick} = props;
  return(<>
     <div 
      className='Hover-CicleNumber'
      style={{
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'50%',
        width:d?d:'30px',
        height:d?d:'30px',
        backgroundColor:Bcolor?Bcolor:'transparent',
        flexDirection:'column',
        fontSize:fontSize?fontSize:'22px',
        fontWeight: '600',
      }}
      onClick={onclick}
    > 
      <p style={{marginTop:'-3px'}}>{children}</p>  
      <span style={{height:'18px',fontSize:'10px',marginTop:'-12px',color:'#858585'}}>{span}</span> 
    </div>
  </>)
}
/**
 * 
 */



function Cicle(props:CicleProps):JSX.Element {
  const {children,d,Bcolor} = props
  return(<>
    <div
      style={{
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'50%',
        width:d?d:'30px',
        height:d?d:'30px',
        backgroundColor:Bcolor?Bcolor:'transparent',
      }}
    >{children}</div>
  </>)
}

export {Icon,JContent,AppIcon,ViweBox,CicleNumber,Cicle}