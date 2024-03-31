import React from 'react'
import {CiLocationOn} from 'react-icons/ci' 
import { AiOutlineMail} from 'react-icons/ai' 
import {BsPhone } from 'react-icons/bs' 

const Contact = () => {
  return (
    <>
      <div id='contact'>
        <h2>CONTACT</h2>
        <div className='hr'><div className='subhr'></div></div>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className="contactInfo">
          <section className='fstsec'>
            <article className='line'>            </article>
            <aside>
              <CiLocationOn  className='contactIcon'/>
              <div>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>

              </div>
            </aside>
            <aside>
              <AiOutlineMail  className='contactIcon'/>
              <div>
                <h4>Email:</h4>
                <p>info@example.com</p>

              </div>
            </aside>
            <aside>
              < BsPhone className='contactIcon'/>
              <div>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </aside>
          </section>
          <section className='fstsec'>
            <aside className='line'> </aside>
            <span className='nameInputs'>
              <div>
                <h3>Your Name</h3>
                <input type="text" />
              </div>
              <div>
                <h3>Your Email</h3>
                <input type="email" />
              </div>
            </span>
            <h3>Subject</h3>
            <input type="email" />
            <h3>Message</h3>
            <input type="text" className='mesInput' />
            <button>Send Message</button>
          </section>
        </div>
      </div>
      <article className='newsLetter'>
        <h2>Join Our Newsletter</h2>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <span><input type="email" /> <button>Subscribe</button></span>
      </article>


    </>
  )
}

export default Contact
