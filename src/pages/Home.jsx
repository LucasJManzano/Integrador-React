
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
    const [movies, setMovies] = useState([]);
    const endpoint = 'https://api.themoviedb.org/3/movie/popular?api_key=a1be2ce0b515966f84b5a47877b23e48&language=es-ES&page=1';

    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(movies => {
                console.log(movies);
                setMovies(movies)
            })
            .catch(err => console.log(err))

    }, []); 

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
    );
}

export default Home;