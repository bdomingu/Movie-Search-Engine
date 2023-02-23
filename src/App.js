import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Search from './components/Search.js'
import MoviesList from './components/MoviesList';

function App() {
  const [movie, setMovie] = useState('')
  const [movieData, setMovieData] = useState()
  

    
  useEffect(() => {

  const getMovies = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a99cc60fc2b34dbb18cb806b8a88ed14&language=en-US&page=1&include_adult=false&query=${movie}`)
    .then((response) => {
      console.log(response)
      setMovieData(response)
      
    })
    
  }
  if (movie === ''){
    console.log('Enter a movie')
  } else {
  getMovies()
  }
}, [movie])
  
  return (
    <div className="App">
     <Search movie={movie} setMovie={setMovie} movieData={movieData} />
     <MoviesList movies={movieData?.data?.results} />
    </div>
  );
}

export default App;
