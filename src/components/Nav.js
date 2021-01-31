import {useContext} from 'react'
import {MovieContext} from '../MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div className="nav">
            <h3>Emma Adiba</h3>
            <p>List of movies: <span>{movies.length}</span></p>
        </div>
    )
}

export default Nav
