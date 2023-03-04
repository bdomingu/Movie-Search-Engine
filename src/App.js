import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Search from './components/Search.js'
import SearchResults from './components/SearchResults';


function App() {
  const [input, setInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
   
  const apiKey = process.env.REACT_APP_MOVIE_API;


  const fetchSearchResults = async () => {
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=${currentPage}&include_adult=false&query=${input}`);
      const results = response.data.results;
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

  return (
    <div className="App">
     <Search input={input} setInput={setInput}/>
     <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
