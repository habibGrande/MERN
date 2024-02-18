import React ,{ useState } from "react";
import axios from 'axios';



const Axios = (props) =>{
    const [pokemonData,setPokemonData] = useState([]);

    

    function pokimon (){
        axios.get('https://pokeapi.co/api/v2/pokemon').then(response=>{
            setPokemonData(response.results);
            console.log(response.results);
        })
    }


    return(
        <>
            <h2>this is Axios pokemon page</h2>
            <button onClick={pokimon}>Fetch Pokemon</button>
            {
                pokemonData.map((pokemon,i) => (
                    <li key={i}>
                        {pokemon.name}
                    </li>
                ))
            }

        </>
    );
}

export default Axios;