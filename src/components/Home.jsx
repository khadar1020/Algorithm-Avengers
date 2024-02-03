import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from"react-icons/ai"

const Home = () => {
  return (
  <>
    <div className='home' id="home">
      <main>
        <h1>Algorithm Avengers</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>We are your one and only solution we will help you for solving real world problems any ideas you can dicuss with us we will mentor you </p>
      </div>
    </div>

    <div className="home3" id="about">
      <div>
        <h1>Who we are ?</h1>
        <p>Software as a Service (SaaS) is a cloud-based software delivery model where applications are hosted and maintained by a third-party provider. Instead of purchasing and installing software locally, SaaS allows users to access applications over the internet, typically through a subscription-based model.Discover our suite of SaaS solutions tailored to meet your business requirements. From project management and customer relationship management (CRM) to accounting and human resources, we offer a comprehensive range of applications designed to streamline your operations and drive growth.Ready to revolutionize your business with SaaS? Explore our platform and unlock the power of cloud-based software solutions. Join thousands of businesses worldwide who trust our SaaS platform to fuel their success.
        </p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay: "0.3s"
          }}>

            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={{
            animationDelay: "0.5s"
          }}>

            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay: "0.7s"
          }}>

            <AiFillYoutube />
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay: "1s"
          }}>

            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
  </>
  )
}

export default Home
