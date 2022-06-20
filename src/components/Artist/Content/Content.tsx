import React from 'react';

import './Content.scss';
import Button from '../../Button/index';
import imgArtist1 from '../../../assets/images/artist/artist1.png';
import imgArtist2 from '../../../assets/images/artist/artist2.png';
import imgArtist3 from '../../../assets/images/artist/artist3.png';
import imgArtist4 from '../../../assets/images/artist/artist4.png';

const Content4 = () => {
  const artistImg: Array<string> =[imgArtist1, imgArtist2, imgArtist3, imgArtist4];
  return (
    <div className='content4'>
        <div className='content4__img'>
           {
             artistImg.map((item,index)=>(
               <img
               key={index}
               src={item}
               />
             ))
           } 
        </div>
        <h6>PARTICIPA EN NUESTRO</h6>
        <h2>DRAFT DE ARTISTAS</h2>
        <Button text='INSCRIBETE' version='one' widthButton='190px'/>
    </div>
  )
}

export default Content4;