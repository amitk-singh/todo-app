import React, { Component } from 'react'
import '../App.css';

class TodoItem extends Component {

    // mark completed or not


    // updating
    state = {
        editing: false
    }

    handleEditing = () => {
        this.setState({
            editing: true
        })
    };

    handleUpdatedDone = (event) => {
        if (event.key === "Enter") {
            this.setState({ editing: false });
        }

    }

    markTaskStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    render() {


        let viewMode = {};
        let editMode = {};

        if (this.state.editing) {
            viewMode.display = 'none';
        } else {
            editMode.display = 'none';
        }




        return (
            <div>
                <div style={viewMode}>
                    <p style={this.props.completed ? this.markTaskStyle : null} onDoubleClick={() => this.handleEditing()} >
                        <input
                            type="checkbox"

                            onClick={() => this.props.handleChange(this.props.id)}

                        />
                        {this.props.todo}
                        <button onClick={() => this.props.todoDelete(this.props.id)}> Delete</button>
                    </p>

                </div>

                <input
                    type="text"
                    style={editMode}
                    value={this.props.todo}
                    onChange={(e) => this.props.setUpdate(e.target.value, this.props.id)}
                    onKeyDown={this.handleUpdatedDone}
                />
            </div>
        )
    }
}



export default TodoItem;