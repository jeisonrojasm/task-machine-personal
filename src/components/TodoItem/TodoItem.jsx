import './TodoItem.css';

import { useUpdateData } from './useUpdateData';

export const TodoItem = ({ id, text, done }) => {

    const [onCheckClick, onDeleteClick] = useUpdateData(id);

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
