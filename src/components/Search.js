import React from 'react';

export default function Search ({movie, setMovie, movieData}) {
console.log(movieData?.data?.results)

const movies = movieData?.data?.results

    return (
        <form>
            <input 
                type="text"
                value={movie}
                placeholder='Enter a movie...'
                onChange={event => setMovie(event.target.value)}
                
                // onKeyPress={event => getMovies(event)}
            />
        </form>
    )
}