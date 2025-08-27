import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './dest.css'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Button from 'react-bootstrap/Button';

export default function Dest() {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className="container">
         <div className="search">
         <span className="search-icon">
         <SearchIcon fontSize="large" style={{ color: "gray" }} />
         </span>
        <input type="text" id="searchInput" placeholder="Search location..." />
        </div>
       
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="edakkal" src="https://imvoyager.com/wp-content/uploads/2018/02/Edakkal-Caves.jpg" style={{ cursor: "pointer" }}
      onClick={() => window.open('https://en.wikipedia.org/wiki/Edakkal_Caves', '_blank')} />
            <div className="carousel-caption d-none d-md-block">
              <h3 className='place'>Edakkal Cave</h3>
              <p>Sulthan Bathery , Wayanad ,Kerala</p>
            </div>

          </div>
          <div className="carousel-item">
            <img src="https://wayanadfort.com/images/wayanad-banasura-sagar-dam.jpg" className="edakkal" style={{ cursor: "pointer" }}
      onClick={() => window.open('https://en.wikipedia.org/wiki/Banasura_Sagar_Dam', '_blank')} />
            <div className="carousel-caption d-none d-md-block">
              <h3 className='place'>Banasura Dam</h3>
              <p>Padinjarathara , Wayanad ,Kerala</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2024/10/utm-Copy-61.jpg" className="edakkal" style={{ cursor: "pointer" }}
      onClick={() => window.open('https://en.wikipedia.org/wiki/Karapuzha_Dam', '_blank')} />
            <div className="carousel-caption d-none d-md-block">
              <h3 className='place'>Karapuzha Dam</h3>
              <p>Vazhavatta , Wayanad ,Kerala</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}