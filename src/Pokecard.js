import React, { Component } from 'react'

import './Pokecard.css'
const Poke_Base_URL = "  https://assets.pokemon.com/assets/cms2/img/pokedex/detail"; 

let numToThreeDigit=(number)=>{ 
      return (number<=99?`00${number}`.slice(-3):number); 

}
export default class Pokecard extends Component {

   
    render() {
        return (
            <div className="pokecard">
                <div className="pokecard-title">{this.props.name}</div>
                <div className="pokecard-image"><img src={Poke_Base_URL+`/${numToThreeDigit(this.props.id)}.png`} /></div>
                <div className="pokecard-data">Type: {this.props.type}</div>
                <div className="pokecard-data">Exp:{this.props.base_experience}</div>
            </div>
        )
    }
}
