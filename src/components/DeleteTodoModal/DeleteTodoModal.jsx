import { useContext } from 'react';

import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal';

import { TodoContext } from '../TodoContext/TodoContext';

export const DeleteTodoModal = () => {

    const { setToggleModal, saveData, auxData, setAuxData, indexToBeDeleted, setIndexToBeDeleted } = useContext(TodoContext);

    const onCancelClick = (event) => {
        event.preventDefault();
        setToggleModal(false);
        setAuxData([]);
        setIndexToBeDeleted(null);
    };

    const onAcceptClick = (event) => {
        event.preventDefault();
        const newData = [...auxData];
        newData.splice(indexToBeDeleted, 1);
        saveData(newData);
        setToggleModal(false);
        setAuxData([]);
        setIndexToBeDeleted(null);
    };

    return (
        <ConfirmationModal title="Eliminar" info="¿Seguro/a deseas eliminar esta tarea?" cancelTextBtn="Cancelar" acceptTextBtn="Aceptar" onCancelClick={onCancelClick} onAcceptClick={onAcceptClick} />
    )
}
