import React from 'react';
import Image from './Image';
import './App.css';

const Articles = (props) => {


    return (
    <div className="grid">


        {props.articles.map((article) => (
            <div className="newsflex" 
                key={article.url}>

                 <Image url={article.urlToImage}
                        title={article.title} />

                <div className="newsitem2">
                    
                    <h3>{article.title}</h3>
                    <p className="date">
                    Date: {article.publishedAt.substring(0,10)}</p>
                    
                    <p className="description">{article.description}</p>

                    <a href={article.url}>Click to read the article...</a>
          
                </div>
                                
            </div>
        ))}
    </div>)
}
export default Articles;
