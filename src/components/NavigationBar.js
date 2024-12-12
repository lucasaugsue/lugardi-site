// React.js component using TailwindCSS for the navigation bar
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

export default NavigationBar;
