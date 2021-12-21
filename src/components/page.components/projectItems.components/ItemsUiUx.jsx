import React from 'react'
import Items from 'components/cards/Items'
import Daniels from 'images/projects-img/ui-projects/daniels.png'
import Listivo from 'images/projects-img/ui-projects/listivo.png'
import PortfolioUI from 'images/projects-img/ui-projects/port-ui.png'
import DominicanUI from 'images/projects-img/ui-projects/project7.png'
import { faFigma } from '@fortawesome/free-brands-svg-icons'

export default function ItemsUiUx() {

    return (
        <div className="container mx-auto px-8 md:px-10 xl:px-20 mt-20">
            <div className="grid md:grid-cols-3 gap-5 xl:gap-7">

                <Items 
                    image={Daniels}
                    name="Jack Daniels UI"
                    
                    //Stacks
                    figma={faFigma}

                    link="View"
                    path={Daniels}

                    source="Download"
                    sample={Daniels}
                />

                <Items 
                    image={Listivo}
                    name="Listivo UI"
                    
                    //Stacks
                    figma={faFigma}

                    link="View"
                    path={Listivo}

                    source="Download"
                    sample={Listivo}
                />

                <Items 
                    image={PortfolioUI}
                    name="Previous Portfolio UI"
                    
                    //Stacks
                    figma={faFigma}

                    link="View"
                    path={PortfolioUI}

                    source="Download"
                    sample={PortfolioUI}
                />

                <Items 
                    image={DominicanUI}
                    name="DR Tribute UI"
                    
                    //Stacks
                    figma={faFigma}

                    link="View"
                    path={DominicanUI}

                    source="Download"
                    sample={DominicanUI}
                />
            </div>
        </div>
    )
}
