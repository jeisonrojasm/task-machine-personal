import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './LightMode.css';

export const LightMode = () => {

    const { lightMode, setLightMode } = useContext(TodoContext);

    const onToggleLightMode = () => {
        setLightMode({ ...lightMode, mode: !lightMode.mode });
    }

    return (
        <div className={`light-mode ${!lightMode.mode && 'light-mode--dark'}`} onClick={onToggleLightMode}>
            <div className={`light-mode__toggle ${!lightMode.mode && 'light-mode__toggle--dark'}`}>
                {
                    lightMode.mode
                        ?
                        '🌕'
                        :
                        '🔆'
                }
            </div>
        </div>
    )
}
