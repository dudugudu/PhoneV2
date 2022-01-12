import { NumberPress,FakeNumber } from './tools'
import{ Icon } from '../../../../../component/tools/tools'
import { useState } from 'react'

function Discagem() {
  const [Discagem, setDiscagem] = useState('')
  return(<>
    <div className='keypad-numero-discado'>
      {Discagem}
    </div>
    <div className='keypad-dialpad'>
      <div className='dialpad-line' >
        <NumberPress onClick={()=>{setDiscagem(Discagem + '1')}}>1</NumberPress>
        <NumberPress onClick={()=>{setDiscagem(Discagem + '2')}} span='ABC' >2</NumberPress>
        <NumberPress onClick={()=>{setDiscagem(Discagem + '3')}} span='DEF'>3</NumberPress>
      </div>
      <div className='dialpad-line' >
        <NumberPress onClick={()=>{setDiscagem(Discagem + '4')}} span='GHI'>4</NumberPress>
        <NumberPress onClick={()=>{setDiscagem(Discagem + '5')}} span='JKL'>5</NumberPress>
        <NumberPress onClick={()=>{setDiscagem(Discagem + '6')}} span='MNO'>6</NumberPress>
      </div>
      <div className='dialpad-line' >
        <NumberPress onClick={()=>{setDiscagem(Discagem + '7')}} span='PQRS'>7</NumberPress>
        <NumberPress onClick={()=>{setDiscagem(Discagem + '8')}} span='TUV'>8</NumberPress>
        <NumberPress onClick={()=>{setDiscagem(Discagem + '9')}} span='WXTZ'>9</NumberPress>
      </div>
      <div className='dialpad-line' >
        <NumberPress onClick={()=>{setDiscagem(Discagem + '*')}}>*</NumberPress>
        <NumberPress onClick={()=>{setDiscagem(Discagem + '0')}} span='+'>0</NumberPress>
        <NumberPress onClick={()=>{setDiscagem(Discagem + '#')}}>#</NumberPress>
      </div>
      <div className='dialpad-line-call' >
        <FakeNumber>
          <Icon   fontSize='22px' color='#0072de' cursor >duo</Icon>
        </FakeNumber>
        <FakeNumber Bcolor='#15b76d'>
          <Icon  fontSize='32px' color='#fff'>call</Icon>
        </FakeNumber>
        <FakeNumber>
          <Icon onClick={()=>setDiscagem(Discagem.substr(0, Discagem.length - 1))}  fontSize='20px' color='#363636' cursor>backspace</Icon>
        </FakeNumber>
      </div>
    </div>
  </>)
}


export {
  Discagem
}