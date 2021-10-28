import React from 'react'
import Slider from "react-slick";
import LogoItem from './LogoItem';
import BrandLogos from '../data/sponsors.json'
import "../Assets/css/sponsors.css"
export default function Sponsors() {
  


    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        // eslint-disable-next-line no-dupe-keys
        dots:false
    }
    return (
        <div className="brand-logo-area" style={{ paddingTop: '30px', paddingBottom: '60px',backgroundColor:'white' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Slider {...settings}>
                            {
                                BrandLogos.map(logo => (
                                    <LogoItem key={logo.id} logoSrc={logo.logoSrc} URL={logo.URL} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}