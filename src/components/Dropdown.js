import React from 'react'
import {Link} from 'react-router-dom'

export default function Dropdown({isOpen, toggle}) {
    return (
        <div>
            <ul className={isOpen ? 'grid grid-rows-4 text-center items-center bg-gray-700 space-y-6 text-white': 'hidden'} onClick={toggle}>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a className="px-6 py-2 bg-gray-600 text-white rounded" href="#">Contact</a></li>
            </ul>
        </div>
    )
}
