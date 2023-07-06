import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
  } from "react-icons/bs";
  
import { MovieCards } from "../../components/MovieCards";

const INITIAL_STATE = {
  id: 0,
  tagline: '',
  budget: 0,
  revenue: 0,
  runtime: '',
  overview: '',
  poster_path: '',
  vote_average: 0,
  title: '',
}

const API_URL = import.meta.env.VITE_API;
const KEY = import.meta.env.VITE_API_KEY;

export function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(INITIAL_STATE);

    const dolar = (number:number) => {
      if(number) {
          return number.toLocaleString("en-us", {style: "currency", currency: "USD"});
      }
    }
    
    const getMovie = async (url:string) => {
      const response = await fetch(url)
      const data = await response.json();
      setMovie(data);
    }
    
    useEffect(() => {
      const urlMovie = `${API_URL}${id}?${KEY}`
      getMovie(urlMovie)
    }, [id])
   
    return (
        <div>
          {movie && (
            <>
              <MovieCards movie={movie} showLink={false} key={movie.id } />
              <p>{movie.tagline}</p>
              <div >
                <h3>
                  <BsWallet2 /> Budget:
                </h3>
                <p>{dolar(movie.budget)}</p>
              </div>
              <div >
                <h3>
                  <BsGraphUp /> Revenue:
                </h3>
                <p>{dolar(movie.revenue)}</p>
              </div>
              <div >
                <h3>
                  <BsHourglassSplit /> Duration:
                </h3>
                <p>{movie.runtime} minutes</p>
              </div>
              <div>
                <h3>
                  <BsFillFileEarmarkTextFill /> Synopsis:
                </h3>
                <p>{movie.overview}</p>
              </div>
            </>
          )}
        </div>
      );
}



