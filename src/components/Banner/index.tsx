import React from 'react';

import './style.scss';
import Content from './Content/Content';
import ImgMarketBanner from './ImgBanner/ImgBanner';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Banner = () => {
  const [light, setLight] = useLocalStorage('light','');
  return (
    <div className={`banner ${light? "true":""}`}>
        <Content/>
        <ImgMarketBanner/>
    </div>
  )
}

export default Banner