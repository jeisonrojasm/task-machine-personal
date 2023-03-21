import './App.css';

import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { AddTodoButton } from '../AddTodoButton/AddTodoButton';
import { DeleteTodoPortal } from '../DeleteTodoModal/DeleteTodoPortal';
import { DeleteTodoModal } from '../DeleteTodoModal/DeleteTodoModal';

export const App = () => {
    return (
        <div className="app">
            <TodoHeader />
            <TodoCounter />
            <TodoSearch />
            <TodoList />
            <AddTodoButton />
            <DeleteTodoPortal>
                <DeleteTodoModal />
            </DeleteTodoPortal>
        </div>
    )
}
