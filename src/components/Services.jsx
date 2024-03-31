import React from 'react'
import { motion } from 'framer-motion';

import {BiBasketball,BiLayer} from 'react-icons/bi'
import {GiNotebook,GiSpeedometer} from 'react-icons/gi'
const Services = () => {
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
          delay: 0.6, 
        },
      },
    ],
  };
  return (
    <>
   <div id='services' >
    <section >
      <motion.h2 {...animation.h1} >Services</motion.h2>
      <div className='hr'><div className='subhr'></div></div>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      <section className='articles'>
      <motion.article {...animation.h2[0]}>
        <BiBasketball className='serIcon' />
        <h3>Lorem Ipsum</h3>
        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
      </motion.article>
      <motion.article {...animation.h2[1]}>
        <GiNotebook className='serIcon' />
        <h3>Lorem Ipsum</h3>
        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
      </motion.article>
      <motion.article {...animation.h2[2]}>
        <GiSpeedometer className='serIcon' />
        <h3>Lorem Ipsum</h3>
        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
      </motion.article>
      <motion.article {...animation.h2[3]}>
        <BiLayer className='serIcon' />
        <h3>Lorem Ipsum</h3>
        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
      </motion.article>
      </section>
    </section>
   </div>
   <section className='actionCall'>
   <div>
        <h1>Call To Action</h1>
        <p>Duis aute irure dolor in rreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <button>Call To Action</button>
</section>
</>
  )
}

export default Services
