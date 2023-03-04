import React from 'react';

export default function Search ({input, setInput}) {

    return (
        <form>
            <input 
                type="text"
                value={input}
                placeholder='Enter a movie...'
                onChange={event => setInput(event.target.value)}
                
                // onKeyPress={event => getMovies(event)}
            />
        </form>
    )
}