import React from 'react'
import "../Assets/css/articles.css"
import {Link} from "react-router-dom"


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
                    <div  dangerouslySetInnerHTML={{ __html: props.content.length > 100 ? props.content.substring(0, 350) + '...' : props.content }} className="articlesText"></div>
                </div>
                <div className="articlesButton" onClick={scrollToTop}>
                    <Link to ={`/articles/${props.id}`}>Read more </Link>
                
                    </div>
            </div>
        </div>
    )
}
