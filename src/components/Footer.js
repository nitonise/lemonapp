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
    return <li><a href={ link.href }>{ link.title }</a></li>;
};


const Footer = () => {
    return (
        <footer>
            <div>
                <a href="#home">
                    <img src="/images/logo_mono_v.svg" alt="logo" />
                </a>
            </div>
            <nav>
                <h2>Doormat Navigation</h2>
                <ul>
                    { links.map(toNavItem) }
                </ul>
            </nav>
            <div>
                <h2>Contacts</h2>
                <ul>
                    <li><a href="#tel:+1234567890">+1234567890</a></li>
                    <li><a href="#mailto:little.lemon@box.com">little.lemon@box.com</a></li>
                    <li><span>Lorem Ipsum Street, 12</span></li>
                </ul>
            </div>
            <div>
                <h2>Social Media</h2>
                <ul>
                    <li><a href="#facebook.com">FB</a></li>
                    <li><a href="#instagram.com">IG</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
