import React, { useState } from 'react';
import {useEffect } from 'react';
import SearchIcon from "./search.svg";
import './App.css'
import MovieCard from './movieCard.jsx';

const App_API = 'https://www.omdbapi.com?apikey=efd8926e';



const App = () => {

    const [movies, setMovies] = useState ([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const movie1 ={
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    };
    const searchFilms = async (title) => {
        const response = await fetch(`${App_API}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data);
    }
    useEffect(() => {
        searchFilms('Spiderman');
    }, []);

    return(
        <div className ="app">
            <h1>FilmLand</h1>
            <div className ="search">
                <input
                placeholder='Search for films '
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}

                />
                <img 
                src ={SearchIcon}
                alt = "search"
                onClick={() => searchFilms(searchTerm)}
                />
                
            </div>

            {
                movies?.length > 0 ?
                (
                    <div className = "container">
                        {movies.map((movie) => (

                        <MovieCard movie1={movie}/>

                        ))}
                        
                    </div  >
                )
               :
               (
                <div className='empty'>
                    <h2> No Movies Found</h2>
                </div>

               )


            }
           
        </div  >
    )
       

    
}

export default App;