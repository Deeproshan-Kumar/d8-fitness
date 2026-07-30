import { Link, NavLink } from "react-router";
import { navLinks } from "../../../constants/main";
import { Button } from "../ui";

export const Menu: React.FC = () => {
    return (
        <ul className="flex items-center gap-6">
            {navLinks?.map((navLink) => {
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

                        {navLink?.children && (
                            <ul className="flex flex-col gap-2 bg-tertiary absolute top-full left-0 min-w-35 rounded-sm translate-y-10 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto overflow-hidden transition-all duration-300 origin-top p-2.5">
                                {navLink.children.map((child) => (
                                    <li className="relative" key={child?.id}>
                                        <NavLink
                                            to={child?.href}
                                            className={({ isActive }) =>
                                                isActive ? "nav-link text-primary" : "nav-link"
                                            }
                                        >
                                            {child?.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                )
            })}
            <Button size="lg">
                <Link to="/login">Join Today</Link>
            </Button>
        </ul>
    )
}

const Header = () => {
    return (
        <header className="sticky top-0 w-full border-b border-border bg-transparent backdrop-blur-sm py-2.5">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link to="/" className="logo">D8.Fitness</Link>
                    <Menu />
                </nav>
            </div>
        </header>
    )
}

export default Header;