import React from 'react'
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div>
      
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
        
     {/* Navbar */}


<nav className="navbar navbar-expand-lg">
  <div className="container-xl conatienr-lg conatiner-md container-sm container-xs">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mt-3">
          <Link className="nav-link text-light" aria-current="page" to="#"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book-download" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"></path>
   <path d="M13 16h-7a2 2 0 0 0 -2 2"></path>
   <path d="M15 19l3 3l3 -3"></path>
   <path d="M18 22v-9"></path>
</svg>Get the app</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-text mt-3">
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/investor">Investor Relation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/restro">Add Restaurant</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/login">Log in</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/signup">Sign in</Link>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
























  <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" className="d-block w-100" height="700px" alt="..."/>
  <div className="container-xl conatiner-lg conatiner-md container-sm container-xs">

</div>   
 
    </div>
    <div className="carousel-item">
      <img src="https://b.zmtcdn.com/data/pictures/4/19764284/4bcb6000a882179a2c7334f528f1ccab.jpg" height="700px" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.rawpixel.com/private/static/images/website/2022-05/upwk61661577-wikimedia-image-kowapeej.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=494692dea28d0075e11332e41e3cb064" className="d-block w-100" height="700px" alt="..."/>
    
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Slider
