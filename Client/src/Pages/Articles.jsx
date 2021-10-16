import React, { useState, useEffect } from 'react'
import '../Assets/css/homepage.css'
import Footer from '../Components/Footer'
import ArticleCard from "../Components/ArticleCard"
import Axios from "axios"
export default function Home() {

    const [articles, setArticles] = useState([])
    useEffect(() => {
        let unmounted = false
        if (!unmounted) {
            Axios.get('http://localhost:3001/blogs').then(
                (data) => {
                    setArticles(data.data)
                }
            )
        }
        return () => { unmounted = true }
    }, [])

    return(
        <div>
            {
            articles.map((item)=>{
                return(<ArticleCard title={item.title} content={item.content} id={item._id} image={item.image}/>)
            })
        }
            <Footer />
        </div >
    )
}