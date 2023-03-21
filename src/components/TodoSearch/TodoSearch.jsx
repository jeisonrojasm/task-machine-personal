import './TodoSearch.css';

export const TodoSearch = () => {
    return (
        <div className='todo-search'>
            <input className='todo-search__input' type="text" placeholder="Buscar tareas..." />
            <span className='todo-search__icon'>🔍</span>
        </div>
    )
}
