import Brief from './Brief';
import Jumbotron from './Jumbotron';
import Specials from './Specials';
import Testimonials from './Testimonials';

const HomePage = () => {
    return (
        <>
            <Jumbotron />
            <Specials />
            <Testimonials />
            <Brief />
        </>
    );
};

export default HomePage;
