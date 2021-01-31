import React from 'react'

const Movie = ({name, price}) => {
    return (
        <div className="movie-list">
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Movie
