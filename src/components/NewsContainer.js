import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'

const NewsContainer = ({ city,countryCode }) => {

    const [news,setNews] = useState([]);
    useEffect(() =>{
        getNewsFromLocation().then((response) =>{
            console.log(response.articles);
            setNews(response.articles);
        });
    },[countryCode])

    const getNewsFromLocation =async() => {
        return fetch('https://newsapi.org/v2/top-headlines?country='+countryCode+'&apiKey=2656bb186e5740f5b32a0252ef02baa9')
		.then((response) =>response.json())
		.catch((error) => error);
    }

    return (
        <div style={{marginTop: "10%"}}>
            <h3>{city}, {countryCode}</h3>
            <div style={{width:"90%"}}>
                {news && news.length > 0 ?
                <ul style={{listStyle:"none"}}>
                    {news.map((item,index) => {
                        if(index <10)
                        return  <li style={{margin: "10px"}} key={index}>{item.title}</li>
                        })}
                </ul>
                : ""}
            </div>
        </div>
    )
}

export default NewsContainer;

