import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Detail({ match }) {
  const { id } = match.params;
  const [movies, setMovies] = useState([]);
  const [similar, setSimilar] = useState([]);




  const endpointDetail = `https://api.themoviedb.org/3/tv/${id}?api_key=a1be2ce0b515966f84b5a47877b23e48&language=us-US`;
  const endpointSimilar = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=a1be2ce0b515966f84b5a47877b23e48&language=us-US&page=1`;


  useEffect(() => {
    fetch(endpointDetail)
      .then(res => res.json())
      .then(movies => {
        setMovies(movies)
        console.log(movies);
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(endpointSimilar)
      .then(res => res.json())
      .then(similar => {
        setSimilar(similar)
        console.log(similar);
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container2">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col coldet">
              <img src={'https://image.tmdb.org/t/p/w500' + movies.poster_path} alt={`${movies.name}`} id="imgDetailtv" />
            </div>
            <div className="col">
              <h1>{movies.name}</h1> <br />
              <h5>{movies.overview}</h5> <br /><br />
              <br /><br />
            </div>
          </div>
        </div>
        <br /> <br />


        <h5 id="pelRel" >TV Shows relacionados:</h5>
        <br />
        <div className="row justify-content-md-center">
          <div className="boxSim">
            {similar.results?.map(similar => {
              return (
                <Link to={`/detail/${similar.id}`} target="_blank" >
                  <img src={'https://image.tmdb.org/t/p/w500/' + similar.poster_path} class="" alt={`${similar.title}`} id="imgSimilar" />
                </Link>
              )
            })}
          </div>
        </div>
      </div> <br />
      <div className="row justify-content-center">
        <div className="col-2 ">
          <Link to="/" className="btn btn-secondary">Volver al home</Link>
        </div>
      </div>
      <br />
    </>
  );
}
