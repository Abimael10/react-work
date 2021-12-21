import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Coding from 'images/coding.svg'
import Blob from 'images/blob.svg'
import {Link} from 'react-router-dom'


export default function Showcase() {
    return (
        <div className="container mx-auto mt-16 xl:mt-8 mb-32 xl:mb-48 px-8 flex flex-col sm:flex-row justify-between space-y-5 md:space-x-48 md:items-end">


            {/*SOCIAL ICONS*/}
            <div className="flex flex-col px-2 py-1 xl:px-3 xl:py-2 rounded bg-gray-200 space-y-3 md:text-2xl xl:text-3xl text-gray-600 hidden md:flex md:fixed">
                <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>

            {/*Identity*/}
            <div className="flex flex-col justify-between items-center sm:items-end xl:items-start text-center sm:text-right xl:text-left space-y-4">
                <div className="font-roboto text-3xl xl:text-4xl">Juan Abimael Santos</div>
                <div className="font-medium md:text-base xl:text-lg">Software Engineer</div>
                <div className="text-gray-500 md:text-sm xl:text-base">
                    Professional Software Engineer with a focus on building solutions to solve problems.
                </div>
                <Link className="px-6 py-2 bg-gray-600 text-white rounded" to="/contact">Let's chat!</Link>
            </div>

            {/*Ilustration*/}
            <div className="hidden xl:block">
                <img className="" src={Blob} />
                <img className="sm:-mt-96" src={Coding} />
            </div>
        </div>
    )
}
