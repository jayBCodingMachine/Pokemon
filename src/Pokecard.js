import React, {Component} from "react";
import "./Pokecard.css";
const POKE_API ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";




class Pokecard extends Component {
    render() {

        let pokeID = (id) => (id <=999 ? `00${id}`.slice(-3): id); 
          

        let imgSrc = `${POKE_API}${pokeID(this.props.id)}.png`;
        return (
        <div className="Pokecard">
            <h1 className="Pokecard-title">{this.props.name}</h1>
            <div className="Pokecard-image"><img src={imgSrc} alt={this.props.name}/></div>
            <div className="Pokecard-data" > Type: {this.props.type} </div>
            <div className="Pokecard-data" > Exp: {this.props.exp}</div>

        </div>)
    }
}

export default Pokecard;