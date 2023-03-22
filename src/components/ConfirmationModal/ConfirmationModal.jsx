import './ConfirmationModal.css';

export const ConfirmationModal = ({ title, info, textArea, cancelTextBtn, acceptTextBtn, onCancelClick, onAcceptClick, onChange }) => {

    return (
        <div className='confirmation-modal'>
            <form className='confirmation-modal__form'>
                <h2 className='confirmation-modal__title'>
                    {title}
                </h2>
                {
                    textArea
                        ?
                        <textarea placeholder={textArea} onChange={onChange} className='confirmation-modal__textarea'></textarea>
                        :
                        <p className='confirmation-modal__info'>{info}</p>
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
