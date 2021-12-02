import {Container} from './style';

export default function FeatureMovie({movie}){
  let firstDate = new Date(movie.first_air_date);

  //generos 
  let genres = [];
  
  for(let i in movie.genres) {
    genres.push(movie.genres[i].name);
  }
  
  //limitando description
  let description = movie.overview;
  if(description.length > 100) {
    description = description.substring(0, 100) + '...';
  }
  return(
    <Container style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
      <div className="bg-vertical">
        <div className="bg-horizontal">
          <h1 className="name">{movie.name}</h1>
          <div className="movie-infos">
            <span className="points">{movie.vote_average} pontos</span>
            <span>{firstDate.getFullYear()}</span>
            <span>{movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 ? 's' : ''}</span>
          </div>
          <div className="desciption">{description}</div>
          <div className="movie-btn">
            <a href="#" className="watch">&#9658;Assistir</a>
            <a href="#" className="my-list">+ Minha lista</a>
          </div>
          <div className="genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
        </div>
      </div>
    </Container>
  );
}