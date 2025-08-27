import React from 'react'
import './Review.css';
export default function Review() {
  return (
    <>
    <div className='review'>
        <h1>Write a review, make someone's trip</h1>
        <h3>Stories like yours are what helps travellers have better trips. Share your <br />experience and help out a fellow traveller!</h3>
    </div>
    <div className="review-form">
    <div className='div1'>
        <input className='form' type="text" placeholder="Your Name"/> <br />
        <input className='form'type="text" placeholder="Your Email"/><br />
        <textarea className='form'placeholder="Your Review"/><br />
        <button className='form btn subbtn'>Submit</button>
    </div>
    <div className='div2'>
        <h5>You've been there—share your tips</h5>
        <h6>Tips—short, quick bits of advice—help travellers like you feel just like insiders.</h6>
        <textarea className='form'placeholder="Share a tip"/><br />
        <div id='destbtn'>
        <button className='form btn btn1 dbtn'>Upload Photos</button>
        <button className='form btn dbtn'> Add A Place</button>
        </div>
    </div>
    </div>
    </>
  )
}
