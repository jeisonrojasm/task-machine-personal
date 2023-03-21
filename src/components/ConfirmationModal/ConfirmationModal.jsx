import './ConfirmationModal.css';

export const ConfirmationModal = ({ title, info, textArea, cancelTextBtn, acceptTextBtn, onCancelClick, onAcceptClick }) => {

    

    // const onCancelClick = (event) => {
    //     event.preventDefault();
    //     setToggleModal(false);
    //     setAuxData([]);
    //     setIndexToBeDeleted(null);
    // };

    // const onAcceptClick = (event) => {
    //     event.preventDefault();
    //     const newData = [...auxData];
    //     newData.splice(indexToBeDeleted, 1);
    //     saveData(newData);
    //     setToggleModal(false);
    //     setAuxData([]);
    //     setIndexToBeDeleted(null);
    // };

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
