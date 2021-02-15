import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardTodo from './CardTodo';
import CreateTodo from './CreateTodo';

export default function Todos(props) {
    // Todos index -> a list of all todos
    const [ allTodos, updateAllTodos ] = useState([]);

    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get('http://localhost:3001/todos');
                console.log(response);
                await updateAllTodos([ ...response.data ]);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return(
        <div>
            <h2>Todos view component </h2>
            <CreateTodo />
            {allTodos.length > 0 && allTodos.map((todo, idx) => {
                return <CardTodo key={idx} todo={todo} />;
            })}
        </div>
    );
};
