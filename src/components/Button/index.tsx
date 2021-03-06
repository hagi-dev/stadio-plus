import React from 'react';
import { text } from 'stream/consumers';

import './style.scss';

type Props = {
    text: string,
    version:string,
    widthButton:string
}

const index = (props:Props) => {
    const {text,version,widthButton}= props;
  return (
    <button className={`button ${version}`} style={{width:widthButton}}>
        <svg viewBox="0 0 190 34" xmlns="http://www.w3.org/2000/svg" width={'190px'}>
            <path d="M13.3866 0.499756L0.00842285 14.2071V30.4998C0.00842285 32.1566 1.35157 33.4998 3.00843 33.4998L178.227 33.5001L189.235 22.2074V3.50012C189.235 1.84326 187.892 0.500119 186.235 0.500116L13.3866 0.499756Z" />
        </svg>
        {`${text}`}
    </button>
  )
}

export default index