import React from 'react';

import './style.scss'
import Cards from '../Launch/Cards/Cards';
import Button from '../Button/index';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Collection = () => {
  const [light, setLight] = useLocalStorage('light','');
  return (
    <div className={`collection ${light ? "true":""}`} id="collection">
        <h2>COLECCIONES</h2>
        <Cards version='two' text={'EXPLORAR'}/>
        <div className='collection__button'>
          <Button text='TOKEN' version='three' widthButton="190px" />
          <Button text='IR AL BLOG' version='three' widthButton="190px" />
        </div>
    </div>
  )
}

export default Collection