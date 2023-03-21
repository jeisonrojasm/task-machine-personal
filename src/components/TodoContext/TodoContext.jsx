import React, { useState } from 'react';

import { useLocalStorage } from '../../GeneralHooks/useLocalStorage';

export const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {

    const [searchedValue, setSearchedValue] = useState('');

    const { parsedData: data } = useLocalStorage('TODOS_DATA_V1', []);

    return (
        <TodoContext.Provider value={{ data, searchedValue, setSearchedValue }}>
            {children}
        </TodoContext.Provider>
    );
};