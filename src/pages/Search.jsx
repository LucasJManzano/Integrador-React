import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Search() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const word = params.get('search');

    const endpointSearch = `https://api.themoviedb.org/3/search/movie?api_key=a1be2ce0b515966f84b5a47877b23e48&language=en-US&query=${word}&page=1&include_adult=false`;


    useEffect(() => {
        if (word.length >= 3) {
            fetch(endpointSearch).then(res => res.json())
                .then(movies => {
                    console.log(movies);
                    setMovies(movies);
                })

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [word])

    return (
        <>
            <div className="container">
                <h1 id="pelRel2">Todo lo que buscás siempre en TuMovie Online !</h1>
                <div className='row g-4 py-5 row-cols-1 row-cols-lg-4'>
                    {movies.results?.map(movie => {
                        return (
                            <div className="col-12 col-sm-6 col-lg-3 my-2">
                                <div className="card h-auto">
                                    <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} class="card-img-top" alt={`${movie.title}`} />
                                    <div className="card-body">
                                        <h5 className="card-title one-line-title">{movie.title}</h5>
                                        <Link to={`/detail/${movie.id}`} className="btn btn-secondary">Detalles</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


// import { useState } from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const Results = () => {
//     const [gifs, setGifs] = useState([]);
//     const location = useLocation();

//     const params = new URLSearchParams(location.search);
//     // setWord(params.get('palabra'));
//     const word = params.get('palabra');


//     useEffect (()=> {
//         if (word.length >= 3) {
//             fetch(`https://api.giphy.com/v1/gifs/search?api_key=H23hUGTNwKzpi2PTgh7DBTQ63Ok0eo4v&q=${word}&limit=10`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setGifs(data.data);
//             })
//         }
//     }, [word])

