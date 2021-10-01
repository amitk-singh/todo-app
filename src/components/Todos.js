import React from 'react'
import TodoItem from './TodoItem';


function Todos(props) {
    return (
        props.todos.map(todo => {
            return <TodoItem
                todo={todo.title}
                completed={todo.completed}
                id={todo.id}
                todoDelete={props.todoDelete}
                setUpdate={props.setUpdate}
                handleChange={props.handleChange}
            />
        })
    )
}

export default Todos
