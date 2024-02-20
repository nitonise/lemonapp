import ActionButton from "./ActionButton";

const Jumbotron = () => {
    return (
        <section className="jumbotron">
            <div className="jumbotron__content">
                <div className="jumbotron__desc">
                    <h1 className="jumbotron__title title">Little Lemon</h1>
                    <h2 className="subtitle">Chicago</h2>
                    <p className="jumbotron__text call-to-action">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Assumenda quae nulla esse cupiditate,
                        laboriosam dicta ducimus excepturi aut molestiae natus possimus qui.
                    </p>
                    <ActionButton title="Reserve a table" />
                </div>
                <img className="jumbotron__img" src="/images/restauranfood.jpg" alt="some image"/>
            </div>
        </section>
    );
};

export default Jumbotron;
