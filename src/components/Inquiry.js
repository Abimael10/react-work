import React from 'react'
import {Link} from 'react-router-dom'

export default function Inquiry() {
    return (
        <div className="container mx-auto mb-20 xl:mb-20 px-8 md:px-24 xl:px-60 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-gray-800 rounded-md w-100 h-auto px-16 py-10 space-y-4 text-center md:text-left">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-xl md:text-4xl font-bold">Work Inquiry</h2>
                    <p className="text-xs md:text-sm">Let's work together!</p>
                </div>

                <div><Link className="px-6 md:px-7 py-2 md:py-3 bg-blue-600 text-sm text-white font-bold rounded-lg" to="/contact">Let's chat!</Link></div>
            </div>
        </div>

    )
}
