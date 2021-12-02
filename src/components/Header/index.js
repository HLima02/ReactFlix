import {useEffect, useState} from 'react';
import {HeaderStyle} from './style';

export default function Header({scrollBlack}){
  const [bgHeader, setBgHeade] = useState('');

  useEffect(() => {
    if(scrollBlack){
      setBgHeade('#141414');
    } else {
      setBgHeade('');
    }
  }, [scrollBlack])
 
  
  
  return(
    <HeaderStyle style={{background: bgHeader, transition: '0.3s'}}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png" alt="logo Netflix" />
        </a>
      </div>
      <div className="header--user">
        <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="Logo usuario" />
      </div>
    </HeaderStyle>
  );
}