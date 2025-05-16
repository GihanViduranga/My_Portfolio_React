import { useState } from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // NavLink styles for active state
    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        `transition-colors cursor-pointer ${
            isActive
                ? 'text-purple-600 font-medium'
                : 'text-black hover:text-purple-600'
        }`;

    return (
        <nav className="flex items-center justify-between w-full max-w-[1200px] bg-transparent mx-auto bg-white border border-black px-6 py-4 rounded-full shadow-md fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            {/* Logo */}
            <div className="w-10 h-10">
                <img
                    src="../../src/assets/images/Logo.png"
                    alt="logo"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center gap-6">
                <NavLink
                    to="/"
                    className={linkClasses}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={linkClasses}
                >
                    About
                </NavLink>
                <NavLink
                    to="/skills"
                    className={linkClasses}
                >
                    Skills
                </NavLink>
                <NavLink
                    to="/projects"
                    className={linkClasses}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className={linkClasses}
                >
                    Contact
                </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-black focus:outline-none"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 py-2 px-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block py-2 transition-colors cursor-pointer ${
                                isActive
                                    ? 'text-purple-600 font-medium'
                                    : 'text-black hover:text-purple-600'
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `block py-2 transition-colors cursor-pointer ${
                                isActive
                                    ? 'text-purple-600 font-medium'
                                    : 'text-black hover:text-purple-600'
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={({ isActive }) =>
                            `block py-2 transition-colors cursor-pointer ${
                                isActive
                                    ? 'text-purple-600 font-medium'
                                    : 'text-black hover:text-purple-600'
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `block py-2 transition-colors cursor-pointer ${
                                isActive
                                    ? 'text-purple-600 font-medium'
                                    : 'text-black hover:text-purple-600'
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `block py-2 transition-colors cursor-pointer ${
                                isActive
                                    ? 'text-purple-600 font-medium'
                                    : 'text-black hover:text-purple-600'
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default NavBar;