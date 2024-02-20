const Card = (props) => {
    const {
        imgSrc,
        title,
        price,
        desc,
    } = props;

    return (
        <div className="card">
            <img
                className="card__img"
                src={ imgSrc }
                alt={ title }
            />
            <div className="card__info">
                <div className="card__main">
                    <h2 className="card-title">{ title }</h2>
                    <span className="card__price highlight">${ price }</span>
                </div>
                <p className="card__desc paragraph">{ desc }</p>
            </div>
            <button
              className="card__btn call-to-action"
              onClick={ () => alert(`${title} - ordered`) }
            >
                    Order a delivery
            </button>
        </div>
    );
};

export default Card;

