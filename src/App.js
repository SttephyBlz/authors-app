import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Form from './components/Form';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCards: [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />],
      listAuthors: [],
    }
  }

  componentDidMount() {
    axios.get('https://redsocialb.herokuapp.com/usuarios')
      .then(authors => {
        console.log(authors);
        this.setState({
          listAuthors: authors.data
        })
      }).catch(err => console.log(err))
  }

  renderCards = () => {
    if (this.state.listAuthors.length === 0) {
      return <h1>Cargando...</h1>
    } else {
      const cardListAuthors = this.state.listAuthors.map((author, key) => {
        return <Card key={key} nombre={author.nombre} imagen={author.urlImagenMiniatura} carac={author.caracteristicas} precio={author.precioOriginal} />
      });
      return cardListAuthors;
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Form />
        <div className="App row ml-5">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default App;