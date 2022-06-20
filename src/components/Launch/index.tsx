import React from 'react';

import './style.scss'
import Cards from './Cards/Cards';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Launch = () => {
  const [light, setLight] = useLocalStorage('light','');
  return (
    <div className={`launch ${light ? "true": ""}`}>
        <p>DESCUBRE NUESTROS</p>
        <h1>NUEVOS LANZEMINETOS</h1>
        <h2>OBRAS DESTACADAS</h2>
        <Cards version={'one'} text={'COMPRAR'}/>
    </div>
  )
}

export default Launch