import React, {Component} from "react";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {

    render() {

        const {pokemonTeam, team, isWinner, experience} = this.props;

        const pokemon = [];
        for(let i = 0; i < pokemonTeam.length; i++) {
            pokemon.push({...pokemonTeam[i]})
        }

          const cards = pokemon.map((singlePokemon, index) =>
          {
            return <Pokecard 
            key={index}
            id={singlePokemon.id}
            name={singlePokemon.name}
            type={singlePokemon.type}
            experience={singlePokemon.base_experience}
            />
          });

          let result;

          if(isWinner) {
                result = 
                <p className='Winner'>You win</p>
          } else {
                result =
                <p className="Loser">You lose</p>
          }

        return (
            <div className="Pokedex">
                <h2>{team}</h2>
                <p>Total Exp: {experience}</p>
                {result}
                <div className="Cards">
                {cards}
                </div>
            </div>
        )
    }
}

export default Pokedex;