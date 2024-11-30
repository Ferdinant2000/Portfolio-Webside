import React, { useState } from "react"
import "./nav.css"
const Nav = () => {
  // const [sidebar, setSidebar] = useState(false)
  // const style = {tranform:"rotate(180deg)"}
  return (
    <>
      <header className="header">
        <a href="" className="logo">Ferdinant</a>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        <nav className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    </>
  )
}

export default Nav
