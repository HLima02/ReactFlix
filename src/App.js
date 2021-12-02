import { useState, useEffect } from 'react';
import HeaderContainer from './components/Header';
import FeatureMovie from './components/FeaturedMovie'
import MovieList from './components/MovieSliders';
import Footer from './components/Footer';
import api from './api';
import './App.css';

export default function App(){
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    async function loadApi(){
      //requisição api
      const list = await api.getMovieList();
      setMovieList(list);

       //filme em destaque
      let originals = list.filter(i => i.slug === 'originais');
      let pickUpRandom = Math.floor(Math.random() * originals[0].item.results.length);
      let chosen = originals[0].item.results[pickUpRandom];
      let movieChosen = await api.getFeaturedMovie(chosen.id, 'tv')
      setFeaturedMovie(movieChosen);
    }

    loadApi()
  }, []);

  useEffect(() => {
    const scrollHeade = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    
    window.addEventListener('scroll', scrollHeade);
  }, []);

  return(
    <div>
      <HeaderContainer scrollBlack={blackHeader} />
      {featuredMovie && 
        <FeatureMovie movie={featuredMovie} />
      }
      <ul>
        {movieList.map((item, key) => {
          return(
            <MovieList key={key} title={item.title} list={item.item} />
          );
        })}
      </ul>
      <Footer />
    </div>
  );
}
