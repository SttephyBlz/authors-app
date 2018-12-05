import React, { Component } from 'react';
import './card.css'

class Card extends Component {
    render() {
        return (
            <div className="card Card mt-5 ml-3" >
                <img className="card-img-top" src={this.props.imagen} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.nombre}</h5>
                    <p className="card-text">Precio: ${this.props.precio}</p>
                    <a href="#" className="btn btn-primary"> Comprar </a>
                </div>
            </div>

        )
    }
}
export default Card;
