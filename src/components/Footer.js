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
    return <li key={ link.title }><a href={ link.href }>{ link.title }</a></li>;
};


const Footer = () => {
    return (
        <footer>
            <img width="100" src="/img/logo_mono_v.svg" />
            <nav>
                <h2>Navigation</h2>
                <ul>{ links.map(toNavItem) }</ul>
            </nav>
            <div>
                <h2>Contacts</h2>
                <a href="#tel:+1234567890">+1234567890</a>
                <a href="#mailto:little.lemon@box.com">little.lemon@box.com</a>
                <p>Lorem Ipsum Street, 12</p>
            </div>
            <div>
                <h2>Social Media</h2>
                <a href="#facebook.com">FB</a>
                <a href="#instagram.com">IG</a>
            </div>
        </footer>
    );
};

export default Footer;

