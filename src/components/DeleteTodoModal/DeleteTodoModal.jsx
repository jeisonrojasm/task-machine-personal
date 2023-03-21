import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal';

export const DeleteTodoModal = () => {
    return (
        <ConfirmationModal title="Eliminar" info="¿Seguro/a deseas eliminar esta tarea?" cancelTextBtn="Cancelar" acceptTextBtn="Aceptar" />
    )
}
