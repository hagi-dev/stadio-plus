import React from 'react';

import './style.scss';
import Content from './Content/Content';
import ImgBanner from './ImgBanner/ImgBanner';

const MarketBanner = () => {
  return (
    <div className='marketBanner__container'>
      <div className='MarketBanner'>
        <Content/>
        <ImgBanner/>
    </div>
    </div>
  )
}

export default MarketBanner;