import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import "../Assets/css/article.css"
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, FacebookIcon,LinkedinIcon, TwitterIcon
} from "react-share";
import Axios from 'axios'

export default function Article() {
    let { articleId } = useParams();
        const [article, setArticle] = useState({})
        const [isloaded,setIsLoaded]= useState(false)

    useEffect(() => {
        if (!isloaded) {
        Axios.get(`http://127.0.0.1:3001/blogs/${articleId}`).then((data) => {
            setArticle(data.data)
            setIsLoaded(true)
        }).catch(console.log('error'))}
    },[])
    
    const img = `/uploads/${article.image}`

    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div>
            <div className="article-header">
                <img src={img}/>
            </div>
            <div className="article-content">
                <h2 className="articleTitle">{article.title}</h2>
                <div className="share">
                <FacebookShareButton url={`http://localhost:8000/articles/${articleId}`}>
                    <FacebookIcon logoFillColor="white" round={true} size={30} className="socialicon"></FacebookIcon>
                </FacebookShareButton>

                <LinkedinShareButton url={`http://localhost:8000/articles/${articleId}`}>
                    <LinkedinIcon logoFillColor="white" round={true} size={30} className="socialicon"></LinkedinIcon>
                </LinkedinShareButton>

                <TwitterShareButton url={`http://localhost:8000/article/${articleId}`}>
                    <TwitterIcon logoFillColor="white" round={true} size={30} className="socialicon"></TwitterIcon>
                </TwitterShareButton>
                </div>
                <p className="articleText"> {article.content} </p>
            </div>
            <div className="articleArrow"><i className="fa fa-arrow-up fa-3x" onClick={scrollToTop}> </i></div>
        </div>
    )
}