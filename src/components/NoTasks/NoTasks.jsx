import './NoTasks.css';

export const NoTasks = () => {
    return (
        <div className='no-tasks'>
            <span className='no-tasks__icon'>
                📄
            </span>
            <p className='no-tasks__text'>
                No tienes ninguna tarea aún. <br />
                <span className='no-tasks__text--span'>¡Pulsa el botón de + para agregar una!</span>
            </p>
        </div>
    )
}
