import React, { useEffect } from "react"
import '../Assets/css/Programme.css'
import Aos from "aos"
import "aos/dist/aos.css"
import img1 from '../Assets/images/forumimg.jpg'
import auditorium from '../Assets/images/auditorium.jpg'
import stand from '../Assets/images/stand.jpg'
import { Link } from 'react-router-dom'


export default function HomeAboutUs() {
    useEffect(() => {
        Aos.init()
    })
    return (
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
                    <Link to="/stand" >
                    <div className="card" >                     
                   
                        <div className="prog-card-container">
                            <img  className='prog-image' src={stand} alt="las vegas" />
                        </div>
                        <div className="details">
                            <h3>Stand</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                        </div>
                    </div>
                    </Link>
                    <Link to="auditorium" >
                    <div className="card"
                      
                    >
                        <div className="prog-card-container">
                            <img  className='prog-image' src={auditorium}   />
                        </div>
                        <div className="details">
                            <h3>Auditorium</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                        </div>
                    </div>
                    </Link>
                    <div
                       
                        className="card">
                        <div className="prog-card-container">
                            <img  className='prog-image' src={img1}   />
                        </div>
                        <div className="details">
                            <h3>Workshop</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

    )

}