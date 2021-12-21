import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function OnProcess() {
    return (
        <div className="m-10 text-center">
            <div className="px-8 py-8 bg-gray-700 text-white rounded space-y-6">
                <div>New projects for this category are going to be added soon! Stay tuned!</div>
                <FontAwesomeIcon className="text-xl" icon={faUpload} />
            </div>
        </div>
    )
}
