import React, { useState } from 'react';

const pokimonFetch = (props) =>{
    const [pokemonData,setPokemonData] = useState([]);


    function pokimon (){
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                return response.json();
            }).then(response => {
                // we now run another promise to parse the HTTP response into usable JSON
                setPokemonData(response.results);
                console.log(response.results);
            }).catch(err=>{
                console.log(err);
            });

    }  
    return(
        <>
        <h2>this is pokemon page</h2>
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

export default pokimonFetch;