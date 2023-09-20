import React, { useState, useEffect} from 'react'
import Newsitem from './Newsitem'

function News(props) {
  const [articles ,setArticles] = useState([])

  

  useEffect(() => {
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1871818cf96841e99617c88f76b99f5d`
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(err=> console.log(err))
  }, [])
  
  
     return (
      <div className='container my-3'>
               <h3 className='my-5' style={{color:'#011e29',fontFamily: "Times New Roman",textAlign:'center'}}><u className='my-3'>TOP HEADLINES FOR TODAY </u> :</h3>
        <div class="d-flex align-items-stretch my-5" style={{backgroundColor:'white' , height:'200px', border:'black'}}>
       </div> 
        <div className='row'>
        {articles.map((item,url)=>(
             <div className='col-md-3' key={url}>
            <Newsitem  title= {item.title?item.title.slice(0,45):""} description={item.description?item.description.slice(0,88):""} imageurl={item.urlToImage} newsurl={item.url}/>
            </div>))}
            
        </div>
        
      </div>
    );}
  
          
        

export default News
