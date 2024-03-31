import React from 'react'
import {BsPlayCircle,BsChevronDown} from 'react-icons/bs'
import {RxCross2,RxHamburgerMenu} from 'react-icons/rx'

import home from '../resources/home.png'
import logo1 from '../resources/1.png'
import logo2 from '../resources/2.png'
import logo3 from '../resources/3.png'
import logo4 from '../resources/4.png'
import logo5 from '../resources/5.png'
import logo6 from '../resources/6.png'


const Home = ({menuOpen,setMenuOpen}) => {
  return (
    <main>
      <RxHamburgerMenu className='menuIcon' onClick={() => setMenuOpen(!menuOpen)} />
      <div className="home" id='home'>
          <div>
              <h2>Better Solutions For Your Business</h2>
              <h4>We are team of talented designers making websites with Bootstrap</h4>
              <button>Get Started</button>
              <button><BsPlayCircle className='icon' /> Watch Video</button>
          </div>
          <img src={home} alt="homepng" />
      </div>
      <div className='logos'>
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
          <img src={logo3} alt="logo" />
          <img src={logo4} alt="logo" />
          <img src={logo5} alt="logo" />
          <img src={logo6} alt="logo" />
      </div>
    </main>
  )
}
export const NavHeader= ()=>{
  return (
    <div className='navContainer'>
      <div className='Header'>
    <h3>ARSHA</h3>
    <div> 
      <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About US</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#team'>Team</a></li>
          <li><a href='#dropDown'>DropDown<BsChevronDown className='icon'/></a></li>
          <li><a href='#contact'>Contact</a></li>
          <li><a href='#about'><button>Get Started </button> </a></li>
      </ul> 
      </div>
  </div>
    </div>
  )
}
export const HeaderPhone = ({menuOpen , setMenuOpen}) => (
  <div className={`navPhone ${menuOpen? "navAppear": ""}`} >
    <RxCross2 onClick={() => setMenuOpen(false)} className='crIcon'/> 
     <ul setMenuOpen={setMenuOpen}>
              <li><a onClick={() => setMenuOpen(false)} href='#home'>Home</a></li>
              <li><a onClick={() => setMenuOpen(false)} href='#about'>About US</a></li>
              <li><a onClick={() => setMenuOpen(false)} href='#services'>Services</a></li>
              <li><a onClick={() => setMenuOpen(false)} href='#portfolio'>Portfolio</a></li>
              <li><a onClick={() => setMenuOpen(false)} href='#team'>Team</a></li>
              <li><a onClick={() => setMenuOpen(false)} href='#dropDown'>DropDown</a><BsChevronDown className='icon'/></li>
              <li><a onClick={() => setMenuOpen(false)} href='#contact'>Contact</a></li>
              <li><a onClick={() => setMenuOpen(false)} href='#about'><button>Get Started </button> </a></li>
          </ul> 
  </div>
)

export default Home
