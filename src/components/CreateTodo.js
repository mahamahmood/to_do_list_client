import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CardTodo(props) {
    const [ newTodo, updateNewTodo ] = useState({
        task: ''
    });

    const handleChange = (e) => {
        updateNewTodo({ ...newTodo, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        (async () => {
            try {
                const response = await axios.post('http://localhost:3001/todos', newTodo);
                console.log(response);
                await updateNewTodo({ ...newTodo, ...{ task: ''}});
            } catch (error) {
                console.log(error);
            }
        })();
    };

    // useEffect(() => {
        
    // }, []);
    return (
        <div>
            <h1>Create a New Todo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='task'>Task To Do</label>
                    <br />
                    <input
                        type='test'
                        name='task'
                        id='task'
                        placeholder='ex: code one hour a day'
                        value={newTodo.task}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='completed'>Is Completed</label>
                    <br />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};