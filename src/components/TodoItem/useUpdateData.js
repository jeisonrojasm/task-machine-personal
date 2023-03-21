import { useContext } from 'react';

import { TodoContext } from '../TodoContext/TodoContext';

export const useUpdateData = (id) => {
    const { data, saveData, setToggleModal, deleteItem, setDeleteItem } = useContext(TodoContext);

    const onCheckClick = () => {
        const auxData = [...data];
        let indexToBeModified = auxData.findIndex(data => data.id === id);
        auxData[indexToBeModified].done = !auxData[indexToBeModified].done;
        saveData(auxData);
    };

    const onDeleteClick = () => {
        setToggleModal(true);
        if (deleteItem) {
            const auxData = [...data];
            let indexToBeModified = auxData.findIndex(data => data.id === id);
            auxData.splice(indexToBeModified, 1);
            saveData(auxData);
            setDeleteItem(false);
        }
    };

    return [
        onCheckClick,
        onDeleteClick,
    ];
}

