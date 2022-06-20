import React from 'react';

import logo from '../../assets/images/LOGO.png';
import logo2 from '../../assets/images/LOGO2.png';
import NavTop from './NavTop/NavTop';
import NavBottom from './NavBottom/NavBottom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './style.scss';

const Header = () => {
  const [ light, setLight] = useLocalStorage('light','');
  const [state,setState] = React.useState('');
  React.useEffect(()=>{
    let scrollNumber= window.scrollY;
    const actionScroll: EventListener = (event: Event)=>{
      if(scrollNumber > window.scrollY){
        console.log('entra if');
        setState('active');
        scrollNumber=window.scrollY;
      }else{
        console.log('entra else');
        setState('remove');
        scrollNumber=window.scrollY;
      }
      if(window.scrollY ===0){
        setState('');
      }
    }
    const win: Window = window;   // <-- DOM-Window, extends DOM-EventTarget
    win.addEventListener('scroll',actionScroll);

    return () => win.removeEventListener('scroll',actionScroll);
    
  },[])

  return (
    <div className={`header ${light ? "true": ""} ${state}`}>
      <div className={`header__top`}>
        <div className='header__logo'>
          <img src={light ? logo2 : logo}/>
        </div>
        <NavTop/>
      </div>
      <NavBottom state={state}/>
    </div>
  )
}

export default Header