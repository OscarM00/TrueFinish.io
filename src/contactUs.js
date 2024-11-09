import React from 'react';
import './contactUs.css';
import phoneIcon from './True Finish SVG/Phone Icon.svg';
import mailIcon from './True Finish SVG/Mail Icon.svg';
import timeIcon from './True Finish SVG/Time Icon.svg';

function contactUs() {
    return(
    <>

<div class="formContainer">
      
      <div class="form">
        <div class="contact-info">
          <h3 class="title">CONTACT US</h3> <br></br>
          <div class="info">
            <div class="information">
            <img src={phoneIcon} class="icon" alt="" />
            <div>
            <h6 className="phoneDiv">PHONE</h6>
            <p>920-252-2463</p>
            </div>
            </div>
            <div class="information">
            <img src={mailIcon} class="icon" alt="" />
            <div>
            <h6 className="phoneDiv">EMAIL</h6>
             <p> <a href="mailto:adam@truefinish.net" className="emailColor">adam@truefinish.net</a>   </p>
            </div>
            </div>
            <div class="information">
            <img src={timeIcon} class="hourIcon" alt="" />
            <div>
                <h6 className="phoneDiv">HOURS</h6>
                <p>Monday: 8am - 5pm <br></br>
              Tuesday: 8am - 5pm <br></br>
              Wednesday: 8am - 5pm <br></br>
              Thursday: 8am - 5pm <br></br>
              Friday: 8am - 5pm <br></br>
              Saturday: Closed <br></br>
              Sunday: Closed</p>
            </div>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/company/truefinish/posts/?feedView=all">
                <i class="fab fa-linkedin-in"></i>
               
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
        
          <form action="https://api.web3forms.com/submit" method="POST">

<h6 className="topHeader">Name</h6>
            <div class="input-container">
              <input type="name" name="name" class="input" required /> 
            </div>
<h6 className="topHeader">Email</h6>
            <div class="input-container">
              <input type="email" name="email" class="input" required />
            </div>
<h6 className="topHeader">Message</h6>
            <div class="input-container textarea">
              <textarea name="message" class="input" required />
             
            </div>

            <button type="submit" className="submitButton">Submit</button>
            <input type="hidden" name="access_key" value="9f595b36-3141-4ad2-b692-e7a3f1155abd" />
          </form>
        </div>
      </div>
    </div>
    </>
    )
}

export default contactUs;