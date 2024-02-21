import { Link } from "react-router-dom";

const links = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Menu",
        href: "#menu",
    },
    {
        title: "Reservations",
        href: "/book-a-table",
    },
    {
        title: "Order Online",
        href: "#order-online",
    },
    {
        title: "Login",
        href: "#login",
    },
];

const toNavItem = (link) => {
    return (
        <li className="paragraph" key={ link.title }>
            <Link className="footer__list-item-link" to={ link.href }>{ link.title }</Link>
        </li>
    );
};


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo footer__section">
                    <Link className="footer__logo-link" to="/">
                        <img className="footer__logo-img" src="/images/logo_mono_v.svg" alt="logo" />
                    </Link>
                </div>
                <nav className="footer__section">
                    <h2 className="section-title">Doormat Navigation</h2>
                    <ul className="footer__list">
                        { links.map(toNavItem) }
                    </ul>
                </nav>
                <div className="footer__section">
                    <h2 className="section-title">Contacts</h2>
                    <ul className="footer__list">
                        <li className="paragraph">
                            <a className="footer__list-item-link" href="#tel:+1234567890">+1234567890</a>
                        </li>
                        <li className="paragraph">
                            <a className="footer__list-item-link" href="#mailto:little.lemon@box.com">little.lemon@box.com</a>
                        </li>
                        <li className="paragraph">
                            <span>Lorem Ipsum Street, 12</span>
                        </li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h2 className="section-title">Social Media</h2>
                    <ul className="footer__list">
                        <li className="paragraph">
                            <a className="footer__list-item-link" href="#facebook.com">Facebook</a>
                        </li>
                        <li className="paragraph">
                            <a className="footer__list-item-link" href="#instagram.com">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
