import './home.css'
import { AppIcon } from '../../component/tools/tools'
import { useEffect } from 'react'
import { useDispatch }from 'react-redux'
import { useTranslation } from 'react-i18next'



function Home() {
  const { t:transletor } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type:'UPDATED_BACKGROUND',Bcolor:'transparent',Bimg:'url(/static/media/walpaper.jpg)',Matte:'none',color:'#fff'})
  }, [dispatch])

  return(<>
  <div className="S20-Home">
      <div className='Home-Topviwer'>
      {transletor('teste')}
      </div>
      <div className='Home-Rodape'>
        <AppIcon navigation='/' to='/phone' icon='phone' cursor/>
        <AppIcon navigation='/' to='/contact' icon='contacts' cursor/>
        <AppIcon navigation='/' to='calculator' icon='calculator' cursor/>
        <AppIcon navigation='/' to='apps' icon='apps' cursor/>
      </div>

    </div>
  </>)
}
export default Home