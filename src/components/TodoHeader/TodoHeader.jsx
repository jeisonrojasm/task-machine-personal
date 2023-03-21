import './TodoHeader.css';

export const TodoHeader = () => {
    return (
        <div className='todo-header'>
            <h1 className='todo-header__title'>
                Task <br />
                <span className='todo-header__title--span'>
                    Machine
                </span>
            </h1>
            <span className='todo-header__icon'>
                🐱‍💻
            </span>
        </div>
    )
}
