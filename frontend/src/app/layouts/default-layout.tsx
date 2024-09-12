// components/Layout.js
import React, { useState } from 'react';
import NavBar from '../nav-bar/nav-bar';
import '../globals.css';

export default function DefaultLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [items, setItems] = useState(['SHOP', 'RECIPES', 'LEARN', 'ABOUT', 'BLOG']);

    return (
        <div>
            <header>
                <NavBar items={items}></NavBar>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <p>© 2024 An Pham</p>
            </footer>
        </div>
    );
}

