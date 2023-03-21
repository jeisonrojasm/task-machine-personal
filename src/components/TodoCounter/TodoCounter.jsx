import { useContext} from 'react';

import './TodoCounter.css';

import { LightMode } from '../LightMode/LightMode';

import { TodoContext } from '../TodoContext/TodoContext';

export const TodoCounter = () => {

    const { data } = useContext(TodoContext);

    const doneTodos = data.filter(data => data.done).length;
    const totalTodos = data.length;

    return (
        <div className='todo-counter'>
            <div className='todo-counter__counter'>
                <p>
                    Has completado <span className='todo-counter__counter--span'>{doneTodos}</span> de <span className='todo-counter__counter--span'>{totalTodos}</span> {totalTodos === 1 ? 'tarea' : 'tareas'}
                </p>
                <LightMode />
            </div>
            <progress className='todo-counter__progress' value={doneTodos} max={totalTodos}></progress>
        </div>
    )
}