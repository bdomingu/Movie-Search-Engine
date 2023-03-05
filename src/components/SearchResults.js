import React from 'react';
import brokenImage from '../img/broken-image.jpg';

export default function SearchResults ({searchResults, convertDate}) {
    return (
        <div>
            {searchResults?.map((result) => {
                return(
                    
                   <li className='item'>
                        {result.poster_path === null ? <img className='broken-image'
                        alt='unavailabe' src={brokenImage}/>: 
                        <img alt='movie poster' src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} />}
                        <p className='movie-title'>{result.title} <span className='date'>({convertDate(result.release_date)})</span></p> 
                    </li>   
                )    
            })}
        </div>

    )
}