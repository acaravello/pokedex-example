import React, {Component} from "react";
import "./Pokecard.css";

class Pokecard extends Component {
    render() {

        const {id,name, type, experience} = this.props;
        let idModified;
        if(id < 9) {
            idModified = "00" + id;
        } else if(id < 99) {
            idModified = "0" + id;
        } else {
            idModified = id;
        }

        const img = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + idModified + ".png";

        return (
            <div className="Pokecard">
                <h2>{name}</h2>
                <img className="Image" src={img} alt={name} />
                <div className="Type">type: {type}</div>
                <div className="XP">XP: {experience}</div>
            </div>
        )
    }
}

export default Pokecard;