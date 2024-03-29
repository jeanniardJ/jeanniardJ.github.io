import { useState } from "react";

export default function Navigator() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (

        <nav className="fixed top-0 left-0 flex md:justify-center w-full min-h-20">
            <div className="md:container md:mx-auto md:px-12 flex justify-between flex-wrap items-center p-5 w-full">
                <h2 className="text-white text-3xl font-black">JJ</h2>
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white hover:text-gray-300 focus:outline-none size-10 btn text-sm"
                    >
                        <span className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div className={`${isMobileMenuOpen ? 'md:flex flex-col items-center mt-2 w-full' : 'max-md:hidden'}`}>
                    <ul className="md:flex md:gap-12 text-white">
                        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-300">About</a></li>
                        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}