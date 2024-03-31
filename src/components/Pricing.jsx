import React, {useState} from 'react'
import { motion } from "framer-motion";
import {TiTick } from 'react-icons/ti'
import {BsChevronDown} from 'react-icons/bs'
import {RxCross2,RxQuestionMarkCircled} from 'react-icons/rx'

const Pricing = () => {
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
          duration: 0.8,
        }
      },
      h2: {
        initial: {
          y: "-50%",
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
    <>
    <div id='pricing'>
      <motion.h2  {...animation.h1}>Pricing</motion.h2>
      <div className='hr'><div className='subhr'></div></div>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <section>
            <motion.article {...animation.h2[0]}>
                <h3>Free Plan</h3>
                <h2>$0</h2>
                <b>per month</b>
                <p><TiTick className='priceIcon' /> Quam adipiscing vitae proin</p>
                <p><TiTick className='priceIcon' /> Nec feugiat nisl pretium</p>
                <p><TiTick className='priceIcon' /> Nulla at volutpat diam uteera</p>
                <p><RxCross2 className='priceIcon' /> Pharetra massa massa ultricies</p>
                <p><RxCross2 className='priceIcon' /> Massa ultricies mi quis hendrerit</p>
                <button>Get Started</button>
            </motion.article>
            <motion.article {...animation.h2[1]}>
                <div className='line'></div>
                <h3>Bussiness Plan</h3>
                <h2>$29</h2>
                <b>per month</b>
                <p><TiTick className='priceIcon' /> Quam adipiscing vitae proin</p>
                <p><TiTick className='priceIcon' /> Nec feugiat nisl pretium</p>
                <p><TiTick className='priceIcon' /> Nulla at volutpat diam uteera</p>
                <p><TiTick className='priceIcon' /> Pharetra massa massa ultricies</p>
                <p><TiTick className='priceIcon' /> Massa ultricies mi quis hendrerit</p>
                <button>Get Started</button>
            </motion.article> 
            <motion.article {...animation.h2[2]}>
                <h3>Developer Plan</h3>
                <h2>$49</h2>
                <b>per month</b>
                <p><TiTick className='priceIcon' /> Quam adipiscing vitae proin</p>
                <p><TiTick className='priceIcon' /> Nec feugiat nisl pretium</p>
                <p><TiTick className='priceIcon' /> Nulla at volutpat diam uteera</p>
                <p><TiTick className='priceIcon' /> Pharetra massa massa ultricies</p>
                <p><TiTick className='priceIcon' /> Massa ultricies mi quis hendrerit</p>
                <button>Get Started</button>
            </motion.article>
        </section>
    </div>
    <div id='FAQ'>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <div className='hr'><div className='subhr'></div></div>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <article onClick={() => toggleQuestion(1)}>
            <h3><aside><RxQuestionMarkCircled className='icon'/> Non consectetur a erat nam at lectus urna duis? </aside><span><BsChevronDown className='FAQicon'/></span> </h3>
            <p  style={{
                  display: activeQuestion === 1 ? 'block' : 'none',
                  padding: '20px',
                }}>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
        </article>
        <article onClick={() => toggleQuestion(2)}>
            <h3><aside><RxQuestionMarkCircled className='icon'/> Feugiat scelerisque varius morbi enim nunc?</aside> <span><BsChevronDown className='FAQicon'/></span> </h3>
            <p  style={{
                  display: activeQuestion === 2 ? 'block' : 'none',
                  padding: '20px',
                }}>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
        </article> <article onClick={() => toggleQuestion(3)}>
            <h3><aside><RxQuestionMarkCircled className='icon'/> Dolor sit amet consectetur adipiscing elit?</aside> <span><BsChevronDown className='FAQicon'/></span> </h3>
            <p  style={{
                  display: activeQuestion === 3 ? 'block' : 'none',
                  padding: '20px',
                }}>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
        </article> <article  onClick={() => toggleQuestion(4)}>
            <h3><aside><RxQuestionMarkCircled className='icon'/> Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</aside> <span><BsChevronDown className='FAQicon'/></span> </h3>
            <p  style={{
                  display: activeQuestion === 4 ? 'block' : 'none',
                  padding: '20px',
                }}>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.</p>
        </article> <article onClick={() => toggleQuestion(5)}>
            <h3><aside><RxQuestionMarkCircled className='icon'/> Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</aside> <span><BsChevronDown className='FAQicon'/></span> </h3>
            <p  style={{
                  display: activeQuestion === 5 ? 'block' : 'none',
                  padding: '20px',
                }}>Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.</p>
        </article>
    </div>
    </>
  )
}

export default Pricing
