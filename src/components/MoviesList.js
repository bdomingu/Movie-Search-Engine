import React from 'react';

export default function MoviesList ({movies}) {
    return (
        <div>
            {movies?.map((movie) => {
                
                return(
                    <li className='item'>{movie.original_title} <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/></li>
                    
                )
                
            })}
        </div>

    )
}