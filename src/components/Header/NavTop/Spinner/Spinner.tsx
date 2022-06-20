import React from 'react';
import './Spinner.scss';
import moon from '../../../../assets/images/moon.png';
import sun from '../../../../assets/images/sun.png';
import {useLocalStorage} from '../../../../hooks/useLocalStorage';

const Spinner = () => {
  const [light,setLight] = useLocalStorage("light","");
  const [state, setState]= React.useState(light);
  const handleclick = ()=>{
    setState(!state);
    if(!light){
      setLight("true");
      window.location.reload();
      return
    }
    else{
      setLight(null)
      window.location.reload();
    }
  }
  return (
    <div className={`spinner ${state ? "change":""}`}>
        <img src={sun} onClick={handleclick}/>
        <img src={moon} onClick={handleclick}/>
        <div onClick={handleclick} className={`spinner__Shape ${state ? "change":""}`}></div>
    </div>
  )
}

export default Spinner