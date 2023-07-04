import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

export function Navbar (){
    return (
        <nav>
            <h2>
                <Link to="/"> <BiCameraMovie /> Movie</Link>
            </h2>
            <form>
                <input type="text" id="movieInput" placeholder="Busque um Filme"/>
                <button><BiSearchAlt2 /></button>
            </form>
        </nav>
    )
}