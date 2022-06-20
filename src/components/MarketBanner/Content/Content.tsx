import React from 'react';

import './Content.scss';
import Button from '../../Button/index';

const Content = () => {
  return (
    <div className='content2'>
        <h1>
            {`CONOCE EL NUEVO MARKETPLACE NFT`}
            <p className='h1__ntfs'>STADIOPLUS</p>
        </h1>
        <p className='content__description'>
          Podrás conseguir cualquier NFT de deporte de la red ethereum y BSC con solo un 1% de comisión.  
        </p>
        <div className='content__button'>
            <Button text={'MERCADO SECUNDARIO'} version={'one'} widthButton="190px" />
        </div>
    </div>
  )
}

export default Content