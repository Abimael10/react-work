import React from 'react'
import {useState, useEffect} from 'react'
import Navbar from 'components/Navbar'
import Showcase from 'components/Showcase'
import Projects from 'components/Projects'
import Inquiry from 'components/Inquiry'
import Footer from 'components/Footer'
import Dropdown from 'components/Dropdown'

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const hideMenu = () => {
        if(window.innerWidth > 768 && isOpen) {
            setIsOpen(false)
        }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
        window.removeEventListener('resize', hideMenu)
        }
    })

    return (
        <div>
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Showcase />
            <Projects />
            <Inquiry />
            <Footer />
        </div>
    )
}
