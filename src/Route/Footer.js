import React from 'react';

function Footer(props) {
    return (
        <div className="App">
        <section class="footer">
          <div class="social">
            <a href="#ff">
              <i class="fa-brands fa-instagram"></i>
            </a>
  
            <a href="#ff">
              <i class="fa-brands fa-facebook"></i>
            </a>
  
            <a href="#ff">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
  
            <a href="#ff">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
          <div className="contact">
            <h2>The Indian Tourism</h2>
  
            <p>Prakash Singh Shekhawat</p>
  
            <p><i class="fa-brands fa-whatsapp fa-beat fa-2xl" style={{color:'green'}}></i>+91 - 9549279999</p>
  
            <h3>Office Hours : (9:30 am to 5:30 pm)</h3>
            <p>Email - info@theindiatourism.com</p>
          </div>
  
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
  
            <li>
              <a href="/indiatourism">INIDA TOURISM</a>
            </li>
  
            <li>
              <a href="/tourpackages">TOUR PACKAGES</a>
            </li>
  
            <li>
              <a href="/placestovisit">PLACES To VISIT</a>
            </li>
  
            <li>
              <a href="/touroffers">TOUR OFFERS</a>
            </li>
            <li>
              <a href="/contactus">CONTACT US</a>
            </li>
  
            
          </ul>
  
         
        </section>
      </div>
    );
}

export default Footer;

