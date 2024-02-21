import Review from "./Review";

const reviews = [
    {
        img: "/images/customer1.jpg",
        name: "John",
        stars: 5,
        comment: "The best place ever",
    },
    {
        img: "/images/customer2.jpg",
        name: "Mike",
        stars: 4,
        comment: "Very well",
    },
    {
        img: "/images/customer3.jpg",
        name: "Jane",
        stars: 5,
        comment: "You must visit here)",
    },
    {
        img: "/images/customer4.jpg",
        name: "Mary",
        stars: 3,
        comment: "Nice place",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials__content">
                <h2 className="section-title-up">Testimonials</h2>
                <div className="testimonials__reviews">
                    { reviews.map(r => <Review { ...r } />) }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
