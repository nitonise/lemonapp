import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <div>
                <a href="#home">
                    <img src="/images/logo.svg" alt="logo" />
                </a>
            </div>
            <Nav />
        </header>
    );
};

export default Header;
