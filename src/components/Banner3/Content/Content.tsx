import React from 'react';

import './Content.scss';
import Button from '../../Button/index';

const Content = () => {
  return (
    <div className='content3'>
        <h1>
          <p className='h1__ntfs3'>CONÓCENOS</p>
            {`ACERCA DE `}
            <span>NOSOTROS</span>
        </h1>
        <p className='content__description'>
        StadioPlus es una empresa web3 que tiende un puente entre el mundo del deporte y los NFTs, democratizaremos el acceso a los aficionados al deporte permitiendo que todos descubran, recopilen, compren y vendan NFT de deporte.  
        </p>
    </div>
  )
}

export default Content