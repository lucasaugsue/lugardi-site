// React.js component using TailwindCSS
import React from 'react';

const Header = () => {
    return (
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
    );
};

export default Header;