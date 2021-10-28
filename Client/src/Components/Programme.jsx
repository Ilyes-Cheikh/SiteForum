import React, { useEffect } from "react"
import '../Assets/css/Programme.css'
import Aos from "aos"
import "aos/dist/aos.css"
import Workshop from '../Assets/images/workshop.jpg'
import auditorium from '../Assets/images/auditorium.jpg'
import stand from '../Assets/images/stand.jpg'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';

export default function HomeAboutUs() {
    useEffect(() => {
        Aos.init()
    })
    return (
        <Zoom>
        <div className="about-section">
            <div className="about">
                <div className="about-title"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >Programme</div>
                <div className="about-container">
                    <div
                        className="about-text"
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">

                    </div>
                </div>
            </div>
            <div className="services">
                <div className="cards">
                    <Link to="/stand" className="link">
                        <div className="card" >

                            <div className="prog-card-container">
                                <img className='prog-image' src={stand} alt="las vegas" />
                            </div>
                            <div className="details">
                                <h3>Stand</h3>
                                <p>Des stands d'exposition d'entreprises les plus prestigieuses seront à votre disposition pour toute renseignement et pour des entretiens de stage, de PFE ou d'embauchement.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="auditorium" className="link">
                        <div className="card"

                        >
                            <div className="prog-card-container">
                                <img className='prog-image' src={auditorium} alt=""/>
                            </div>
                            <div className="details">
                                <h3>Auditorium</h3>
                                <p>Une conference animée par des conférenciers de haut calibre aura lieu pour discuter le thème du forum.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="Workshop" className="link">
                        <div className="card">
                            <div className="prog-card-container">
                                <img className='prog-image' src={Workshop} alt=""/>
                            </div>
                            <div className="details">
                                <h3>Workshop</h3>
                                <p>Un atelier de travail organisé par nos partenaires, qui s'axe sur le théme du forum.</p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
        </Zoom>
    )

}