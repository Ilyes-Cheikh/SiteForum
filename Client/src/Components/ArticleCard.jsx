import React from 'react'
import "../Assets/css/articles.css"
import { Link } from "react-router-dom"
import {
    FacebookShareButton, LinkedinShareButton, TwitterShareButton, FacebookIcon, LinkedinIcon, TwitterIcon
} from "react-share";


export default function ArticleCard(props) {
    const img = `/uploads/${props.image}`
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div>
            <div className="article-card">
                <div className="thumbnail"><img className="articlesImage" src={img} alt="" /></div>
                <div className="articlesContent">
                    <h1 className="articlesTitle">{props.title}</h1>
                    <div className="separator"></div>
                    <div dangerouslySetInnerHTML={{ __html: props.content.length > 100 ? props.content.substring(0, 350) + '...' : props.content }} className="articlesText"></div>
                </div>
                <div className="share">
                    <FacebookShareButton url={`https://ensi-junior-entreprise.net/${props.id}`} >
                        <FacebookIcon logoFillColor="white" round={true} size={30} className="socialicon"></FacebookIcon>
                    </FacebookShareButton>

                    <LinkedinShareButton url={`https://ensi-junior-entreprise.net/${props.id}`} >
                        <LinkedinIcon logoFillColor="white" round={true} size={30} className="socialicon"></LinkedinIcon>
                    </LinkedinShareButton>

                    <TwitterShareButton url={`https://ensi-junior-entreprise.net/${props.id}`} >
                        <TwitterIcon logoFillColor="white" round={true} size={30} className="socialicon"></TwitterIcon>
                    </TwitterShareButton>
                </div>

                <div className="articlesButton" onClick={scrollToTop}>
                    <a  href={`https://ensi-junior-entreprise.net/${props.id}`}  target='_blank'>Read more </a>

                </div>

            </div>
        </div>
    )
}
