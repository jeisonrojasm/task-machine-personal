import { useContext } from 'react';

import './TodoItem.css';

import { TodoContext } from '../TodoContext/TodoContext';

export const TodoItem = ({ id, text }) => {

    const { data, saveData } = useContext(TodoContext)

    const onCheckClick = () => {
        const auxData = [...data];
        let indexToBeModified = auxData.findIndex(data => data.id === id);
        auxData[indexToBeModified].done = !auxData[indexToBeModified].done;
        saveData(auxData);
    };

    return (
        <div className='todo-item'>
            <span className='todo-item__check' onClick={onCheckClick}>
                ✔
            </span>
            <p className='todo-item__text'>
                {text}
            </p>
            <span className='todo-item__delete'>
                🗑
            </span>
        </div>
    )
}
