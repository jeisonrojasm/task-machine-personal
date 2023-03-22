import { useContext } from 'react';

import './App.css';

import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { AddTodoButton } from '../AddTodoButton/AddTodoButton';
import { DeleteTodoPortal } from '../DeleteTodoModal/DeleteTodoPortal';
import { DeleteTodoModal } from '../DeleteTodoModal/DeleteTodoModal';
import { AddTodoPortal } from '../AddTodoModal/AddTodoPortal';
import { AddTodoModal } from '../AddTodoModal/AddTodoModal';

import { TodoContext } from '../TodoContext/TodoContext';


export const App = () => {

    const { toggleModal } = useContext(TodoContext);

    return (
        <div className="app">
            <TodoHeader />
            <TodoCounter />
            <TodoSearch />
            <TodoList />
            <AddTodoButton />
            <DeleteTodoPortal>
                {
                    toggleModal && <DeleteTodoModal />
                }
            </DeleteTodoPortal>
            <AddTodoPortal>
                <AddTodoModal />
            </AddTodoPortal>
        </div>
    )
}
