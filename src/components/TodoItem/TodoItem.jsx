import { useContext } from 'react';

import './TodoItem.css';

import { TodoContext } from '../TodoContext/TodoContext';

export const TodoItem = ({ id, text, done }) => {

    const { data, saveData } = useContext(TodoContext);

    const onCheckClick = () => {
        const auxData = [...data];
        let indexToBeModified = auxData.findIndex(data => data.id === id);
        auxData[indexToBeModified].done = !auxData[indexToBeModified].done;
        saveData(auxData);
    };

    const onDeleteClick = () => {
        const auxData = [...data];
        let indexToBeModified = auxData.findIndex(data => data.id === id);
        auxData.splice(indexToBeModified, 1);
        saveData(auxData);
    };

    return (
        <div className='todo-item'>
            <span className={`todo-item__check ${done ? 'todo-item__check--done' : 'todo-item__check--undone'}`} onClick={onCheckClick}>
                ✔
            </span>
            <p className={`todo-item__text ${done ? 'todo-item__text--done' : 'todo-item__text--undone'}`}>
                {text}
            </p>
            <span className='todo-item__delete' onClick={onDeleteClick}>
                🗑
            </span>
        </div>
    )
}
