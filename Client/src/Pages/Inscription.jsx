import React from "react";
import '../Assets/css/inscriptionpage.css'
import Footer from '../Components/Footer'
import InscriptionFormulaire from '../Components/InscriptionFormulaire'



export default function Inscription() {
  return (
    <div className="inscriptionpage">
    <InscriptionFormulaire/>
    <Footer />
    </div>
  );
}

