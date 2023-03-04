import React from 'react';

export default function SearchResults ({searchResults}) {
    return (
        <div>
            {searchResults?.map((result) => {
                
                return(
                    <li className='item'>{result.original_title} <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}/></li>
                    
                )
                
            })}
        </div>

    )
}