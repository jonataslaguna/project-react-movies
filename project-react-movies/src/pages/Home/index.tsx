import { useState, useEffect } from "react"
import { MovieCards } from "../../components/MovieCards";

const API_URL = import.meta.env.VITE_API;
const KEY = import.meta.env.VITE_API_KEY;

 const INITIAL_STATE = [
  {
  title:'',
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  id: 0,
  original_language: '',
  original_title: '',
  overview: '',
  poster_path:'',
  vote_average: 0,
  }
];


export function Home() {
   const [movies, setMovies] = useState(INITIAL_STATE);

   const handleFetch = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
   }

   useEffect(() => {
    const urlTopRated = `${API_URL}top_rated?${KEY}`
    handleFetch(urlTopRated);
    },[])
    
 return(
   <div>
     <h2>Best rated movies</h2>
     <div>
        {movies.length > 0 && movies.map((movie) => (
            <MovieCards movie={movie} key={movie.id} showLink={true}/>
        ))}
     </div>
   </div>
 )
}

