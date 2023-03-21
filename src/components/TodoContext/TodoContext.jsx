import React, { useState } from 'react';

import { useLocalStorage } from '../../GeneralHooks/useLocalStorage';

export const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {

    const [searchedValue, setSearchedValue] = useState('');

    const { data, saveData } = useLocalStorage('TODOS_DATA_V1', []);

    const [toggleModal, setToggleModal] = useState(false);

    const [deleteItem, setDeleteItem] = useState(false);

    return (
        <TodoContext.Provider value={{ data, saveData, searchedValue, setSearchedValue, toggleModal, setToggleModal, deleteItem, setDeleteItem }}>
            {children}
        </TodoContext.Provider>
    );
};