import { Link, NavLink } from "react-router";
import { navLinks } from "../../../constants/main";

const Header = () => {
    return (
        <header className="fixed top-0 w-full py-2 z-50">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <ul className="flex items-center gap-20">
                        {navLinks?.slice(0, navLinks?.length / 2).map((navLink) => {
                            return (
                                <li className="relative group">
                                    <NavLink
                                        to={navLink?.href}
                                        className={({ isActive }) =>
                                            isActive ? "nav-link text-primary" : "nav-link"
                                        }
                                    >
                                        {navLink?.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <Link to="/">
                        <img src={'/images/logo.png'} alt="D8 Fitness" height={80} width={80} className="h-20 w-20 aspect-square" />
                    </Link>
                    <ul className="flex items-center gap-20">
                        {navLinks?.slice(navLinks?.length / 2, navLinks?.length).map((navLink) => {
                            return (
                                <li className="relative group">
                                    <NavLink
                                        to={navLink?.href}
                                        className={({ isActive }) =>
                                            isActive ? "nav-link text-primary" : "nav-link"
                                        }
                                    >
                                        {navLink?.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;