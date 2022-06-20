import React from 'react';

import './style.scss';
import Content from './Content/Content';
import ImgBanner from './ImgBanner/ImgBanner';
import background from '../../assets/images/bannerToken/Background.png';

const TokenBanner = () => {
  return (
    <div className="continer">
      <div className='TokenBanner__container'>
      <div className='TokenBanner' style={{backgroundImage:`url(${background})`}}>
        <Content/>
        <ImgBanner/>
    </div>
    </div>
    </div>
  )
}

export default TokenBanner;