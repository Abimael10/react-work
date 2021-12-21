import { faFigma, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import CardBlue from 'components/cards/CardBlue'
import CardDark from 'components/cards/CardDark'

export default function Projects() {
    return (
        <div className="container mx-auto px-8 md:px-24 xl:px-48 mb-20 sm:mb-32">
            <div className="grid md:grid-cols-2 gap-5 xl:gap-7">
                <CardBlue 
                    skill='Automation'
                    example='Tools to avoid boring repetition.'
                    button='See projects'
                    logo={faPython}
                    Link="/automation"
                />
                <CardDark 
                    skill='Web Applications'
                    example='Web Apps for all purposes.'
                    button='See projects'
                    logo={faReact}
                    Link="/webapps"
                />
                <CardDark 
                    skill='UI/UX Design'
                    example='UI/UX Designs for all kinds of applications.'
                    button='See projects'
                    logo={faFigma}
                    Link="/uiux"
                />
                <CardBlue 
                    skill='Quality Assurance'
                    example='Tools to improve testing on your web apps.'
                    button='See projects'
                    logo={faJava}
                    Link='/qa'
                />
            </div>
        </div>
    )
}
