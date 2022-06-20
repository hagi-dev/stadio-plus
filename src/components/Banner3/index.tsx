import React from 'react';

import './style.scss';
import Content from './Content/Content';
import ImgMarketBanner from './ImgBanner/ImgBanner';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Banner = () => {
  const [light, setLight] = useLocalStorage('light','');
  return (
    <div className={`banner3 ${light ? "true": ""}`}>
      <ImgMarketBanner/>
      <Content/>
    </div>
  )
}

export default Banner