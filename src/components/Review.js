const Review = (props) => {
    const {
        stars,
        img,
        name,
        comment,
    } = props;

    const getStars = () => {
        return Array(stars).fill(<span className="review__star">&#11088;</span>, 0);
    };

    return (
        <div className="review">
            <div className="review__stars">{ getStars() }</div>
            <div className="review__desc">
                <div className="review__customer">
                    <img
                        className="review__img"
                        src={ img }
                        alt={ name }
                    />
                    <h2 className="review__name card-title">{ name }</h2>
                </div>
                <p className="review__comment paragraph">"{ comment }"</p>
            </div>
        </div>
    );
};

export default Review;
