import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

export default function CardDark(props) {
    return (
        <div className="flex justify-between w-100 h-auto bg-gray-700 rounded-md p-8 xl:p-12 text-white space-x-2">

            <div className="flex flex-col justify-center items-start space-y-3 w-3/5">
                <h2 className="text-base xl:text-xl font-bold">{props.skill}</h2>

                <p className="text-xs font-light text-gray-100">{props.example}</p>

                <Link to={props.Link} className="px-4 py-2 bg-gray-500 rounded text-sm font-medium text-white">{props.button}</Link>
            </div>

            <div className="flex justify-center items-center">
                <FontAwesomeIcon className="text-7xl" icon={props.logo} />
            </div>
        </div>
    )
}
