import React, { Component } from 'react'
import '../App.css';

class AddTodo extends Component {

    state = {
        title: '',
    }

    addingTodo = (e) => {
        this.setState({ title: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        return this.props.addTodo(this.state.title);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.addingTodo} />
                <input type="submit" />
            </form>
        )
    }
}


export default AddTodo;