import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link className="header__logo-link" to="/">
                    <img className="header__logo-img" src="/images/logo.svg" alt="logo" />
                </Link>
            </div>
            <Nav />
        </header>
    );
};

export default Header;
