import { LightMode } from '../LightMode/LightMode';

export const TodoCounter = () => {
    return (
        <div>
            <div>
                <p>Has completado 2 de 4 tareas</p>
                <LightMode />
            </div>
            <progress value="50" max="100"></progress>
        </div>
    )
}
