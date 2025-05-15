// src/components/Navbar.tsx
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between w-full max-w-[1200px] bg-transparent mx-auto bg-white border border-black px-6 py-4 rounded-full shadow-md fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            {/* Logo */}
            <div className="w-10 h-10">
                <img
                    src="/src/assets/images/Your%20paragraph%20text.png"
                    alt="logo"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center gap-6">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-black hover:text-purple-600 cursor-pointer transition-colors"
                    activeClass="text-purple-600 font-medium"
                >
                    Home
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="text-black hover:text-purple-600 cursor-pointer transition-colors"
                    activeClass="text-purple-600 font-medium"
                >
                    About
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="text-black hover:text-purple-600 cursor-pointer transition-colors"
                    activeClass="text-purple-600 font-medium"
                >
                    Skills
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="text-black hover:text-purple-600 cursor-pointer transition-colors"
                    activeClass="text-purple-600 font-medium"
                >
                    Projects
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="text-black hover:text-purple-600 cursor-pointer transition-colors"
                    activeClass="text-purple-600 font-medium"
                >
                    Contact
                </Link>
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
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="block py-2 text-black hover:text-purple-600 cursor-pointer transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="block py-2 text-black hover:text-purple-600 cursor-pointer transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className="block py-2 text-black hover:text-purple-600 cursor-pointer transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Skills
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="block py-2 text-black hover:text-purple-600 cursor-pointer transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="block py-2 text-black hover:text-purple-600 cursor-pointer transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;