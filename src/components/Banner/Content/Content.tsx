import React from 'react';

import './Content.scss';
import Button from '../../Button/index';

const Content = () => {
  return (
    <div className='content1'>
        <h1>
            {`DESCUBRE, COLECCIONA
            Y COMPRA INCREÍBLES`}
            <p className='h1__ntfs'>NFTs</p>
        </h1>
        <p className='content__description'>
            StadioPlus es el primer mercado NFT de la comunidad del deporte. Descubre la oportunidad de poseer, vender y comercializar NFT . Explora el mercado para empezar.  
        </p>
        <div className='content__button'>
            <Button text={'CREA TU NTF'} version={'two'} widthButton="190px" />
            <Button text={'EXPLORA'} version={'one'} widthButton="190px" />
        </div>
    </div>
  )
}

export default Content