import React from "react";
import { about } from "../../dummydata"
import Common from "../../pages/common/Common"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container'>
          <div className='itemContent'>
            <Common title='about me' />
            {about.map((data) => {
              const { name, email, phone, fax, firdavs, nation, heading, title, desc } = data
              return (
                <>
                  <div className='content flex'>
                    <div className='contentLeft'>
                      <div className='details flex'>
                        <h2 className='h2Top'>Name :</h2>
                        <h2>{name}</h2>
                      </div>
                      <div className='details flex'>
                        <h2 className='h2Top'>Email :</h2>
                        <h2><a href="#">{email}</a></h2>
                      </div>
                      <div className='details flex'>
                        <h2 className='h2Top'>Phone :</h2>
                        <h2><a href="https://t.me/Ferdinant_2000">{phone}</a></h2>
                      </div>
                      <div className='details flex'>
                        <h2 className='h2Top'>Fax :</h2>
                        <h2><a href="https://t.me/Ferdinant_2OOO">{fax}</a></h2>
                      </div>
                      <div className='details flex'>
                        <h2 className='h2Top'>Date of birth :</h2>
                        <h2>{firdavs}</h2>
                      </div>
                      <div className='details flex'>
                        <h2 className='h2Top'>Nationality :</h2>
                        <h2>{nation}</h2>
                      </div>
                      <button className='primary-btn'>
                        DOWNLOAD RESUME <i className='fa fa-long-arrow-alt-right'></i>
                      </button>
                    </div>
                    <div className='contentRight'>
                      <div className='heading'>
                        <h1>{heading}</h1>
                      </div>
                      <div className='para'>
                        <span>Hello</span>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
