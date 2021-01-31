import React, { useContext, useState } from "react"
import {MovieContext} from "../MovieContext"

const AddMovie = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = e => {
        setName(e.target.value)
    }

    const updatePrice = e => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();

        setMovies(prevMovies => [...prevMovies, {name, price}])

        setName("")
        setPrice("")
        
    }



    return (
        <div className="form">
            <h1 className="form-heading">Add <span>Movie</span></h1>
            <form onSubmit={addMovie}>
            <label htmlFor="name">name:</label>
           <input type="text" 
           name="name" value={name} 
           onChange={updateName} 
           />
           <label htmlFor="price">price:</label>
           <input type="text" 
           name="price" value={price} 
           onChange={updatePrice}
           />
           <button>Submit</button>
       </form>
        </div>
       
    )
}

export default AddMovie
