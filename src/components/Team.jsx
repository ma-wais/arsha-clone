import React from 'react'
import {BsTwitter,BsFacebook,BsInstagram,BsLinkedin } from 'react-icons/bs'
import { motion } from "framer-motion";

import per1 from '../resources/per1.png'
import per2 from '../resources/per2.png'
import per3 from '../resources/per3.png'
import per4 from '../resources/per4.png'

const Team = () => {
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
      }
    },
    h2: {
      initial: {
        y: "-80%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition:{
        duration: 0.6,
      }
    },
    h2: [
      {
        initial: {
          y: "-50%",
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
        transition: {
          duration: 0.4,
          delay: 0.1, 
        },
      },
      {
        initial: {
          y: "-50%",
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
        transition: {
          duration: 0.4,
          delay: 0.2, 
        },
      },
      {
        initial: {
          y: "-50%",
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
        transition: {
          duration: 0.4,
          delay: 0.4, 
        },
      },
    ],
  };
  return (
    <div id='team'>
      < motion.h2 {...animation.h1}>Team</ motion.h2>
      <div className='hr'><div className='subhr'></div></div>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      <section>
      < motion.article {...animation.h2[0]}>
        <img src={per1} alt="client" />
        <div>
          <h3>Walter White</h3>
          <p>Chief Executive Officer</p>
          <hr />
          <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
          <BsTwitter className='teamIcon' /><BsFacebook className='teamIcon' /><BsInstagram className='teamIcon' /><BsLinkedin className='teamIcon' />
        </div>
      </ motion.article>
      < motion.article {...animation.h2[1]}>
        <img src={per2} alt="client" />
        <div>
          <h3>Walter White</h3>
          <p>Chief Executive Officer</p>
          <hr />
          <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
          <BsTwitter className='teamIcon' /><BsFacebook className='teamIcon' /><BsInstagram className='teamIcon' /><BsLinkedin className='teamIcon' />
          
        </div>
      </ motion.article>    
        < motion.article {...animation.h2[2]}>
        <img src={per3} alt="client" />
        <div>
          <h3>Walter White</h3>
          <p>Chief Executive Officer</p>
          <hr />
          <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
          <BsTwitter className='teamIcon' /><BsFacebook className='teamIcon' /><BsInstagram className='teamIcon' /><BsLinkedin className='teamIcon' />
          
        </div>
      </ motion.article>    
        < motion.article {...animation.h2[2]}>
        <img src={per4} alt="client" />
        <div>
          <h3>Walter White</h3>
          <p>Chief Executive Officer</p>
          <hr />
          <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
          <BsTwitter className='teamIcon' /><BsFacebook className='teamIcon' /><BsInstagram className='teamIcon' /><BsLinkedin className='teamIcon' />
          
        </div>
      </ motion.article>
      </section>
    </div>  
  )
}

export default Team
