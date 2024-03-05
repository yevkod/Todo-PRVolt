import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleComplete } from "../../store/todoReducer";
import { Filter } from "../../components/Filter/Filter";
import { TodoView } from "../../components/Todo/TodoView";
import { AddTodo } from "../../components/AddTodo/AddTodo";
import { Count } from "../../components/Count/Count";

export const MainView = () => {
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("all");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const MAX_TODO_LENGTH = 15;

    const handleAddTodo = () => {
        if (text && text.length >= 5 && text.length <= MAX_TODO_LENGTH) {
            dispatch(addTodo(text));
            setText("");
        } else if (text && text.length < 5) {
            alert("Todo text must be at least 5 characters long.");
        } else {
            alert("Todo text exceeds 15 characters long.");
        }
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") {
            return todo.completed;
        } else if (filter === "current") {
            return !todo.completed;
        }
        return true;
    });

    const completedCount = todos.filter((todo) => todo.completed).length;
    const uncompletedCount = todos.length - completedCount;

    return (
        <div className="flex flex-col bg-gray-400 pt-[90px] pb-[90px] min-h-screen mx-auto">
            <div className="p-5 font-bold text-[40px] bg-white rounded-lg max-w-[90rem] mx-auto">
                <span>TODO LIST</span>
            </div>
            <div>
                <Count completedCount={completedCount} uncompletedCount={uncompletedCount} />
            </div>
            <div className="flex">
                <Filter setFilter={setFilter} />
            </div>
            <div className="flex">
                <AddTodo handleAddTodo={handleAddTodo} text={text} handleInputChange={handleInputChange} />
            </div>
            <div className="flex flex-col gap-3 p-5">
                {filteredTodos.map((todo) => (
                    <>
                        <TodoView todo={todo} handleToggleComplete={handleToggleComplete} handleDeleteTodo={handleDeleteTodo} />
                    </>
                ))}
            </div>
        </div>
    );
};
