import './App.css';

import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { AddTodoButton } from '../AddTodoButton/AddTodoButton';

export const App = () => {
    return (
        <div className="app">
            <TodoHeader />
            <TodoCounter />
            <TodoSearch />
            <TodoList />
            <AddTodoButton />
        </div>
    )
}