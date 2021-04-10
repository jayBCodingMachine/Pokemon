import React, { Component } from 'react'
import Pokecard from "./Pokecard"
import './Pokedex.css'

class Pokedex extends Component{
  
    render(){
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">WINNER!</h1>
        } else {
            title = <h1 className="Pokedex-loser">LOSER</h1>
        }

    
        return (
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                {title}
                <h4>Total Experence: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                {this.props.pokemon.map( x => {
                    return (
                       <Pokecard 
                       id={x.id}
                       name={x.name}
                       type={x.type}
                       exp={x.base_experience}
                       />
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Pokedex;