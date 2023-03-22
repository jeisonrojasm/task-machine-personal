import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";

export const AddTodoModal = () => {

    const onCancelClick = () => {
        alert('cancelar');
    };

    const onAcceptClick = () => {
        alert('aceptar');
    };

    return (
        <ConfirmationModal title="Agregar tarea" textArea="Escribe aquí tu tarea" cancelTextBtn="Cancelar" acceptTextBtn="Agregar" onCancelClick={onCancelClick} onAcceptClick={onAcceptClick} />
    )
}
