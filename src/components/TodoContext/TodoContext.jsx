import React, { useState } from 'react';

import { useLocalStorage } from '../../GeneralHooks/useLocalStorage';

export const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {

    const [searchedValue, setSearchedValue] = useState('');

    const { data, saveData } = useLocalStorage('TODOS_DATA_V1', []);

    const [toggleDeleteTodoModal, setToggleDeleteTodoModal] = useState(false);

    const [deleteItem, setDeleteItem] = useState(false);

    const [auxData, setAuxData] = useState([]);
    const [indexToBeDeleted, setIndexToBeDeleted] = useState(null);

    return (
        <TodoContext.Provider value={{ data, saveData, searchedValue, setSearchedValue, toggleDeleteTodoModal, setToggleDeleteTodoModal, deleteItem, setDeleteItem, auxData, setAuxData, indexToBeDeleted, setIndexToBeDeleted }}>
            {children}
        </TodoContext.Provider>
    );
};