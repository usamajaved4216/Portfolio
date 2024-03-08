import React from 'react'
import itsMe from '../../../assests/itsME.jpg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function About() {
  return (
    <>
      <div id="about"  style={{ background: '#171e28',paddingBottom:'50px' }}>
        <div  style={{ width: '100%',  display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'5%' }}>
          <div className='aboutTopLogo' style={{ width: '250px', height: '250px', textAlign: 'center' }}>
            <img src={itsMe} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} alt="My Image" />
            <h2>usama <span>Javed</span></h2>
            <h4>MERN Stack Developer</h4>
          </div> 
        </div><br/><br/>
        <div className='about-main-div' style={{
          display: 'flex',
          justifyContent: 'space-between',
          // padding: 50,
        }}>
          <div className='about-text-div' style={{ margin: '10% 0 0 5%',}}>
            <h2 style={{ fontSize: '3rem' }}>About <span style={{ color: '#bf2237f1' }}>Me</span></h2><br/>
          <p style={{fontSize:'25px'}}>A passionate<span style={{ color: '#bf2237f1' }}> Full Stack Software Developer </span>🚀 having an experience of building Web and Mobile applications with <span style={{ color: '#bf2237f1' }}> JavaScript / Reactjs / React Native / Nodejs / Firebase / MongooDB </span> and some other cool libraries and <span style={{ color: '#bf2237f1' }}> frameworks</span> .</p><br/>
          <p style={{fontSize:'25px'}}>I have <span style={{ color: '#bf2237f1' }}>1+ years</span>of development experience building<span style={{ color: '#bf2237f1' }}> fullstack</span> products from scratch, developing and integrating <span style={{ color: '#bf2237f1' }}>APIs</span>, working with a variety of <span style={{ color: '#bf2237f1' }}> databases</span> and clould platforms and more recently developing mobile applications with <span style={{ color: '#bf2237f1' }}>React Native</span>.</p>
          </div>
          <div className='aboutBottomLogo' style={{ width: '250px', height: '250px', margin: '5% 5% 0 0', textAlign: 'center' }}>
            <img src={itsMe} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} alt="My Image" />
            <h2>usama <span>Javed</span></h2>
            <h4>MERN Stack Developer</h4>
          </div>
        </div><br /><br /><br /><br /><br /><br />
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem' }}>FIND ME <span style={{ color: '#bf2237f1' }} >ON</span></h2>
          <h4 style={{ marginTop: '10px' }}>Feel free to <span style={{ color: '#bf2237f1', }}>Connect</span> with me</h4><br />
          <a href='https://www.facebook.com/profile.php?id=100086084629928' style={{ color: '#1877F2', fontSize: 30, margin: '10px', }}><FaFacebookSquare /></a>
          <a href='https://www.linkedin.com/feed/' style={{ color: '#0A66C2', fontSize: 30, margin: '10px' }}><FaLinkedin /></a>
          <a href='https://web.whatsapp.com/' style={{ color: '#25D366', fontSize: 30, margin: '10px' }}><FaWhatsappSquare /></a>
          <a href='https://www.instagram.com/usamasheikh4216/' style={{ color: '#C13584', fontSize: 30, margin: '10px' }}><FaInstagramSquare /></a>
        </div>
      </div>
    </>
  )
}

export default About;