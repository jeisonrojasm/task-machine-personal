import { useContext } from 'react';

import { TodoContext } from '../TodoContext/TodoContext';

export const useUpdateData = (id) => {
    const { data, saveData } = useContext(TodoContext);

    const onCheckClick = () => {
        const auxData = [...data];
        let indexToBeModified = auxData.findIndex(data => data.id === id);
        auxData[indexToBeModified].done = !auxData[indexToBeModified].done;
        saveData(auxData);
    };

    const onDeleteClick = () => {
        const auxData = [...data];
        let indexToBeModified = auxData.findIndex(data => data.id === id);
        auxData.splice(indexToBeModified, 1);
        saveData(auxData);
    };

    return [
        onCheckClick,
        onDeleteClick,
    ];
}

