import React from 'react'

const Newsitem = (props)=> {
    let {title, description,imageurl,newsurl} = props;
    return (
      <div>
        <div className="card" style={{width: '16rem' ,height: '28rem'}}>
  <img src={!imageurl?"https://image.cnbcfm.com/api/v1/image/107184396-16747379042023-01-26t120649z_723665645_rc27yy9kye44_rtrmadp_0_thailand-economy.jpeg?v=1690954785&w=1920&h=1080":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}.....</h5>
    <p className="card-text">{!description?"Read the full News by Clicking on The Button given below redirecting you to the official news page.":description}.....</p>

    <a href={newsurl} className=" btn btn-danger">Read Full Article</a>
  </div>
</div>
      </div>
    )
  }


export default Newsitem
