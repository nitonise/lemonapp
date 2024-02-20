import ActionButton from "./ActionButton";
import Card from "./Card";

const data = [
    {
        imgSrc: "/images/greek_salad.jpg",
        title: "Greek Salad",
        price: "12.99",
        desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        imgSrc: "/images/bruchetta.jpg",
        title: "Bruchetta",
        price: "5.99",
        desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        imgSrc: "/images/lemon_dessert.jpg",
        title: "Lemon Dessert",
        price: "5.00",
        desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
];



const Specials = () => {
    return (
        <section className="specials">
            <div className="specials__main">
                <h2 className="title">This week specials!</h2>
                <ActionButton title="Online Menu" />
            </div>
            <div className="specials__cards">
                { data.map(item => <Card key={ item.title } { ...item } />) }
            </div>
        </section>
    );
};

export default Specials;
