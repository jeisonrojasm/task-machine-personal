import ReactDOM from 'react-dom';

export const AddTodoPortal = ({ children }) => {
    return (
        ReactDOM.createPortal(
            children,
            document.getElementById("addTodoModal")
        )
    );
};