import React from 'react'
import { faHeart, faLocationArrow, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Contact from 'images/contact.jpg'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div>
            <div className="container mx-auto mb-20 px-8 md:px-24 xl:px-48">
                <div className="flex flex-col md:flex-row justify-between items-center md:space-x-48">
                    <div className="space-y-6">
                        <div className="flex justify-start items-center space-x-6">
                            <FontAwesomeIcon icon={faLocationArrow} />
                            <h3 className="text-xs">Santo Domingo, DR.</h3>
                        </div>

                        <div className="flex justify-start items-center space-x-6">
                            <FontAwesomeIcon icon={faMailBulk} />
                            <h2 className="font-bold text-sm">Juanabimael@gmail.com</h2>
                        </div>

                        <div className="flex justify-start items-center space-x-6">
                            <FontAwesomeIcon className="text-xl font-medium" icon={faWhatsapp} />
                            <h3 className="text-sm">+1 (829) 876-6206</h3>
                        </div>
                    </div>

                    <div>
                        <img className="w-auto" src={Contact} />
                    </div>
                </div>
            </div>

            <div className="p-8 xl:p-10 bg-gray-800 text-white">
                <div className="container mx-auto xl:px-48">
                    <p className="text-center text-base">Website built with <FontAwesomeIcon icon={faHeart} /> by Juan Abimael Santos Castillo.</p>
                </div>
            </div>
        </div>
        
    )
}
