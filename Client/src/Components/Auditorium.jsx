import react from 'react'
import '../Assets/css/Auditorium.css' 
import ouverture from '../Assets/images/motouvert.jpg'
import pause from '../Assets/images/pause.jpg'
import tableronde from '../Assets/images/tableronde.jpg'
import cloture from '../Assets/images/forumimg.jpg'
import presentreprises from '../Assets/images/presentreprises.jpg'
export default function Auditorium () {
    return(
        <div className="autitoriumpage">
        <section id="timeline">
        <h1>Programme</h1>
        <p class="leader">Auditorium</p>
        <div class="demo-card-wrapper">
            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        <span>08h30</span>
                    </div>
                    <h2> Mot d'ouverture</h2>
                </div>
                <div class="body">
                  
                    <img src={ouverture} alt="Graphic"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step2">
                <div class="head">
                    <div class="number-box">
                    
                    </div>
                    <h2>Présentation des entreprises</h2>
                </div>
                <div class="body">
                   
                    <img src={presentreprises} alt="Graphic"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        
                    </div>
                    <h2> Pause déjeuner </h2>
                </div>
                <div class="body">
                  
                    <img src={pause} alt="Graphic"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step2">
                <div class="head">
                    <div class="number-box">
                        <span></span>
                    </div>
                    <h2> Table ronde </h2>
                </div>
                <div class="body">
                   
                    <img src={tableronde} alt="Graphic"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        <span>17h</span>
                    </div>
                    <h2> Clôture</h2>
                </div>
                <div class="body">
                  
                    <img src={cloture} alt="cloture"/>
                </div>
            </div>
        
        </div>
    </section>
        </div>
    )
}