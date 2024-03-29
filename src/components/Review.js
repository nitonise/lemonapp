const stars = [
    <span className='review__star'></span>,
    <span className='review__star'>&#11088;</span>,
    <span className='review__star'>&#11088; &#11088;</span>,
    <span className='review__star'>&#11088; &#11088; &#11088;</span>,
    <span className='review__star'>&#11088; &#11088; &#11088; &#11088;</span>,
    <span className='review__star'>&#11088; &#11088; &#11088; &#11088; &#11088;</span>,
];

const Review = (props) => {
    const {
        starNum,
        img,
        name,
        comment,
    } = props;

    return (
        <div className='review'>
            <div className='review__stars'>{ stars[starNum] }</div>
            <div className='review__desc'>
                <div className='review__customer'>
                    <img
                        className='review__img'
                        src={ img }
                        alt={ name }
                    />
                    <h2 className='review__name card-title'>{ name }</h2>
                </div>
                <p className='review__comment paragraph'>'{ comment }'</p>
            </div>
        </div>
    );
};

export default Review;
