import { Link } from 'react-router-dom';

const links = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About',
        href: '#about',
    },
    {
        title: 'Menu',
        href: '#menu',
    },
    {
        title: 'Reservations',
        href: '/book-a-table',
    },
    {
        title: 'Order Online',
        href: '#order-online',
    },
    {
        title: 'Login',
        href: '#login',
    },
];

const Nav = () => {

    const toNavItem = (link) => {
        return (
            <li key={ link.title }>
                <Link className='nav__item-link' to={ link.href }>{ link.title }</Link>
            </li>
        );
    };

    return (
        <nav className='nav section-category'>
            <ul className='nav__items'>{ links.map(toNavItem) }</ul>
        </nav>
    );
}

export default Nav;
