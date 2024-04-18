// src/components/Navbar.js
import React from 'react';

function Navbar() {
    return (
        <nav className="bg-blue-500 text-white p-4">
            <ul className="flex justify-between">
                <li>Home</li>
                <li>Dashboard</li>
                <li>About</li>
            </ul>
        </nav>
    );
}

export default Navbar;
