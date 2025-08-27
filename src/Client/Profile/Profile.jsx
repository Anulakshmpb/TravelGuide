import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
//   return (
//     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="d-block w-100" src="https://wallpaperaccess.com/full/444452.jpg" alt="First slide" ></img>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="https://admin.thetravelnet.com/img/domains/shutterstock_149526038.jpg" alt="Second slide"></img>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg" alt="Third slide"></img>
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
//   )
return( 
    <Carousel interval={3000} pause={false}>
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-50  img"
          src="https://wallpaperaccess.com/full/444452.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-30 img"
          src="https://deih43ym53wif.cloudfront.net/hanging_bridge_himachal_india_shutterstock_1087070918_c59e0eb675.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-50 img"
          src="https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>)
}
