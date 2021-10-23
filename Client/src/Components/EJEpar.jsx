import React from 'react'
import '../Assets/css/ejepar.css'
import logo from '../Assets/images/EJE + Text.png'
import Paper from '@material-ui/core/Paper';
const EJEpar = () => {
    return (
        <div className="EJE_par" >
            <Paper  className="paper" elevation={3}>
            <div className="EJE_par_title">
                C'est quoi l'EJE ?
            </div>
            <div className="EJE_par_description">
                <img src={logo} className="EJE_par_logo" />
                <div className="EJE_par_description_left">
                Une association étudiante affiliée à l'école nationale d'informatique (ENSI) visant le professionnalisme à travers ses projets, ses formations et ses événements
                                </div>
                <div className="EJE_par_description_right">
                Association à but non lucratif offrant aux étudiants la possibilité de mettre leurs compétences au service d'une nouvelle expérience professionnelle. 
On travaille sur 3 axes qui sont : projet, formation et évènementiel qui sont assurés par 3 pôles qui sont : communication et media, développement commerciale et projet.
                </div>
            </div>
            </Paper> 
        </div>
    )
}

export default EJEpar
