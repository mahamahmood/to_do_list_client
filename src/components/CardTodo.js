import React from 'react';

export default function CardTodo(props) {
    const todo = props.todo;
    return (
        <div>
            <h2><u>Todo:</u> {todo.task}</h2>
            <h2><u>Is Completed:</u> {todo.isCompleted === true ? 'Completed' : 'Not Completed'}</h2>
        </div>
    );
};