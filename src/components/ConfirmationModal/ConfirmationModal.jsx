import './ConfirmationModal.css';

export const ConfirmationModal = ({ title, info, textArea, cancelTextBtn, acceptTextBtn }) => {
    return (
        <div className='confirmation-modal'>
            <form className='confirmation-modal__form'>
                <h2 className='confirmation-modal__title'>
                    {title}
                </h2>
                {
                    textArea
                        ?
                        <textarea>{textArea}</textarea>
                        :
                        <p className='confirmation-modal__info'>{info}</p>
                }
                <div className='confirmation-modal__buttons'>
                    <button className='confirmation-modal__button confirmation-modal__button--cancel'>
                        {cancelTextBtn}
                    </button>
                    <button type="submit" className='confirmation-modal__button confirmation-modal__button--accept'>
                        {acceptTextBtn}
                    </button>
                </div>
            </form>
        </div>
    )
}
