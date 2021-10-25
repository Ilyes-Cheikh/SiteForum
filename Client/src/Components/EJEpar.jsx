import React from 'react'
import '../Assets/css/ejepar.css'
import logo from '../Assets/images/EJE + Text.png'
import Paper from '@material-ui/core/Paper';
import Slide from 'react-reveal/Slide';
const EJEpar = () => {
    return (
        <Slide left>
        <div className="EJE_par" >
            <Paper  className="paper" elevation={3}>
            <div className="EJE_par_title">
                C'est quoi l'EJE ?
            </div>
            <div className="EJE_par_description">
                <img src={logo} className="EJE_par_logo" />
                <div className="EJE_par_description_left">
                Fondée en 2006, l’ENSI Junior Entreprise est une association étudiante,
inscrite au journal officiel de la république Tunisienne depuis 2011 et affilée
à l’école nationale des sciences de l’informatique, ayant pour finalité
l’initiation des étudiants tunisiens à la vie professionnelle. Et ce à travers l’
élaboration des activités basées sur trois axes principaux : Les formations,
les événements et la réalisation des projets dans le domaine des
TIC.
S’alignant avec le concept de base du mouvement Junior-Entreprise,
notre mission principale est de réaliser des projets à plus-value
pédagogique et économique dans le domaine des technologies de
l’information et de la communication.
TIC.                                </div>
                <div className="EJE_par_description_right">
                En outre, nous nous dotons, évidemment, de la responsabilité de
promouvoir l’esprit entrepreneurial dans l’écosystème Tunisien à
travers nos activités notamment nos événements qui fortifient le lien
étudiant-entreprise donnant ainsi aux étudiants le goût
d’entreprendre et l’envie de s’investir dans un projet qui leur est
propre. 
Ensemble, avec le soutien de nos partenaires, nous sommes en mesure de progresser ,d'avancer et de réussir à préserver les 16 ans d’excellence qui a toujours représenté l’état
d’esprit et le destin de cette entité.
                </div>
            </div>
            </Paper> 
        </div>
        </Slide>
    )
}

export default EJEpar
