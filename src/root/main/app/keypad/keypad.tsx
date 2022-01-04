import{ AnimetedApp,Icon,BottomNavigation } from '../../../../component/tools/tools'
import './KeyPad.css'
function KeyPad() {
  return(<>
    <AnimetedApp>
      <div className='box-keypad'>
        <div className='keypad-topbar'>
          <p style={{ marginLeft:'10px' }}>Telefone</p>
          <Icon  fontSize='20x' color='black' margin='0 8px 0 0' cursor>add</Icon>
        </div>
        <div className='keypad-contatos'>
          
        </div>
        <div className='keypad-numero-discado'>
          154-152-154
        </div>
        <div className='keypad-dialpad'>
          <div className='dialpad-line' >
            <NumberPress >1</NumberPress>
            <NumberPress span='ABC' >2</NumberPress>
            <NumberPress span='DEF'>3</NumberPress>
          </div>
          <div className='dialpad-line' >
            <NumberPress span='GHI'>4</NumberPress>
            <NumberPress span='JKL'>5</NumberPress>
            <NumberPress span='MNO'>6</NumberPress>
          </div>
          <div className='dialpad-line' >
            <NumberPress span='PQRS'>7</NumberPress>
            <NumberPress span='TUV'>8</NumberPress>
            <NumberPress span='WXTZ'>9</NumberPress>
          </div>
          <div className='dialpad-line' >
            <NumberPress>*</NumberPress>
            <NumberPress span='+'>0</NumberPress>
            <NumberPress>#</NumberPress>
          </div>
          <div className='dialpad-line-call' >
            <FakeNumber>
              <Icon  fontSize='22px' color='black' cursor >duo</Icon>
            </FakeNumber>
            <FakeNumber Bcolor='#15b76d'>
              <Icon  fontSize='32px' color='#fff'>call</Icon>
            </FakeNumber>
            <FakeNumber>
              <Icon  fontSize='22px' color='black' cursor>backspace</Icon>
            </FakeNumber>
          </div>
        </div>
        <div className='keypad-rodape'>
            <BottomNavigation width='60px'>Teclado</BottomNavigation>
            <BottomNavigation width='60px'>Recentes</BottomNavigation>
            <BottomNavigation width='60px'>Contatos</BottomNavigation>
        </div>
      </div>
    </AnimetedApp>
  </>)
}

interface NumberPressProp{
  children?:JSX.Element | string,
  span?:JSX.Element |string,
  Bcolor?:string
}

function NumberPress(props:NumberPressProp) {
  const { children,span } = props
  return(<>
    <div className='NumberPress'>
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


export  {KeyPad}