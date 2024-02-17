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

const Header = () => {
    return (
        <header>
            <img src="/images/logo.svg" alt="logo" />
            <nav>
                <ul>{ links.map(toNavItem) }</ul>
            </nav>
        </header>
    );
};

export default Header;
