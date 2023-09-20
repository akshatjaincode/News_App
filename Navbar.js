import React from 'react'
const Navbar = (props)=> {
   

    return (
            <div>
                <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid" style={{color:'white',backgroundColor : '#011e29'}} >
        <a className='mx-3'><img src="logo192.png" alt="" style={{height:'50px',width:'50px'}} /></a>

            <a className="navbar-brand" href="#"><strong style={{color:'white'}}>THE DAILY NEWS</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:'white'}}>Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:'white'}}>Business</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  href="#" role="buttn" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
                    Categories
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                
            </ul>
            <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
           
            </div>
        </div>
        </nav>
            </div>
            )
        
        }

export default Navbar
