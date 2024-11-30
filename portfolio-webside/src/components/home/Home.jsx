import React from "react"
import "./home.css"
// import ""
const Home = () => {
  return (
    <>
    <section className="home" id="home">
        <div className="home-img">
            <img src="" alt="" />
        </div>
        <div className="home-content">
            <h1>Hi, It's <span>Ferdinant</span></h1>
            <h3 className="typing-text">I'm a <span></span></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, sequi iure quidem animi porro
                aspernatur.</p>
            <div className="social-icon">
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <a href="#" className="btn">Hire Me</a>
        </div>
    </section>
    </>
  )
}

export default Home
