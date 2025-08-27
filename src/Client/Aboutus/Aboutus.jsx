import React from 'react'
import'./Aboutus.css';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../Config/Config';
export default function Home() {
    const navigate = useNavigate();

  return(
     <div id="home">

      <div className="about">
            <div className="row">
                <div className="about-col-1">
                    <img className='about-img' src="https://wallpaperbat.com/img/24963-travelling-wallpaper.jpg" alt=""/>
                </div>
                <div className="about-col-2">
                    <h1 className="sub-title">About Us</h1> <br />
                    <p className='para'> 
  Welcome to TravelGuide, your trusted companion for unforgettable journeys! Our mission is to make travel planning effortless and enjoyable by providing real-time information, curated recommendations, and seamless booking experiences. Whether you’re seeking adventure, relaxation, or cultural exploration, TravelGuide connects you to the best destinations, accommodations, and local experiences. Join us as we help you discover new places, create lasting memories, and turn every trip into an extraordinary adventure.
</p><br></br>
       </div></div>
       </div>
        <div className="container">
            <h1 className="sub-title">Our Features</h1>
            <div className="fea-list">
                <div className='bookhotels'>
                    <h2>Book Hotels</h2>
                    <p></p>
                    <a href="#">Learn more</a>
                </div>
                 <div>
                  
                    <h2>Book Taxi</h2>
                    <p></p>
                    <a href="#">Learn more</a>
                </div>
                 <div>
                    
                    <h2>View Places</h2>
                    <p></p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    
         </div>
   
  )
}