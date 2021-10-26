import React from 'react';
import '../Assets/css/entreprises.css'
import Zoom from 'react-reveal/Zoom';
import img1 from '../Assets/images/AxeFinance.png'
import img2 from '../Assets/images/partenaires/cognira.jpg'
import img3 from '../Assets/images/habumus.png'
import img4 from '../Assets/images/logo-infor.png'
import img5 from '../Assets/images/machinestalk.png'
import img6 from '../Assets/images/Minotore.png'
import img7 from '../Assets/images/talan.png'
import img8 from '../Assets/images/value.png'
import img9 from '../Assets/images/Linedata_Logo.png'
import img10 from '../Assets/images/hli.png'


export default function Entreprises() {
    return (
        <section id="partners">
           
            <div className="partners">
                <div className="box">
                    <span style={{ "--i": 1 }}><img src={img1} /></span>
                    <span style={{ "--i": 2 }}><img src={img2} /></span>
                    <span style={{ "--i": 3  }}><img src={img3} /></span>
                    <span style={{ "--i": 4 }}><img src={img4} /></span>
                    <span style={{ "--i": 5 }}><img src={img5} /></span>
                    <span style={{ "--i": 6 }}><img src={img6} /></span>
                    <span style={{ "--i": 7 }}><img src={img7} /></span>
                    <span style={{ "--i": 8 }}><img src={img8} /></span>
                    <span style={{ "--i": 9 }}><img src={img9} /></span>
                    <span style={{ "--i": 10}}><img src={img10} /></span>
                </div>
            </div>
        </section>
    )
}