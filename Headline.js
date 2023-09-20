import React, { useState, useEffect} from 'react'


const Headline = (props)=> {
    const [articles ,setArticles] = useState([])
  

    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=1871818cf96841e99617c88f76b99f5d')
        .then(response => response.json())
        .then(data => setArticles(data.articles))
        .catch(err=> console.log(err))
    }, [])

    let {description,imageurl} = props;
  return (
    <div>
      <div class="card" style={{width: '18rem'}}>
      <img src={!imageurl?"https://image.cnbcfm.com/api/v1/image/107184396-16747379042023-01-26t120649z_723665645_rc27yy9kye44_rtrmadp_0_thailand-economy.jpeg?v=1690954785&w=1920&h=1080":imageurl} className="card-img-top" alt="..."/>
  <div class="card-body">
  <p className="card-text">{!description?"Read the full News by Clicking on The Button given below redirecting you to the official news page.":description}.....</p>
  </div>
</div>
{articles.map((item,url)=>(
             <div className='col-md-3' key={url}>
            <Headline title= {item.title?item.title.slice(0,45):""} description={item.description?item.description.slice(0,88):""} imageurl={item.urlToImage} />
             </div>))}
    </div>
  )
}
export default Headline
