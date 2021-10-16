import react from 'react'
import '../Assets/css/Auditorium.css' 
import ouverture from '../Assets/images/motouvert.jpg'
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src={ouverture} alt="Graphic"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step2">
                <div class="head">
                    <div class="number-box">
                        <span>10h</span>
                    </div>
                    <h2>Présentation des entreprises</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src="http://placehold.it/1000x500" alt="Graphic"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        <span>13h</span>
                    </div>
                    <h2> Table Ronde</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src="http://placehold.it/1000x500" alt="Graphic"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step2">
                <div class="head">
                    <div class="number-box">
                        <span>17h</span>
                    </div>
                    <h2> Mot de clôture </h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src="http://placehold.it/1000x500" alt="Graphic"/>
                </div>
            </div>
    
            <div class="demo-card demo-card--step2">
                <div class="head">
                    <div class="number-box">
                        <span>05</span>
                    </div>
                    <h2><span class="small">Subtitle</span> Conversion</h2>
                </div>
                <div class="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src="http://placehold.it/1000x500" alt="Graphic"/>
                </div>
            </div>
        
        </div>
    </section>
        </div>
    )
}