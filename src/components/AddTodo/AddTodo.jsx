import React from 'react'
import { Button } from '../Button/Button'

export const AddTodo = ({ handleAddTodo, text, handleInputChange }) => {
    return (
        <div className="flex max-w-[400px] mx-auto bg-white rounded-lg gap-5 p-5 mt-5">
            <input type="text" value={text} onChange={handleInputChange} className="flex mx-auto border-2 border-gray-500 rounded-lg max-w-[250px]" />{" "}
            <Button text='Add Todo' onClick={handleAddTodo} />
        </div>
    )
}
