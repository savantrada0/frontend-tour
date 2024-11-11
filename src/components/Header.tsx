import { Link } from "react-router-dom";

interface userType {
    photo: string; 
    name: string;
}

type HeaderProps = {
    user?: userType
}

const Header = ({ user }: HeaderProps) => {
    return (
        <header className="header">
            <nav className="nav nav--tours">
                <Link to="/overview" className="nav__el">
                    All tours
                </Link>
          <button className="nav__search-btn">
            <svg>
              <use xlinkHref="img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
            />
        

            </nav>
            <div className="header__logo">
                <img src="../assets/img/logo-white.png" alt="Natours logo" />
            </div>
            <nav className="nav nav--user">
                {user ? (
                    <>
                    <Link to="/" className="nav__el">My bookings</Link>
                        <Link to="/" className="nav__el nav__el--logout">
                            Log out
                        </Link>                    <Link to="/me" className="nav__el nav__el--logout">
                            <img
                                src={`/img/users/${user.photo}`}
                                alt={`Photo of ${user.name}`}
                                className="nav__user-img"
                            />
                            <span>{user.name.split(" ")[0]}</span>
                        </Link>                 </>
                ) : (
                    <>
                        <Link to="" className="nav__el">
                            Log in
                        </Link>                     <Link to="/#" className="nav__el nav__el--cta">
                            Sign up
                        </Link>                </>
                )}
            </nav>
        </header>
    );
};

       
export default Header;
