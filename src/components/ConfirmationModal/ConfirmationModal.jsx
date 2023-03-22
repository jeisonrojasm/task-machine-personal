import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './ConfirmationModal.css';

export const ConfirmationModal = ({ title, info, textArea, cancelTextBtn, acceptTextBtn, onCancelClick, onAcceptClick, onChange }) => {

    const { lightMode } = useContext(TodoContext);

    return (
        <div className='confirmation-modal'>
            <form className={`confirmation-modal__form ${!lightMode.mode && 'confirmation-modal__form--dark'}`}>
                <h2 className='confirmation-modal__title'>
                    {title}
                </h2>
                {
                    textArea
                        ?
                        <textarea placeholder={textArea} onChange={onChange} className={`confirmation-modal__textarea ${!lightMode.mode && 'confirmation-modal__textarea--dark'}`}></textarea>
                        :
                        <p className={`confirmation-modal__info ${!lightMode.mode && 'confirmation-modal__info--dark'}`}>{info}</p>
                }
                <div className='confirmation-modal__buttons'>
                    <button className='confirmation-modal__button confirmation-modal__button--cancel' onClick={onCancelClick}>
                        {cancelTextBtn}
                    </button>
                    <button type="submit" className='confirmation-modal__button confirmation-modal__button--accept' onClick={onAcceptClick}>
                        {acceptTextBtn}
                    </button>
                </div>
            </form>
        </div>
    )
}
