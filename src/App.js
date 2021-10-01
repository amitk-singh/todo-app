import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import React, { Component } from 'react'



class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "play with react",
        completed: false
      },

      {
        id: 2,
        title: "dinner",
        completed: false
      },

      {
        id: 3,
        title: "movie",
        completed: false
      },
    ]
  }

  // add to todo
  addTodo = (todo) => {
    const newTodo = {
      id: 4,
      title: todo,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo] //spread operator
    })
  }

  // Edit todo
  setUpdate = (newTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      })
    })
  }

  // mark todo i.e completed or not
  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  // Delete todo
  todoDelete = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    console.log(todos);
    this.setState({
      todos: todos
    });
  };


  render() {

    return (
      <div className={"App"}>

        <h1>Todo App</h1>
        <AddTodo
          addTodo={this.addTodo}
        />
        <Todos
          todos={this.state.todos}
          todoDelete={this.todoDelete}
          setUpdate={this.setUpdate}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}


export default App;
