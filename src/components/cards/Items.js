import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Items(props) {
    return (
        <div className="p-6 bg-gray-600 text-white rounded text-center">
            <img src={props.image} className="mb-6 w-full h-48" />
            <div className="my-5 space-y-2">
                <div className="text-lg font-medium">{props.name}</div>
                <div className="flex justify-center space-x-2">
                    <FontAwesomeIcon className="text-3xl text-white" icon={props.html} />
                    <FontAwesomeIcon className="text-3xl text-white" icon={props.css} />
                    <FontAwesomeIcon className="text-3xl text-white" icon={props.sass} />
                    <FontAwesomeIcon className="text-3xl text-white" icon={props.bootstrap} />
                    <FontAwesomeIcon className="text-3xl text-white" icon={props.js} />
                    <FontAwesomeIcon className="text-3xl text-white" icon={props.react} />
                    <FontAwesomeIcon className="text-3xl text-white" icon={props.figma} />
                </div>
            </div>
            <div className="space-x-4">
                <a href={props.path} target="__blank" className="px-4 py-2 bg-gray-500 rounded text-sm font-medium text-white">{props.link}</a>
                <a href={props.sample} target="__blank" className="px-4 py-2 bg-gray-500 rounded text-sm font-medium text-white">{props.source}</a>
            </div>
        </div>
    )
}
