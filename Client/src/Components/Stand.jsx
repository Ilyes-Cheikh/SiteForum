import react from 'react'
import '../Assets/css/Auditorium.css' 
import ouverture from '../Assets/images/motouvert.jpg'
import pause from '../Assets/images/pause.jpg'
import stand1 from '../Assets/images/stand1.jpg'
import stand2 from '../Assets/images/stand2.jpg'
import cloture from '../Assets/images/forumimg.jpg'

export default function Stand() {
    return(
        <div className="autitoriumpage">
        <section id="timeline">
        <h1>Programme</h1>
        <p class="leader">Stand</p>
        <div class="demo-card-wrapper">
            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        <span>08h30</span>
                    </div>
                    <h2> Mot d'ouverture</h2>
                </div>
                <div class="body">
                  
                    <img src={ouverture} alt="Ouverture"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step2">
                <div class="head">
                    <div class="number-box">
                    
                    </div>
                    <h2>Exposition des stands</h2>
                </div>
                <div class="body">
                   
                    <img src={stand1} alt="Stand"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        
                    </div>
                    <h2> Pause déjeuner </h2>
                </div>
                <div class="body">
                  
                    <img src={pause} alt="Pause_dejeuner"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step2">
                <div class="head">
                    <div class="number-box">
                        <span></span>
                    </div>
                    <h2> Exposition des stands</h2>
                </div>
                <div class="body">
                   
                    <img src={stand2} alt="Stand"/>
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
                  
                    <img src={cloture} alt="Cloture"/>
                </div>
            </div>
        
        </div>
    </section>
        </div>
    )
}