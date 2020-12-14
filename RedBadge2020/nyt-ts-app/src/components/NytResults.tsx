import React from "react";

const NytResults = (props: any) => {
    
    return(
        <div>
            {props.results.length > 0 && props.results.map((article: any, index: number) => {
                let image; 
            
                {if(article.multimedia.length > 0){
                    image=`http://www.nytimes.com/${article.multimedia[0].url}`
                }}

                return (
                    <div key={index}>
                        <h1><a href={article.web_url}>{article.headline.main}</a></h1>
                        <img src={image} style={{width: "50%", height: '50%'}} alt={article.headline.main}/>

                        {article.keywords.length > 0 && article.keywords.map((keyword: any, index: number) => {
                            return(
                                <div key={index}>
                                    <p>{keyword.value}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })} 
        </div>
    )
}

export default NytResults;