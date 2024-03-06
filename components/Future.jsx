import React from 'react';
import styles from '../styles/Future.module.css';
import { TfiWorld } from "react-icons/tfi";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Future = () => {
  return (
    <div>
        <div className={styles.fsc}>
        <div className={styles.Futurecon}>
       <h3>Inspiration for future getaways</h3>
         <div className={styles.future}>
            <a href="#">Popular</a>
            <a href="#">Arts & culture</a>
            <a href="#">Outdoors</a>
            <a href="#">Mountains</a>
            <a href="#">Beach</a>
            <a href="#">Unique stays</a>
            <a href="#">Categories</a>
            <a href="#">Things to do</a>
            </div>
            <hr className={styles.hr} />

            <div className={styles.future2}>

            <div class="styles.futu">
  <h4>Canmore</h4>
  <p>Apartment rentals</p>
</div>
<div class="styles.futu">
  <h4>Benalmádena</h4>
  <p>Beach house rentals</p>
</div>
<div class="styles.futu">
  <h4>Marbella</h4>
  <p>Villa rentals</p>
</div>
<div class="styles.futu">
  <h4>Mijas</h4>
  <p>Flat rentals</p>
</div>
<div class="styles.futu">
  <h4>Prescott</h4>
  <p>Cabin rentals</p>
</div>
<div class="styles.futu">
  <h4>Scottsdale</h4>
  <p>Holiday rentals</p>
</div>
<div class="styles.futu">
  <h4>Tucson</h4>
  <p>Flat rentals</p>
</div>
<div class="styles.futu">
  <h4>Jasper</h4>
  <p>Holiday rentals</p>
</div>
<div class="styles.futu">
  <h4>Mountain View</h4>
  <p>Holiday rentals</p>
</div>
<div class="styles.futu">
  <h4>Devonport</h4>
  <p>Holiday rentals</p>
</div>
<div class="styles.futu">
  <h4>Mallacoota</h4>
  <p>Beach house rentals</p>
</div>
<div class="styles.futu">
  <h4>Ibiza</h4>
  <p>Holiday rentals</p>
</div>
<div class="styles.futu">
  <h4>Anaheim</h4>
  <p>Family-friendly rentals</p>
</div>
<div class="styles.futu">
  <h4>Monterey</h4>
  <p>Cabin rentals</p>
</div>
<div class="styles.futu">
  <h4>Paso Robles</h4>
  <p>House rentals</p>
</div>
<div class="styles.futu">
  <h4>Santa Barbara</h4>
  <p>House rentals</p>
</div>
<div class="styles.futu">
  <h4>Sonoma</h4>
  <p>Cabin rentals</p>
</div>

<div class="styles.futu">
  <h4>Show more <select className={styles.sec} name="" id=""></select> </h4>
  
</div>

            </div>
    </div>
    <hr className={styles.hr} />

    <div className={styles.footer}>
    <div className={styles.foot}>
        <div className={styles.foosection}>
          <h3>Support</h3>
          <p>Help Centre</p>
            <p>AirCover</p>
            <p>Anti-discrimination</p>
            <p>Disability support</p>
            <p>Cancellation options</p>
            <p>Report neighbourhood concern</p>

          {/* Add your content for Categories section here */}
        </div>
        <div className={styles.foosection}>
          <h3>Hosting</h3>
          <p>Airbnb your home</p>
<p>AirCover for Hosts</p>
<p>Hosting resources</p>
<p>Community forum</p>
<p>Hosting responsibly</p>
<p>Join a free Hosting class</p>

          {/* Add your content for Contact section here */}
        </div>
        <div className={styles.foosection}>
          <h3>Airbnb</h3>
          <p>Newsroom</p>
<p>New features</p>
<p>Careers</p>
<p>Investors</p>
<p>Airbnb.org emergency stays</p>

          {/* Add your content for Web Builder section here */}
        </div>
        {/* Add more sections as needed */}
      </div>
      </div>
      <hr className={styles.hr} />

        <div className={styles.footer2}>
          <div className={styles.vision}>
            <p>© 2021 Airbnb, Inc.</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Sitemap</p>
            <p>Company details</p>
          </div>

            <div className={styles.vision2}>
            <p><TfiWorld /></p>
            <p>English (US)</p>
            <p>$ USD</p>
            <p><ImFacebook2 /></p>
            <p><FaInstagramSquare /></p>
            <p><FaSquareXTwitter /></p>

                </div>
        </div>
</div>

    </div>
  )
}

export default Future;