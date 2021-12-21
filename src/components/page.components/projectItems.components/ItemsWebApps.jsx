import React from 'react'
import Items from 'components/cards/Items'
import mlProject from 'images/projects-img/web-apps/ml-front.png'
import WeatherImg from 'images/projects-img/web-apps/weather.jpg'
import BlogTemplate from 'images/projects-img/web-apps/blog-template.jpg'
import Sunny from 'images/projects-img/web-apps/sunny.jpg'
import tipApp from 'images/projects-img/web-apps/tip-app.jpg'
import GitApp from 'images/projects-img/web-apps/gitapp.png'
import { faBootstrap, faCss3, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons'

export default function ItemsMain() {

    return (
        <div className="container mx-auto px-8 md:px-10 xl:px-20 mt-20">
            <div className="grid md:grid-cols-3 gap-5 xl:gap-7">

                <Items 
                    image={GitApp}
                    name="Github user finder"
                    
                    //Stacks
                    html={faHtml5}
                    sass={faSass}
                    js={faJs}

                    link="Visit"
                    path="https://abimael10.github.io/github-users/"

                    source="Source Code"
                    sample="https://github.com/Abimael10/github-users"
                />

                <Items 
                    image={mlProject}
                    name="Image Reco App"
                    
                    //Stacks
                    html={faHtml5}
                    css={faCss3}
                    react={faReact}

                    link="Visit"
                    path="https://abimael10.github.io/what-s-in-there/"

                    source="Source Code"
                    sample="https://github.com/Abimael10/what-s-in-there"
                />

                <Items 
                    image={tipApp}
                    name="Tip Calculation App"

                    //Stacks
                    html={faHtml5}
                    sass={faSass}
                    js={faJs}

                    link="Visit"
                    path="https://abimael10.github.io/tip-calculator-app/"
                    source="Source Code"
                    sample="https://github.com/Abimael10/tip-calculator-app/"
                />

                <Items 
                    image={WeatherImg}
                    name="Weather App"

                    //Stacks
                    html={faHtml5}
                    bootstrap={faBootstrap}
                    js={faJs}

                    link="Visit"
                    path="https://abimael10.github.io/weather/dist/index.html"
                    source="Source Code"
                    sample="https://github.com/Abimael10/weather/"
                />
                <Items 
                    image={BlogTemplate}
                    name="Blog HTML Template"

                    //Stacks
                    html={faHtml5}
                    css={faCss3}
                    bootstrap={faBootstrap}

                    link="Visit"
                    path="https://abimael10.github.io/Blog/"
                    source="Source Code"
                    sample="https://github.com/Abimael10/Blog/"
                />
                <Items 
                    image={Sunny}
                    name="Sunny Landing Page"

                    //Stacks
                    html={faHtml5}
                    sass={faSass}
                    js={faJs}

                    link="Visit"
                    path="https://abimael10.github.io/sunny/"
                    source="Source Code"
                    sample="https://github.com/Abimael10/sunny/"
                />
            </div>
        </div>
    )
}
