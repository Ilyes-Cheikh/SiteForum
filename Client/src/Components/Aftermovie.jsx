import React from 'react'
import '../Assets/css/aftermovie.css'
import ReactPlayer from 'react-player'
import logo from '../Assets/images/logo.png'
import ensi from '../Assets/images/WhiteEnsiLogo.png'
const Aftermovie = () => {
    return (
        <div className="Video-container">
            <div className="Video-title"><h1 className="fh1">Aftermovie de la <span className="vidspan">14ème</span> édition</h1></div>
            <img src={logo} className="EJE_video_logo" />
            <img src={ensi} className="ENSI_video_logo"/>
            <div className="Text_slog"><h2 className='fh2'><span className="Hashtag">#</span>Always_Striving_For_Greatness</h2></div>
            <div className="Video">
            <div className="vl"></div>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=r-TlWc2jeDo'
                        width='100%'
                        height='100%'
                        controls='true'
                    />
                </div>
            </div>
        </div>
    )
}

export default Aftermovie
