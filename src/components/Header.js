// React.js component using TailwindCSS
import React from 'react';

const NavigationBar = () => {
    return (
        <nav className="bg-gray-900 text-white py-3">
            <div className="w-full">
                {/* Divider */}
                <div className="h-px bg-[#333349] w-full"></div>

                {/* Menu Items */}
                <ul className="flex justify-center space-x-8 text-lg tracking-wide font-medium w-full py-3">
                    <li className="hover:text-gray-400 cursor-pointer">News & Features</li>
                    <li className="hover:text-gray-400 cursor-pointer">Quizzes & Puzzles</li>
                    <li className="hover:text-gray-400 cursor-pointer">J.K. Rowling Archive</li>
                    <li className="hover:text-gray-400 cursor-pointer">Discover</li>
                    <li className="hover:text-gray-400 cursor-pointer">Hogwarts Sorting</li>
                    <li className="hover:text-gray-400 cursor-pointer">Portrait Maker</li>
                    <li className="hover:text-gray-400 cursor-pointer">Wizards of Baking</li>
                    <li className="hover:text-gray-400 cursor-pointer">Fact Files</li>
                    <li className="hover:text-gray-400 cursor-pointer">Shop</li>
                </ul>
            </div>
        </nav>
    );
};

const PromotionalMessage = () => {
    return (
        <div className="text-center text-xs text-gray-400 bg-[#0B163B] py-4 w-full mt-0">
            IT'S DAY 9 OF 12 DAYS OF MAGICAL DEALS! TODAY'S OFFER: <span className="text-white underline cursor-pointer">20% OFF HOUSE FLEECE HOODIES</span>
        </div>
    );
};

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
                {/* Social Icons */}
                <div className="flex gap-4">
                    <img src="/youtube.svg" alt="YouTube" className="w-6 h-6 cursor-pointer" />
                    <img src="/tiktok.svg" alt="TikTok" className="w-6 h-6 cursor-pointer" />
                    <img src="/facebook.svg" alt="Facebook" className="w-6 h-6 cursor-pointer" />
                    <img src="/instagram.svg" alt="Instagram" className="w-6 h-6 cursor-pointer" />
                </div>

                {/* Logo */}
                <div className="text-2xl font-bold">Hugo Lugardi</div>

                {/* Search and Buttons */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <img src="/lupa.svg" alt="🔍" className="w-6 h-6 cursor-pointer" />
                        </button>
                    </div>

                    <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900">Login</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Cadastre-se</button>
                </div>
            </header>
            {NavigationBar()}
            {PromotionalMessage()}
        </>
    );
};

export default Header;