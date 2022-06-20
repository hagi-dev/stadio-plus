import React from 'react';

import './Content.scss';
import Button from '../../Button/index';

const Content5 = () => {
  return (
    <div className='content5'>
        <h1>
            {`YA ESTÁ AQUÍ EL NUEVO TOKEN DE 
            STADIOPLUS`}
            <p className='h1__ntfs'>STADIOPLUS</p>
        </h1>
        <p className='content5__description'>
        El token que revolucionará el modelo de monetización del mundo del deporte y los eSports gracias a los NFTs.  
        </p>
        <div className='content5__form'>
            <input type='text' id='formImput'/>
            <input id='submit' type='submit' value='Join the waitlist.'/>
        </div>
        <div className='content5__check'>
          <input id='checkBox' type='checkbox'/>
          <span>
            I understand I can unsubscribe at any time. Privacy Policy
          </span>
        </div>
    </div>
  )
}

export default Content5