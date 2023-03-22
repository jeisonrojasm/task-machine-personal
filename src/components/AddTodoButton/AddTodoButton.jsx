import { useContext } from 'react';

import './AddTodoButton.css';

import { TodoContext } from '../TodoContext/TodoContext';


export const AddTodoButton = () => {

    const { setToggleAddTodoModal } = useContext(TodoContext);

    const onAddClick = () => {
        setToggleAddTodoModal(true);
    };

    return (
        <div className='add-todo-button'>
            <div className='add-todo-button__container' onClick={onAddClick}>
                <span className='add-todo-button__span'>+</span>
            </div>
        </div>
    )
}
