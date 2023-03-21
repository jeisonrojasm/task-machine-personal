import './TodoCounter.css';

import { LightMode } from '../LightMode/LightMode';

export const TodoCounter = () => {
    return (
        <div className='todo-counter'>
            <div className='todo-counter__counter'>
                <p>
                    Has completado <span className='todo-counter__counter--span'>2</span> de <span className='todo-counter__counter--span'>4</span> tareas
                </p>
                <LightMode />
            </div>
            <progress className='todo-counter__progress' value="50" max="100">50%</progress>
        </div>
    )
}
