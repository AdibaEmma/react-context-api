import { useState,createContext } from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: "Harry Porter",
            price: "$10",
            id: 23124
        },
        {
            name: "Game of Thrones",
            price: "$15",
            id: 2566124
        },
        {
            name: "Inception",
            price: "$10",
            id: 23524
        }
    ])

    return (
        <MovieContext.Provider>
            {props.children}
        </MovieContext.Provider>
    );
}