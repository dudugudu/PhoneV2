
interface NumberPressProp{
  children?:JSX.Element | string,
  span?:JSX.Element |string,
  Bcolor?:string,
  onClick?:any,
}

function NumberPress(props:NumberPressProp) {
  const { children,span,onClick } = props
  return(<>
    <div onClick={onClick} className='NumberPress'>
      <p>{children}</p>
      <span>{span}</span>
    </div>
  </>)
}
//
function FakeNumber(props:NumberPressProp) {
  const { children,Bcolor } = props
  return(<>
    <div className='FakeNumber' style={{ backgroundColor:Bcolor?Bcolor:'transparent' }}>
      {children}
      
    </div>
  </>)
}
function Contatos() {
  return(<>
    <div className='Card-Contatos' >
      <div className='Perfil'></div>
      <div className='Name' >Eduardo</div>
      <div className='Phone'>999-999-999</div>
    </div>
  </>)
}
 export{NumberPress,FakeNumber,Contatos}