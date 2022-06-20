import React from 'react';

import './NavBottom.scss';

type props={
    state: string
}

const NavBottom = (props:props) => {
   const {state} = props; 
  return (
    <div className={`navBottom ${state} `}>
        <nav>
            <ul>
                <li>
                    <select>
                        <option value="1">DROPS</option>
                    </select>
                </li>
                <li>
                    <select>
                        <option value="1">ARTISTAS</option>
                        <option value="2">FERIAS</option>
                    </select>
                </li>
                <li>
                    <a>PROMOCIONES</a>
                </li>
            </ul>
        </nav>
        <div className={"lengueje"}>
            <select>
                <option>ES</option>
                <option>EN</option>
            </select>
        </div>
    </div>
  )
}

export default NavBottom