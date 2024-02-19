const links = [
    {
        title: "Home",
        href: "#home",
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
        href: "#reservations",
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
            <a className="footer__list-item-link" href={ link.href }>{ link.title }</a>
        </li>
    );
};


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo footer__section">
                <a className="footer__logo-link" href="#home">
                    <img className="footer__logo-img" src="/images/logo_mono_v.svg" alt="logo" />
                </a>
            </div>
            <nav className="footer__section">
                <h2 className="section-category">Doormat Navigation</h2>
                <ul className="footer__list">
                    { links.map(toNavItem) }
                </ul>
            </nav>
            <div className="footer__section">
                <h2 className="section-category">Contacts</h2>
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
                <h2 className="section-category">Social Media</h2>
                <ul className="footer__list">
                    <li className="paragraph">
                        <a className="footer__list-item-link" href="#facebook.com">FB</a>
                    </li>
                    <li className="paragraph">
                        <a className="footer__list-item-link" href="#instagram.com">IG</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
