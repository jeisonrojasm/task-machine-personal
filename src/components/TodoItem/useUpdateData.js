import { useContext } from 'react';

import { TodoContext } from '../TodoContext/TodoContext';

export const useUpdateData = (id) => {
    const { data, saveData, setToggleDeleteTodoModal, setAuxData, setIndexToBeDeleted } = useContext(TodoContext);

    const onCheckClick = () => {
        const auxData = [...data];
        let indexToBeModified = auxData.findIndex(data => data.id === id);
        auxData[indexToBeModified].done = !auxData[indexToBeModified].done;
        saveData(auxData);
    };

    const onDeleteClick = () => {
        setAuxData([...data]);
        setIndexToBeDeleted([...data].findIndex(data => data.id === id));
        setToggleDeleteTodoModal(true);
    };

    return [
        onCheckClick,
        onDeleteClick,
    ];
}

