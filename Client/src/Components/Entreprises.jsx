import React from 'react';
import '../Assets/css/entreprises.css'
import Zoom from 'react-reveal/Zoom';
import img1 from '../Assets/images/sponsors/AxeFinance.png'
import img2 from '../Assets/images/sponsors/habemus.png'
import img3 from '../Assets/images/sponsors/minotore.png'
import img4 from '../Assets/images/sponsors/value.png'
import img5 from '../Assets/images/sponsors/Linedata_Logo.png'
import img6 from '../Assets/images/hli.png'


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
                    
                </div>
            </div>
        </section>
    )
}