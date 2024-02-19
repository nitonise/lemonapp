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

const Nav = () => {

    const toNavItem = (link) => {
        return (
            <li key={ link.title }>
                <a className="nav__item-link" href={ link.href }>{ link.title }</a>
            </li>
        );
    };

    return (
        <nav className="nav section-category">
            <ul className="nav__items">{ links.map(toNavItem) }</ul>
        </nav>
    );
}

export default Nav;
