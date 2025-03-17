import React from 'react'
import '../styles/Projects.css'
import StarbucksClone from '../images/starbucks-clone.png'
import Python from '../images/Blog-Python-Uses.jpg'
import Burger from '../images/burger-yiyelim.png'
import Jira from '../images/jira-app.png'
import DataAnalysis from '../images/Data_analysis_hero.jpg'
import Here from '../images/youarehere.jpg'

function Projects() {
  return (
      <div className='cardP'>
        {/* <h1>projeler</h1> */}
        <div className="cardProjects">
              <section className="containerProjectsSC">
                  <div className="navbarProjects">
                    <div class="dot Ared"></div>
                    <div class="dot Aamber"></div>
                    <div class="dot Agreen"></div>
                  </div>
                  <span className='projectsTitleSC'>starbucks-clone</span>
                  <img src={StarbucksClone} alt="" className='image' />
                  <div className="projectsDesc">
                  <p className='projectText'>i did Starbucks homepage clone!</p>
                  <div className="buttonClass">
                  <a href="https://github.com/ugurazi/starbucks-clone" target="_blank" rel="noopener noreferrer">
                    <button className="letsgoSC">let me see!</button>
                    </a>
                  </div>
                  </div>
              </section>
          </div>
        <div className="cardProjects">
              <section className="containerProjectsSC">
                    <div className="navbarProjects">
                        <div class="dot Ared"></div>
                        <div class="dot Aamber"></div>
                        <div class="dot Agreen"></div>
                    </div>
                  <span className='projectsTitlePH'>python-quiz-app</span>
                  <img src={Python} alt="" className='image' />
                  <div className="projectsDesc">
                  <p className='projectText'>i created quiz app with python!</p>
                  <div className="buttonClass">
                  <a href="https://github.com/ugurazi/python-quiz-app" target="_blank" rel="noopener noreferrer">
                    <button className="letsgoPH">let me see!</button>
                  </a>
                  </div>
                  </div>
              </section>
          </div>
          <div className="cardProjects">
          <section className="containerProjectsSC">
                    <div className="navbarProjects">
                        <div class="dot Ared"></div>
                        <div class="dot Aamber"></div>
                        <div class="dot Agreen"></div>
                    </div>
                  <span className='projectsTitleSC'>burger-website</span>
                  <img src={Burger} alt="" className='image' />
                  <div className="projectsDesc">
                    
                  <p className='projectText'>i created Burger Yiyelim homepage clone!</p>
                  <div className="buttonClass">
                  <a href="https://github.com/ugurazi/burger-website-react" target="_blank" rel="noopener noreferrer">
                    <button className="letsgoBW">let me see!</button>
                    </a>
                  </div>
                  </div>
              </section>
          </div>
          <div className="cardProjects">
            <section className="containerProjectsSC">
                    <div className="navbarProjects">
                        <div class="dot Ared"></div>
                        <div class="dot Aamber"></div>
                        <div class="dot Agreen"></div>
                    </div>
                    <span className='projectsTitleJA'>jira-application</span>
                    <img src={Jira} alt="" className='image' />
                    <div className="projectsDesc">
                    <p className='projectText'>i created a simplified version of the Jira application that developers use in their daily lives!</p>
                    <div className="buttonClass">
                        <a href="https://github.com/ugurazi/jira-application-react" target="_blank" rel="noopener noreferrer">
                            <button className="letsgoJA">let me see!</button>
                        </a>
                    </div>
                    </div>
                </section>
            </div>
            <div className="cardProjects">
                <section className="containerProjectsSC">
                    <div className="navbarProjects">
                        <div class="dot Ared"></div>
                        <div class="dot Aamber"></div>
                        <div class="dot Agreen"></div>
                    </div>
                    <span className='projectsTitlePDA'>pokemon-data-analysis</span>
                    <img src={DataAnalysis} alt="" className='image' />
                    <div className="projectsDesc">
                    <p className='projectText'>as part of the Akbank Data Analytics Project Bootcamp, i analyzed the strengths and characteristics of Pokémon!</p>
                    <div className="buttonClass">
                        <a href="https://github.com/ugurazi/pokemon_bootcamp_data" target="_blank" rel="noopener noreferrer">
                            <button className="letsgoPDA">let me see!</button>
                        </a>
                    </div>
                    </div>
                </section>
            </div>
            <div className="cardProjects">
                <section className="containerProjectsSC">
                    <div className="navbarProjects">
                        <div class="dot Ared"></div>
                        <div class="dot Aamber"></div>
                        <div class="dot Agreen"></div>
                    </div>
                    <span className='projectsTitlePO'>my-portfolio-website!</span>
                    <img src={Here} alt="" className='imageHere' />
                    <div className="projectsDesc">
                    <p className='projectText'>you are here right now! ps. it is not currently mobile-friendly. for a better experience, please check it out on a computer!</p>
                    </div>
                </section>
            </div>
          </div>
  )
}

export default Projects
