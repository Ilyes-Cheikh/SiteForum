import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "../Assets/css/homeHeader.css"
import moment from 'moment';


export default function Header() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [showSemicolon, setShowSemicolon] = useState(false);

    useEffect(() => {
        setInterval(() => {
            const now = moment();
            const then = moment('2021-11-3 10:00:00', 'YYYY-MM-DD hh:mm:ss');
            const countdown = moment(then - now);
            setDays(countdown.format('D'));
            setHours(countdown.format('HH'));
            setMinutes(countdown.format('mm'));
            setSeconds(countdown.format('ss'));
        }, 1000);
    }, []);

    return (
        <div>
            <div className="home-header-bg">
                <div className="home-header-overlay">
                    <div className="home-header-content">
                        <div className="edition">
                            <h1 >16ème édition Du Forum Annuel de l'ENSI</h1>
                            <div>
                                <div class="social-links">
                                    <a href='https://www.facebook.com/ENSI.Junior.Entreprise/' target='_blank'><i class="fab fa-facebook-f"></i></a>
                                    <a href='https://www.instagram.com/ensijunior/' target='_blank'><i class="fab fa-instagram"></i></a>
                                    <a  href='https://www.linkedin.com/company/ensi-junior-entreprise/' target='_blank' ><i class="fab fa-linkedin"></i></a>
                                    <a href='https://www.youtube.com/user/ENSIJuniorEntreprise' target='_blank'><i class="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="counter-container">
                            <h2 className="home-header-title">ENSI Junior Entreprise</h2>
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
                            </div>
                            <div>
                                <p className="home-header-slogan">#Always_Striving_For_Greatness</p>
                            </div>
                            <div>
                                <div className="btn" ><Link to="/inscription" className="button" >S'inscrire</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
