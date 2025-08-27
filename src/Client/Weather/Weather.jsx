import React, { useState } from 'react'
import './Weather.css';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CloudIcon from '@mui/icons-material/Cloud';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function Weather() {
  const [isActive, setIsActive] = useState(false);

  const handleSearchClick = () => {
    setIsActive(!isActive);
  };
  
  return(
    <header className='header'>
      <div className='head'>
    <div className='left'>
      <h1 className='h1'>Travel Weather Guide</h1>
      <p>Plan your trips with real-time weather updates</p>
    </div>
    <div className="right">
  <div className="search-input-wrapper">
    <SearchIcon className="search-icon" fontSize="large" style={{ color: "gray" }} />
    <input
      type="text"
      id="sinput"
      placeholder="Search location..."
      style={{ height: "45px" }} 
    />
  </div>
</div>
   
    </div>
<div className="weather">
  <div className="w1">
    <h1>23°c</h1>
        <h4 className="current-loc" id="currentLocation">New York, USA</h4>
            <p className="current-date" id="currentDate">Monday, June 5</p>
            <p>11.00 am</p>
            <p className="current-condition" id="currentCondition">Sunny</p>        
  </div>
  <div className="w2">
          <h3>5-Day Forecast</h3>
          <hr className='hr'/>
         <div className='forecast'> 
          <div>Today 23°c </div><Box sx={{ '& > :not(style)': { m: 1 } }} >
      <Fab size="small"color="primary" aria-label="add">
        <CloudIcon fontsize="small" color="black"/>
      </Fab></Box> </div><br />

      <div className='forecast'> 
          <div>Thursday 23°c </div><Box sx={{ '& > :not(style)': { m: 1 } }} >
      <Fab size="small"color="primary" aria-label="add">
        <CloudIcon fontsize="small" color="black"/>
      </Fab></Box> </div><br />
          <div className='forecast'> 
          <div>Friday 23°c </div><Box sx={{ '& > :not(style)': { m: 1 } }} >
      <Fab size="small"color="primary" aria-label="add">
        <CloudIcon fontsize="small" color="black"/>
      </Fab></Box> </div><br />
      <div className='forecast'> 
          <div>Saturday 23°c </div><Box sx={{ '& > :not(style)': { m: 1 } }} >
      <Fab size="small"color="primary" aria-label="add">
        <CloudIcon fontsize="small" color="black"/>
      </Fab></Box> </div><br />
      <div className='forecast'> 
          <div>Sunday 23°c </div><Box sx={{ '& > :not(style)': { m: 1 } }} >
      <Fab size="small"color="primary" aria-label="add">
        <CloudIcon fontsize="small" color="black"/>
      </Fab></Box> </div><br />
          {/* <span>Sun 23°c </span><img width="25" height="25" src="https://img.icons8.com/ios/50/apple-weather.png" alt="apple-weather"/><br /> */}

  </div>
</div>
<h3>Travel Tips</h3>
<div className='tips'>
  
  <p><img width="15" height="15" src="https://img.icons8.com/material-rounded/24/star--v2.png" alt="star--v2"/> Perfect weather for outdoor activities. Don't forget your sunscreen!</p>
  <p><img width="15" height="15" src="https://img.icons8.com/material-rounded/24/star--v2.png" alt="star--v2"/> Comfortable clothing recommended. Light jacket for evening.</p>
  <p><img width="15" height="15" src="https://img.icons8.com/material-rounded/24/star--v2.png" alt="star--v2"/> Great conditions for photography during golden hour.</p>
</div>

<div >
  <h2>Local Weather Highlights</h2>
  <div className='rise'>
  <Box sx={{ '& > :not(style)': { m: 1 } }} >
      <Fab size="small"color="primary" aria-label="add">
        <SunnyIcon fontsize="small" color="black"/>
      </Fab></Box>
       <p>Sunrise : 6:45 AM</p>
      </div>
      <div className='rise'>
  <Box sx={{ '& > :not(style)': { m: 1 } }} >
      <Fab size="small"color="primary" aria-label="add">
        <SunnyIcon fontsize="small" color="black"/>
      </Fab></Box>
      <p>Sunset  : 7:32 PM</p>
</div>
</div>
</header>
  )
}

