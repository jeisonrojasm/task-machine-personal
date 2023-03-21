import { useContext } from 'react';

import { TodoContext } from '../TodoContext/TodoContext';

import './TodoSearch.css';

export const TodoSearch = () => {

    const { searchedValue, setSearchedValue } = useContext(TodoContext);

    const onTodoSearchChange = ({ target }) => {
        setSearchedValue(target.value);
    };

    return (
        <div className='todo-search'>
            <input className='todo-search__input' type="text" value={searchedValue} placeholder="Buscar tareas..." onChange={onTodoSearchChange} />
            <span className='todo-search__icon'>🔍</span>
        </div>
    )
}
