import React from 'react'
import './Contact.css';

export default function Contact() {
  return (
    <>
    < div className='contact'>
      <div className="contact-left">
                    <h1 className="sub-title">Feedback</h1>
                    <form>
                        <input type="text" placeholder="Name" required /> <br />

                        <input type="email" placeholder="Email" required /> <br />
                        <textarea rows="5" placeholder="Message" required></textarea> <br />
                        <button type="submit"  className="btn2">Send</button>
                    </form>
              </div> 
              <div className='contact-right'>
    <p className='h4'>Are you a traveller in need of help?  Have a question about your review? Problems booking your hotel, flight or attraction/activity?  Trouble with a restaurant reservation?</p>
    <p className='h4'>We want to help!  Did you know that nearly every customer service question can be answered by visiting our easy-to-use Help Centre?</p>
    <p className='h4'>Still need support?  Visit our general enquiries page and someone from TravelGuide’s customer support team will respond as soon as possible!</p>
      </div>
               </div>
       <div className="con"><br />
                    <h1 className="sub-title">Contact Us</h1>
                    <p >Mailing address: Tripadvisor Inc., 400 1st Avenue, Needham, MA, USA 02494
General company <br /> <br /> phone number: +1 781 800 5000</p>
                    
          
                </div>
              
   </>
  )
}

