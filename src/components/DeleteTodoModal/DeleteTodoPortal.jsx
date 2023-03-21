import ReactDOM from 'react-dom';

export const DeleteTodoPortal = ({ children }) => {
    return (
        ReactDOM.createPortal(
            children,
            document.getElementById('deleteTodoModal')
        )
    )
}
