import './TodoItem.css';

export const TodoItem = () => {
    return (
        <div className='todo-item'>
            <span className='todo-item__check'>
                ✔
            </span>
            <p className='todo-item__text'>
                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
                Tarea
            </p>
            <span className='todo-item__delete'>
                🗑
            </span>
        </div>
    )
}
