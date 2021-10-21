import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "../Assets/css/homeHeader.css"
import moment from 'moment';
import logo from "../Assets/images/logo.png"


export default function Header() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [showSemicolon, setShowSemicolon] = useState(false);
    const [finish, setFinish] = useState(false)

    useEffect(() => {
            setInterval(() => {
                const then = moment('2021-11-03 08:30:00', 'YYYY-MM-DD hh:mm:ss');
                const now = moment();
                const countdown = moment(then - now);
                if (now >= then){
                    setDays(0)
                    setHours(0)
                    setMinutes(0)
                    setSeconds(0)
                    setFinish(true)
                }
                else{
                setDays(countdown.format('D')-1);
                setHours(countdown.format('HH')-1);
                setMinutes(countdown.format('mm'));
                setSeconds(countdown.format('ss'));
                }
            }, 1000);
    },[]);

    return (
        <div>
            <div className="home-header-bg">
                <div className="home-header-overlay">
                    <div className="home-header-content">
                        <div className="edition">
                            <h1 >16ème édition Du Forum Annuel de l'ENSI</h1>
                            <div>
                                <div class="social-links">
                                    <a href="https://www.facebook.com/ENSI.Junior.Entreprise/"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/ensijunior/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/company/ensi-junior-entreprise/"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://www.youtube.com/user/ENSIJuniorEntreprise"><i class="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="counter-container">
                            <h2 className="home-header-title">ENSI Junior Entreprise</h2>
                            {!finish &&
                            <div className="timer-container">
                                <div className="timer">
                                    {days}
                                    <span>Jours</span>
                                </div>
                                {showSemicolon ? <div className="semicolon">:</div> : null}
                                <div className="timer">
                                    {hours}
                                    <span>Heures</span>
                                </div>
                                {showSemicolon ? <div className="semicolon">:</div> : null}
                                <div className="timer">
                                    {minutes}
                                    <span>Minutes</span>
                                </div>
                                {showSemicolon ? <div className="semicolon">:</div> : null}
                                <div className="timer">
                                    {seconds}
                                    <span>Secondes</span>
                                </div>

                            </div>}
                            {finish && 
                            <img src={logo} className="header-logo"/>}
                            <div>
                                <p className="home-header-slogan">Always striving for greatness</p>
                            </div>
                            <div>
                                <div className="btn"><Link to="/inscription" className="button">S'inscrire</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
