import React from 'react';

import './style.scss';
import img1 from '../../assets/images/imgBlog1.png';
import img2 from '../../assets/images/imgBlog2.png';
import img3 from '../../assets//images/imgBlog3.png';
import CardBlog from './CardBlog/CardBlog';
import Button from '../Button/index';
import {useLocalStorage} from '../../hooks/useLocalStorage';


type blogInfo={
  url: string,
  title: string,
  release: string,
  description: string
}

const BlogSection = () => {
  const [light, setLight] = useLocalStorage('light','');
  const data :Array<blogInfo>=[
    {
      url: img1,
      title: 'LOREM IPSUM DOLOR SIT',
      release: '12.02.2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      url: img2,
      title: 'LOREM IPSUM DOLOR SIT',
      release: '12.02.2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      url: img3,
      title: 'LOREM IPSUM DOLOR SIT',
      release: '12.02.2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  ]

  return (
    <div className={`BlogSection ${light ? "true":""}`}>
        <div className='BlogSection__title'>
            <h3>ACTUALIDAD Y NOTICIAS</h3>
            <h1>BLOG</h1>
        </div>
        <div className='BlogSection__Article'>
          {
            data.map((item, index)=>(
              <CardBlog
              key={index}
              url={item.url}
              title={item.title}
              release={item.release}
              description={item.description}
              />
            ))
          }
        </div>
        <Button text='LEER MAS' version='one' widthButton='190px' />
    </div>
  )
}

export default BlogSection;