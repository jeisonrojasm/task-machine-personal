import './TodoList.css';

import { TodoItem } from "../TodoItem/TodoItem";

import { useSearchedData } from './useSearchedData';
import { NoTasks } from '../NoTasks/NoTasks';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

export const TodoList = () => {

    const { lightMode } = useContext(TodoContext);

    const searchedData = useSearchedData();

    return (
        <div className={`todo-list ${!lightMode.mode && 'todo-list--dark'}`}>
            {
                searchedData.length < 1
                    ?
                    <NoTasks />
                    :
                    searchedData.map(data => <TodoItem key={data.id} text={data.text} id={data.id} done={data.done} />)
            }
        </div>
    )
}
