import './TodoList.css';

import { TodoItem } from "../TodoItem/TodoItem";

import { useSearchedData } from './useSearchedData';
import { NoTasks } from '../NoTasks/NoTasks';

export const TodoList = () => {

    const searchedData = useSearchedData();

    return (
        <div className='todo-list'>
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
