import { useContext } from 'react';

import './TodoItem.css';

import { TodoContext } from '../TodoContext/TodoContext';

export const TodoItem = ({ text }) => {

    const { data } = useContext(TodoContext)

    const onCheckClick = () => {
        console.log('click');
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
