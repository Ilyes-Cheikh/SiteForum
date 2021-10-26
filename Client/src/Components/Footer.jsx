import react from 'react'
import { Link } from 'react-router-dom'
import '../Assets/css/footer.css'
import logo from '../Assets/images/logoFooter.png'
import Fb from '../Assets/images/footer/Facebook.png'
import Insta from '../Assets/images/footer/Instagram.png'
import LinkedIn from '../Assets/images/footer/Linkedin.png'
import Youtube from '../Assets/images/footer/Youtube.png'


export default function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-logo-container">
                <img src={logo} />
            </div>
            <div className="footer-col">
                <h3>Explorer</h3>
                <Link to='/' className='link'> <p>Accueil</p> </Link>
                <Link to='/programme' className='link'><p>Programme</p></Link>
                <Link to='/articles' className='link'> <p>Articles</p> </Link>
                <Link to='/inscription' className='link'> <p>Inscription</p> </Link>
            </div>
            <div className="footer-col">

                <h3>Nous contacter</h3>
                <div className="logo-info">
                    
                    <p><i class="fas fa-phone-alt"></i> +216 23 720 944</p>
                </div>
                <div className="logo-info">
                    
                    <p><i class="fas fa-envelope"></i> contact.junior.ensi@gmail.com</p>
                </div>
                <h3>Rendez nous visite</h3>
                <div className="logo-info" >
                   
                    <p><i class="fas fa-map-marker-alt"></i> Campus Universitaire de La Manouba, Manouba 2010
                    </p>
                </div>
            </div>
            <div className="footer-col">
                <h3 >Suivez-nous</h3>
                <div className="social-media">
                    <a href='https://www.instagram.com/ensijunior/' target='_blank' className='link'> <img src={Insta} alt='Instagram' className='socialmedia-logo' /> </a>
                    <a href='https://www.facebook.com/ENSI.Junior.Entreprise/' target='_blank' className='link'> <img src={Fb} alt='facebook' className='socialmedia-logo' /> </a>
                    <a href='https://www.linkedin.com/company/ensi-junior-entreprise/' target='_blank' className='link'> <img src={LinkedIn} alt='Linkedin' className='socialmedia-logo' /> </a>
                    <a href='https://www.youtube.com/user/ENSIJuniorEntreprise' target='_blank' className='link'> <img src={Youtube} alt='Youtube' className='socialmedia-logo' /> </a>
                </div>
            </div>
        </div>
    )
}