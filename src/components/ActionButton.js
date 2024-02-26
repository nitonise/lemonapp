const ActionButton = ({ title, onClick }) => {
    return (
        <button
            className='action-btn call-to-action'
            onClick={ onClick }
        >
            { title }
        </button>
    );
}

export default ActionButton;
