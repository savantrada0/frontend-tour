import React from "react";

const Header = ({ user }: { user: { photo: string; name: string } }) => {
    return (
        <header className="header">
            <nav className="nav nav--tours">
                <a href="/" className="nav__el">
                    All tours
                </a>
            </nav>
            <div className="header__logo">
                <img src="/img/logo-white.png" alt="Natours logo" />
            </div>
            <nav className="nav nav--user">
                {user ? (
                    <>
                        <a href="" className="nav__el nav__el--logout">
                            Log out
                        </a>
                        <a href="/me" className="nav__el nav__el--logout">
                            <img
                                src={`/img/users/${user.photo}`}
                                alt={`Photo of ${user.name}`}
                                className="nav__user-img"
                            />
                            <span>{user.name.split(" ")[0]}</span>
                        </a>
                    </>
                ) : (
                    <>
                        <a href="" className="nav__el">
                            Log in
                        </a>
                        <a href="/#" className="nav__el nav__el--cta">
                            Sign up
                        </a>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
