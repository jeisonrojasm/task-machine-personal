import './TodoList.css';

import { TodoItem } from "../TodoItem/TodoItem";

import { useSearchedData } from './useSearchedData';

export const TodoList = () => {

    const searchedData = useSearchedData();

    return (
        <div className='todo-list'>
            {
                searchedData.map(data => <TodoItem key={data.id} text={data.text} id={data.id} done={data.done} />)
            }
        </div>
    )
}
