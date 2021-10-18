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
                <img src={logo} className="EJE_par_logo" alt="" />
                <div className="EJE_par_description_left">
                    It's a student association affiliated to the national school of computer science (ENSI) aiming for professionalism
                    through its projects, trainings and events. ENSI Junior Enterprise is a non-profit organization providing students with the opportunity to benefit from their skills in a new professional experience..
                </div>
                <div className="EJE_par_description_right">
                    Since 2006 we have gained experience and expertise,always driven by a wide range of knowhow,skills and enterpreneurship.
                    We have been able to win the satisfaction of our members through educational courses,technical projects and events and
                    put in practice the theoretical training they receive at the ENSI.
                </div>
            </div>
            </Paper> 
        </div>
    )
}

export default EJEpar
