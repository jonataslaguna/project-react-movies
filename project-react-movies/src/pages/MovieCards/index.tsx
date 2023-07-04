import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'

const urlImg = import.meta.env.VITE_IMG;

export function MovieCards ({movie, showLink = true}) {
    
    return (
        <div>
            <img src={`${urlImg}${movie.poster_path}` } alt={ movie.title } />
            <h2>{ movie.title }</h2>
            <p>
                <FaStar /> { movie.vote_average }
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
        </div>
    )
}