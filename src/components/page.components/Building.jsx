import React from 'react'
import Build from 'images/program.svg'

export default function Building() {
    return (
        <div>
            <div className="m-12">
                <div className="container mx-auto py-8 px-4 md:px-20 xl:px-30 mb-20 sm:mb-32 flex flex-col md:flex-row md:justify-between bg-indigo-500">
                    <div className="text-xl text-center md:text-left md:text-2xl font-bold flex justify-center items-center text-white order-2">
                        This section of the page is still being built.
                    </div>
                    <div>
                        <img className="w-80 h-auto order-1 mb-8 md:mb-0" src={Build} />
                    </div>
                </div>
            </div>
        </div>
    )
}
