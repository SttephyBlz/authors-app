import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            last_name: "",
            biography: "",
            gender: "",
            age: "",
            nacionalidad: 'MX',
        }
    }

    onInputChange = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value //en corchetes indica que es una variable xdxdxd
        });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
        
        axios.post('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/', this.state)
            .then(author => alert('Author created'))
            .catch(error => alert(error));
    }
    render() {
        return (
            <form className="p-5" onSubmit={this.onSubmitForm}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Nombre</label>
                    <input type="text" className="form-control" id="name" onChange={this.onInputChange}
                        value={this.state.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Apellidos</label>
                    <input type="text" className="form-control" id="last_name" onChange={this.onInputChange}
                        value={this.state.last_name} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Biografia</label>
                    <input type="text" className="form-control" id="biography" onChange={this.onInputChange}
                        value={this.state.biography} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Genero</label>
                    <select className="form-control" id="gender" onChange={this.onInputChange}>
                        <option selected> F </option>
                        <option> M </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">edad</label>
                    <input type="number" className="form-control" id="age" onChange={this.onInputChange}
                        value={this.state.age} />
                </div>
                <button className="btn btn-success"> Guardar </button>
            </form>
        )
    }
}
export default Form;