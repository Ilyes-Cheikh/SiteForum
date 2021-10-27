import React from 'react';
import From from '../Components/InscriptionFormulaire';
import ContactInfo from "./ContactInfo";
import '../Assets/css/inscriptionpage.css'
const ContactPage = () => {
    return (
        <div className={'contact-page-area-wrapper sp-y inscriptionpage'}>
            <div className="container">
                <div className="contact-content-wrap">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-form-area contact-method">
                                {/* <h3>Inscrivez vous</h3> */}
                                <From/>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="contact-information contact-method">
                                <div className="contact-info-con">
                                    
                                    <ContactInfo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;