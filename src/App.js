import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchResults from './components/SearchResults';
import Navigation from './components/Navigation';

function App() {
  const [input, setInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
   
  const apiKey = process.env.REACT_APP_MOVIE_API;


  const fetchSearchResults = async () => {
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=${currentPage}&include_adult=false&query=${input}`);
      const results = response.data.results;
      console.log(results)
      return results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  useEffect(() => {
   
    const getSearchResults = async (e) => {
      if (input === '') {
        console.log('Enter a search')
        return;
      }
      const results = await fetchSearchResults();
      setSearchResults(results);
    };
   
    getSearchResults()
    
  }, [input]);

 
    
  const fetchMoreResults = async () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    const results = await fetchSearchResults();
    setSearchResults((prevResults) => [...prevResults, ...results]);
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = 
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight = 
        (document.documentElement && document.documentElement.scrollHeight) ||
          document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      if (scrolledToBottom) {
        fetchMoreResults();
      }
    }


    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };

  }, [currentPage]);

  const convertDate = (date) => {
    const splitDate = date.split('-');
    return splitDate[0]
  }

  return (
    <div className="App">
    <Navigation input={input} setInput={setInput}/>
     {/* <Search input={input} setInput={setInput}/> */}
     <div className='movie-container'>
     <SearchResults convertDate={convertDate} searchResults={searchResults} />
     </div>
    </div>
  );
}

export default App;
