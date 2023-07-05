import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { useState } from "react";

export function Navbar (){
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!search) {
            return
        }
        navigate(`/search?q=${search}`);
        setSearch('');
    }

    return (
        <nav>
            <h2>
                <Link to="/"> <BiCameraMovie /> Movie</Link>
            </h2>
            <form onSubmit={ onSubmit }>
                <input 
                  type="text" 
                  id="movieInput" 
                  placeholder="Busque um Filme" 
                  value={ search }
                  onChange={ handleChange }/>

                <button><BiSearchAlt2 /></button>
            </form>
        </nav>
    )
}