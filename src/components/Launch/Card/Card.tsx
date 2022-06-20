import React from 'react';

import './style.scss';
import Button from '../../Button/index'

type props = {
    url:string,
    title:string,
    priceB:string,
    price:string,
    baseColor:string,
    icon: boolean
    version:string
    text:string
}

const Card = (props:props) => {
    const {url,title,priceB,price, baseColor, icon, version ,text} = props;
  return (
    <div className='card'>
        <svg id ='cardBackground' width="346" height="358" viewBox="0 0 346 358" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g  >
            <path d="M116 0H321C334.807 0 346 11.1929 346 25V274L235.5 358H25.5C11.6929 358 0.5 346.807 0.5 333V99L116 0Z" fill={baseColor}/>
            </g>
        </svg>
        <div className='card__img'>
            <img src={url}/>
        </div>
        <div className='card__text'>
            <h3>{title.toUpperCase()}</h3>
            <h4>{priceB.toUpperCase()}</h4>
            <h5>{price.toUpperCase()}</h5>
        </div>
        <div className='card__button'>
            <Button text={text} version={version} widthButton="190px"/>
        </div>
    </div>
  )
}

export default Card