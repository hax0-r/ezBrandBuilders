import React from 'react'
import './About.css'
import pg4 from '../../assets/Home/pg4.png'

export default function About() {
  return (
    <>
      <div className="about">
        <div className="page1">
          <div className="main">
            <h1>About us</h1>
            <p>Popular crypto communities and well-known traders trade on the Capico platform.</p>
          </div>
        </div>
        <div className="page2">
          <div className="main">
            <h1>Join to our partners, read author's analytics, explore the world of trading and cryptocurrencies. </h1>
          </div>
        </div>
        <div className="page4">
          <div className="main">
            <div className="container">
              <div className="left">
                <h1>EXPLORE MORE</h1>
                <h4><span>Lorem ipsum dolor sit</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus impedit tempore ratione vitae consequuntur ea. Qui consectetur veniam, sequi harum dignissimos aliquam officia. Sint saepe impedit obcaecati maiores. Dolores eligendi natus sequi minima expedita dolore, in assumenda sed praesentium laudantium eveniet error veritatis saepe eos? Aperiam, labore quod! </h4>
              </div>
              <div className="right">
                <img src={pg4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
