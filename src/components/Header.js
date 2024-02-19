import Nav from "./Nav";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <a className="header__logo-link" href="#home">
                    <img className="header__logo-img" src="/images/logo.svg" alt="logo" />
                </a>
            </div>
            <Nav />
        </header>
    );
};

export default Header;
