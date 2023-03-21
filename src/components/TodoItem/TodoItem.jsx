import { useContext, useState } from 'react';

import './TodoItem.css';

import { TodoContext } from '../TodoContext/TodoContext';

export const TodoItem = ({ id, text }) => {

    const [done, setDone] = useState(false);

    const { data, setData } = useContext(TodoContext)

    const onCheckClick = () => {
        const newData = [...data];
        const [dataToBeModified] = newData.filter(data => data.id === id);
        dataToBeModified.done = !dataToBeModified.done;
        setData(newData);
        setDone(dataToBeModified.done);
    };

    return (
        <div className='todo-item'>
            <span className={`todo-item__check ${done ? 'todo-item__check--done' : 'todo-item__check--undone'}`} onClick={onCheckClick}>
                ✔
            </span>
            <p className={`todo-item__text ${done ? 'todo-item__text--done' : 'todo-item__text--undone'}`}>
                {text}
            </p>
            <span className='todo-item__delete'>
                🗑
            </span>
        </div>
    )
}
