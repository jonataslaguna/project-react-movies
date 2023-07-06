import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { MovieCards } from "../../components/MovieCards"

const URL_SEARCH = import.meta.env.VITE_SEARCH;
const API_KEY = import.meta.env.VITE_API_KEY;


export function Search() {
    const [searchParams] = useSearchParams();
    const [movies, setMovie] = useState([])
    const query = searchParams.get('q')
    console.log(movies)
    const handleFetch = async (url:string) => {
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data.results);
       }
    
       useEffect(() => {
        const urlSearch = `${URL_SEARCH}?${API_KEY}&query=${query}`;
        handleFetch(urlSearch);
        },[query])

        
        
    return (
        <div>
        <h2>Resultados para: {query}</h2>
        <div>
            {movies.length > 0 && movies.map((movie) => (
                <MovieCards movie={movie} key={movie.id}/>
            ))}
        </div>
     </div>
    )
}
