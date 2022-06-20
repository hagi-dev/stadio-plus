import React from 'react';

import './style.scss';
import Content from './Content/Content';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Artist = () => {
    const [light,setLight] = useLocalStorage('light','');
    const listArtist: Array<string>= ["ARTISTA","ARTISTA","ARTISTA","ARTISTA","ARTISTA","ARTISTA","ARTISTA","ARTISTA","ARTISTA","ARTISTA"]
    return (
        <div className={`artist ${light ? "true":""}`}>
            <div className='artist__header'>
                <ul>
                    {
                        listArtist.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <Content/>
        </div>
    )
}

export default Artist;