import React, { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import { motion } from 'framer-motion';
import {TiTick } from 'react-icons/ti'

import about from '../resources/about.jpeg'
import about2 from '../resources/about2.png'

const About = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);

    const toggleQuestion = (questionNumber) => {
      setActiveQuestion(activeQuestion === questionNumber ? 0 : questionNumber);
    };
      const animation = {
        h1: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
          transition:{
            duration: 0.6,
            // delay:0.3,
          }
        },
    }
  return (
    <>
    <div className='aboutUs'>
        <motion.h1 {...animation.h1} >ABOUT US</motion.h1>
        <div className='hr'><div className='subhr'></div></div>
        <motion.section className='aboutInfo' {...animation.h1} >
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><TiTick className='icon'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <p><TiTick className='icon'/>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                <p><TiTick className='icon'/>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>Learn More</button>
            </div>
        </motion.section>
    </div>
    <div className='about' >
       <section {...animation.h1}>
       < div className='aboutDiv' >
        <h2>Eum ipsam laborum deleniti <b>velit pariatur architecto aut nihil</b> </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
        <article>
        <aside onClick={() => toggleQuestion(1)}>
            <h3><span>01</span> Non consectetur a erat nam at lectus urna duis?</h3><BsChevronDown className='icon2'/>
        </aside>
            <p style={{
                  display: activeQuestion === 1 ? 'block' : 'none',
                  padding: '20px'
                }}>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
        </article>
        <article>
       <aside onClick={() => toggleQuestion(2)}> 
            <h3><span>01</span> Non consectetur a erat nam at lectus urna duis?  </h3><BsChevronDown className='icon2'/>
            </aside>
            <p style={{
                  display: activeQuestion === 2 ? 'block' : 'none',
                  padding: '20px'
                }}>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
        </article>
        <article>
            <aside onClick={() => toggleQuestion(3)}>
                <h3><span>01</span> Non consectetur a erat nam at lectus urna duis?</h3><BsChevronDown className='icon2'/>
            </aside>
            <p style={{
                  display: activeQuestion === 3 ? 'block' : 'none',
                  padding: '20px'
                }}>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
        </article>
        </div>
        <img src={about} alt="aboutPNG" />
       </section>
    </div>
    <div className='about2'>
        <article>
        <img src={about2} alt="HomePNG" />
        <div>
            <h2>Voluptatem dignissimos provident quasi corporis voluptates</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <section>
                <div> <span>HTML</span> <span>100%</span> </div>
                <div> <div style={{width:"100%"}}></div> </div>
            </section>
            <section>
                <div> <span>CSS</span> <span>90%</span> </div>
                <div> <div style={{width:"90%"}}></div> </div>
            </section> <section>
                <div> <span>JavaScript</span> <span>75%</span> </div>
                <div> <div style={{width:"75%"}}></div> </div>
            </section> <section>
                <div> <span>PhotoShop</span> <span>55%</span> </div>
                <div> <div style={{width:"55%"}}></div> </div>
            </section>
        </div>
        </article>
    </div>
    </>
  )
}

export default About
