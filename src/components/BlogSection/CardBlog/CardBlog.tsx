import React from 'react';

import './style.scss';

type props = {
    url: string,
    title: string,
    release: string,
    description: string
}

const CardBlog = (props:props) => {
    const {url, title, release, description } = props;
  return (
    <div className='cardBlog'>
        <svg id ='cardBlogBackground' width="346" height="358" viewBox="0 0 346 358" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path d="M116 0H321C334.807 0 346 11.1929 346 25V274L235.5 358H25.5C11.6929 358 0.5 346.807 0.5 333V99L116 0Z"/>
            </g>
        </svg>
        <div className='cardBlog__img'>
            <button className='iconButton'>
                <div className='iconButton__content'>
                    <svg id='arrowCardIcon' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 1C18 0.447716 17.5523 2.86857e-07 17 3.39762e-08L8 8.34766e-07C7.44771 4.97592e-07 7 0.447716 7 1C7 1.55229 7.44772 2 8 2L16 2L16 10C16 10.5523 16.4477 11 17 11C17.5523 11 18 10.5523 18 10L18 1ZM1.70711 17.7071L17.7071 1.70711L16.2929 0.292894L0.292893 16.2929L1.70711 17.7071Z" fill="white"/>
                    </svg>
                </div>
            </button>
            <img src={url}/>
        </div>
        <div className='cardBlog__text'>
            <h3>{title.toUpperCase()}</h3>
            <h4>{release.toUpperCase()}</h4>
            <h5>{description.toUpperCase()}</h5>
        </div>
    </div>
  )
}

export default CardBlog;