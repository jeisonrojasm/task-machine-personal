import { useContext } from 'react';

import './TodoCounter.css';

import { LightMode } from '../LightMode/LightMode';

import { TodoContext } from '../TodoContext/TodoContext';

export const TodoCounter = () => {

    const { data, lightMode } = useContext(TodoContext);

    const doneTodos = data.filter(data => data.done).length;
    const totalTodos = data.length;

    return (
        <div className='todo-counter'>
            <div className={`todo-counter__counter ${!lightMode.mode && 'todo-counter__counter--dark'}`}>
                <p>
                    Has completado <span className={`todo-counter__counter--span ${!lightMode.mode && 'todo-counter__counter--span--dark'}`}>{doneTodos}</span> de <span className={`todo-counter__counter--span ${!lightMode.mode && 'todo-counter__counter--span--dark'}`}>{totalTodos}</span> {totalTodos === 1 ? 'tarea' : 'tareas'}
                </p>
                <LightMode />
            </div>
            <progress className='todo-counter__progress' value={doneTodos} max={totalTodos}></progress>
        </div>
    )
}