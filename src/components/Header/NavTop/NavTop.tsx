import React from 'react';

import './NavTop.scss';
import Button from '../../Button/index';
import Spinner from './Spinner/Spinner';
import Input from '../Input/input';



const NavTop = () => {
  const [stateMenu, setStateMenu] = React.useState(false);
  const handleclick =()=>{
    setStateMenu(!stateMenu);
  }
  return (
    <div className='navTop'>
        <nav className={`${stateMenu ? "activeNav": ""}`}>
            <ul>
              <li><Input/></li>
                <li className='navTop__item'><a href='#collection'>MIS COLECCIONES</a></li>
                <li className='navTop__item'><a href='#'>LOGIN</a></li>
                <li><Button text = {"REGISTRARSE"} version ={"one"} widthButton="190px"/></li>
                <li><Spinner/></li>
            </ul>
        </nav>
        <svg onClick={handleclick} version="1.1" className="menu" 
          viewBox="0 0 297 297">
        <g>
          <g>
            <g>
              <path className={`one ${stateMenu ? "active":""}`} d="M280.214,39.211H16.786C7.531,39.211,0,46.742,0,55.997v24.335c0,9.256,7.531,16.787,16.786,16.787h263.428
                c9.255,0,16.786-7.531,16.786-16.787V55.997C297,46.742,289.469,39.211,280.214,39.211z"/>
              <path className={`two ${stateMenu ? "active":""}`} d="M280.214,119.546H16.786C7.531,119.546,0,127.077,0,136.332v24.336c0,9.255,7.531,16.786,16.786,16.786h263.428
                c9.255,0,16.786-7.531,16.786-16.786v-24.336C297,127.077,289.469,119.546,280.214,119.546z"/>
              <path className={`three ${stateMenu ? "active":""}`} d="M280.214,199.881H16.786C7.531,199.881,0,207.411,0,216.668v24.335c0,9.255,7.531,16.786,16.786,16.786h263.428
                c9.255,0,16.786-7.531,16.786-16.786v-24.335C297,207.411,289.469,199.881,280.214,199.881z"/>
            </g>
          </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>
    </div>
  )
}

export default NavTop