import React from 'react'
import '../styles/About.css'
function About() {
  return (
    <div className='cardZ'>
        <div className="boxAbout">
          <div className="titleAbout">
            <p className="titleAboutP">about me!</p>
            <button className="x">X</button>
            <button className="y">?</button>
          </div>
          <div className="bodyAbout">
            <p className="aboutDesc">I am Ugur Emir Azi. I was born on June 3, 2003, in Istanbul. <br /><br />  For a while, I tried to figure out what I wanted from life, and here I am now. <br /> <br />  I started my software journey as a Computer Engineering student at Bartın University.<br /> <br />  During this process, I have learned a lot. I spent some time developing myself in Java, which was very beneficial to me. <br /> <br />  After that, I moved on to Python. Later, I found myself working with React, and I’m really enjoying it. <br /> <br />  Thanks to my university, I’ve had the opportunity to experience many fields, including C#, PHP, MySQL, Assembly, and more. <br /><br />  Currently, I am preparing myself to become a full-stack developer.<br /><br />  As for my hobbies, I enjoy cycling, swimming, photography, styling, and simply reading books and listening to music.<br /> <br /> I consider myself a fun and easygoing person. I am always open to new ideas and ready to learn new things. I am excited to see what the future holds for me. 🚀</p>
            <a href="https://www.canva.com/design/DAGh-0hE880/Gqn0OPof1-uc7jpY1ujRJQ/view?utm_content=DAGh-0hE880&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5bd3c922d5" target="_blank" rel="noopener noreferrer">
              <button className="ok" >let me see your cv!</button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default About
