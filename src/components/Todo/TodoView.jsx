import React from 'react'
import { Button } from '../Button/Button'

export const TodoView = ({ todo, handleToggleComplete, handleDeleteTodo }) => {
    return (
        <div key={todo.id} className="flex bg-white rounded-lg h-24 p-3 items-center gap-5 mx-auto">
            <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                <span>{todo.text}</span>
            </div>
            <div className="flex">
                <Button text={todo.completed ? "Incomplete" : "Complete"} onClick={() => handleToggleComplete(todo.id)} />
            </div>
            <div className="flex">
                <Button text="Delete" onClick={() => handleDeleteTodo(todo.id)} />
            </div>
        </div>
    )
}
