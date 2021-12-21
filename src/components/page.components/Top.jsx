import React from 'react'
import { Link } from 'react-router-dom'

export default function Top() {
    return (
        <div>
            <div id="nav" className="px-6 py-6 border-b-2">
                <div className="container mx-auto flex">
                    <Link to="/" className="px-3 py-2 bg-gray-700 text-white rounded">Go back</Link> 
                </div>
            </div>
        </div>
    )
}
