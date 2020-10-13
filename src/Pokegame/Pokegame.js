import React, {Component} from "react";
import Pokedex from "../Pokedex/Pokedex";

class Pokegame extends Component {
    render() {

        const pokemon = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]

        let set1 = [];
        let count1 = 1;
        let set2 = [];
        let count2 = 1;
        let totExp1 = 0;
        let totExp2 = 0;
        let isWinner1 = false;
        let isWinner2 = false;
        for(let i = 0; i < pokemon.length; i++) {
            let randomFactor = Math.floor(Math.random() * 2);

            if(randomFactor ===0) {
                if(count1 <= 4) {
                    set1.push({...pokemon[i]});
                    totExp1 += pokemon[i].base_experience;
                    count1++
                } else if(count2 <= 4) {
                    set2.push({...pokemon[i]});
                    count2++;
                    totExp2 += pokemon[i].base_experience;
                }
            } else if(randomFactor === 1) {
                if(count2 <= 4) {
                    set2.push({...pokemon[i]});
                    count2++;
                    totExp2 += pokemon[i].base_experience;
                } else if(count1 <= 4) {
                    set1.push({...pokemon[i]});
                    count1++;
                    totExp1 += pokemon[i].base_experience;
                }
            }

        }

        if(totExp1 > totExp2) {
            isWinner1 = true;
        } else if(totExp2 > totExp1) {
            isWinner2 = true
        }

        return (
            <div className="Pokegame">
                <h1>Pokedex</h1>
                <Pokedex pokemonTeam = {set1} team="Team 1" experience={totExp1} isWinner={isWinner1}/>
                <Pokedex pokemonTeam = {set2} team="Team 2" experience={totExp2} isWinner={isWinner2}/>
            </div>
        )
    }
}

export default Pokegame;