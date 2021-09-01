import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className = 'navbar navbar-expand-lg bg-dark py-2 px-5'>
            <Link to = "/" className="navbar-brand text-white">myContact</Link>
        </nav>
    )
}
