import { useContext } from 'react';

import { TodoContext } from '../TodoContext/TodoContext';

import './TodoSearch.css';

export const TodoSearch = () => {

    const { searchedValue, setSearchedValue, lightMode } = useContext(TodoContext);

    const onTodoSearchChange = ({ target }) => {
        setSearchedValue(target.value);
    };

    return (
        <div className={`todo-search ${!lightMode.mode && 'todo-search--dark'}`}>
            <input className={`todo-search__input ${!lightMode.mode && 'todo-search__input--dark'}`} type="text" value={searchedValue} placeholder="Buscar tareas..." onChange={onTodoSearchChange} />
            <span className='todo-search__icon'>🔍</span>
        </div>
    )
}
