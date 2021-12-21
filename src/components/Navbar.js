import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
        <nav className="container flex justify-between items-center mx-auto px-8 py-6">
            <div className="text-2xl xl:text-3xl font-concert"><Link to="/">Juan Santos</Link></div>

            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
            <ul className="flex text-sm font-medium space-x-12 md:flex hidden">
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link className="px-6 py-2 bg-gray-600 text-white rounded" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
