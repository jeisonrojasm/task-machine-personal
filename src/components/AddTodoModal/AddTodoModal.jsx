import { useContext, useState } from "react";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";
import { TodoContext } from "../TodoContext/TodoContext";

export const AddTodoModal = () => {

    const [valueToAdd, setValueToAdd] = useState('');

    const { data, saveData, globalTodoCounter, setGlobalTodoCounter, setToggleAddTodoModal } = useContext(TodoContext);

    const onCancelClick = () => {
        setValueToAdd('');
        setToggleAddTodoModal(false);
    };

    const onAcceptClick = (event) => {
        event.preventDefault();
        setGlobalTodoCounter(prev => prev + 1);
        const newValue = { id: globalTodoCounter, text: valueToAdd, done: false };
        const newData = [...data, newValue];
        saveData(newData);
        setToggleAddTodoModal(false);
    };

    const onChangeTextarea = (event) => {
        console.log(event.target.value);
        setValueToAdd(event.target.value);
    };

    return (
        <ConfirmationModal title="Agregar tarea" textArea="Escribe aquí tu tarea" cancelTextBtn="Cancelar" acceptTextBtn="Agregar" onCancelClick={onCancelClick} onAcceptClick={onAcceptClick} onChange={onChangeTextarea} />
    )
}