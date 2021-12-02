import { useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './style.css';
import { Container } from './style';

export default function MovieList({title, list}){
  const [scrollX, setScrollX] = useState(0);
  
  function handleLeftArrow(){
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function handleRightArrow(){
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = list.results.length * 200;
    if((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(x);
  }

  return(
    <Container className="movie">
      <h2>{title}</h2>
      <div className="arrow-left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="arrow-right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRowArea">
        <div className="movieRowList" style={{marginLeft: scrollX, width: list.results.length * 200}}>
          {list.results.length > 0 && list.results.map((item, key) => (
            <div key={key} className="movieRowItem">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}