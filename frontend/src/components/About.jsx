import React from 'react';
import './About.css';

import background2 from './media/AboutSectionTow.jpg';
import background3 from './media/AboutSectionTree.jpg';
import background4 from './media/AboutSectionFour.png';
import background5 from './media/AboutSectionFive2.png';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="page-title">Hallo. Ihr Partner ist das Talks Meet!</h1>
      <p className="page-subtitle">Von Anfang an haben wir es Menschen und Unternehmen ermöglicht, einfach und sicher auf die bestmögliche Weise zu arbeiten – von überall aus. Heutzutage sind Berufs- und Privatleben eng miteinander verflochten. (SITE NAME) ist für Sie da. Bei uns können Sie sich den ganzen Tag über auf das konzentrieren, was wirklich wichtig ist: Ihre Projekte, Ihren Job und sogar die privaten Projekte, die Ihnen am Herzen liegen.</p>
      <div className="section section-one">
        {/* Restul codului */}
      </div>
      <div className="section section-two">
        <div className="content">
          <img src={background2} alt="background2" className="image-left" />
          <div className="text-right">
            <h1>It is important how you do things.</h1>
            <p>In a world where flexibility comes first, good performance can be achieved anywhere. With this mindset, we fulfill our promise to provide reliability, connectivity, and simplicity to millions of people.</p>
            <ul>
              <li>People who benefit from being able to work safely and productively anywhere.</li>
              <li>Companies that can continue to operate despite adversities, thereby being able to reduce costs and achieve sustainability goals faster.</li>
              <li>And everyone else who can master both professional and personal life thanks to flexible tools.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section section-three">
        <div className="content">
          <div className="text-left">
            <h1>The new world of work has arrived.</h1>
            <p>It doesn’t matter where or when you work. What matters is how you do things.</p>
            <p>We are currently witnessing an evolution in the modern work environment and the revolution of the contemporary workplace. (SITE NAME) is at the forefront, supporting all stakeholders in navigating these challenges. This includes:</p>
            <ul>
              <li>Streamlined processes for flexible, hybrid, and mobile working</li>
              <li>Providing seamless on-demand support and assistance</li>
              <li>Powerful tools for collaboration and security</li>
            </ul>
          </div>
          <img src={background3} alt="background3" className="image-right" />
        </div>
      </div>
      <div className="section section-four">  
        <div className="content">
          <img src={background4} alt="background4" className="image-left" /> 
          <div className="text-right">
            <h1>Efficient Event Scheduling</h1>
            <p>This new section introduces our advanced event scheduling and management system. Our platform integrates seamlessly with Google Calendar, allowing users to create and manage events efficiently. With features such as QR code invitations and real-time updates, staying organized has never been easier. Ensure your meetings and events are scheduled perfectly, so you can focus on what truly matters.</p>
          </div>
        </div>
      </div>
      <div className="section section-five">
        <h1>Flexibility is Our Top Priority</h1>
        <p>We prioritize flexibility above all else. We rely on the concept of "dogfooding," meaning we use the very tools we have created. By doing so, we empower millions of people to work from any location. We leverage our own innovations to stay connected, enabling us to work flexibly, make life more interesting, and develop well-thought-out and impactful ideas for the modern world of work.</p>
        <div className="images-container">
          <img src={background5} alt="background5" />
        </div>
      </div>
    </div>
  );
};

export default About;





