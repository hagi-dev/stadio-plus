import React from 'react';

import './style.scss';
import logo1 from '../../assets/images/logos/Logo-1.png';
import logo2 from '../../assets/images/logos/Logo-2.png';
import logo3 from '../../assets/images/logos/Logo-3.png';
import logo4 from '../../assets/images/logos/Logo-4.png';
import logo5 from '../../assets/images/logos/Logo.png';
import logo11 from '../../assets/images/logos/Group 73.png';
import logo22 from '../../assets/images/logos/Group 74.png';
import logo33 from '../../assets/images/logos/Group 75.png';
import logo44 from '../../assets/images/logos/Group 76.png';
import logo55 from '../../assets/images/logos/Group 77.png';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Partners = () => {
  const [light, setLight]= useLocalStorage("light","");
  return (
    <div className={`partners ${light ? "true" : ""}`}>
        <div className='partners__title'>
            <h3>DESCUBRE NUESTROS</h3>
            <h1>PARTNERS</h1>
        </div>
        <div className='partners__logos'>
            <img src={light?logo11:logo5}/>
            <img src={light?logo22:logo1}/>
            <img src={light?logo33:logo2}/>
            <img src={light?logo44:logo3}/>
            <img src={light?logo55:logo4}/>
        </div>
    </div>
  )
}

export default Partners