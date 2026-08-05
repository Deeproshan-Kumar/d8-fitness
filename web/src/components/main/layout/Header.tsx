import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { ChevronDown, LogIn } from "lucide-react";
import { navLinks } from "../../../constants/main";
import { Button } from "../../main/ui";

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "py-2"
                : "py-4"
                }`}
        >
            <div className="container">
                <nav className="center-y justify-between">
                    <Link to="/" className="center-y">
                        <img
                            src="/images/logo.png"
                            alt="D8 Fitness"
                            className={`aspect-square object-contain transition-all duration-300 ${isScrolled ? "h-14 w-14" : "h-18 w-18"
                                }`}
                        />
                    </Link>

                    <ul className="hidden lg:flex items-center gap-10">
                        {navLinks?.map((navLink) => {
                            const hasChildren = !!(navLink.children && navLink.children.length > 0);
                            return (
                                <li key={navLink.id} className="relative group py-4">
                                    <NavLink
                                        to={navLink.href}
                                        className={({ isActive }) =>
                                            `nav-link ${isActive
                                                ? "text-primary font-medium"
                                                : "text-body hover:text-heading"
                                            }`
                                        }
                                    >
                                        {navLink.title}
                                        {hasChildren && (
                                            <ChevronDown size={14} strokeWidth={2} className="inline-block opacity-60 ml-0.5 group-hover:rotate-180 transition-transform duration-300" />
                                        )}
                                    </NavLink>
                                    {hasChildren && navLink.children && (
                                        <div className="submenu-wrapper">
                                            <img src={'/images/logo.png'} alt="D8 fitness" className="h-22.5 w-22.5" />
                                            <ul className="submenu">
                                                {navLink.children.map((child) => (
                                                    <li key={child.id}>
                                                        <NavLink
                                                            to={child.href}
                                                            className={({ isActive }) =>
                                                                `nav-link ${isActive
                                                                    ? "text-primary"
                                                                    : "text-body"
                                                                }`
                                                            }
                                                        >
                                                            {child.title}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                        <Button size="lg" variant="primary">
                            <Link to="/login">Join Now <LogIn size={16} strokeWidth={2} className="inline-block ml-0.5" /></Link>
                        </Button>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;