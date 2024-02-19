import Brief from "./Brief";
import Jumbotron from "./Jumbotron";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Main = () => {
    return (
        <main>
            <Jumbotron />
            <Specials />
            <Testimonials />
            <Brief />
        </main>
    );
};

export default Main;
