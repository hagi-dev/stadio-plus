import React from 'react';

import './ImgBanner.scss';
import imgBanner from '../../../assets/images/MarketBanner.png';

const ImgBanner = () => {
  return (
    <div className='imgBanner'>
        <img src={imgBanner}/>
    </div>
  )
}

export default ImgBanner