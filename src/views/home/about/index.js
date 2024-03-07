import React from 'react'
import itsMe from '../../../assests/itsME.jpg'
import { RiJavascriptFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { TbBrandRedux } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

function About() {
  return (
    <>
      <div id="about" style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 40,
        height: '80vh'
      }}>
        <div>
          <h2>About <span>Me</span></h2>
          <h4>Hello Dear, I am Usama Javed From Karachi, Pakistan</h4>
          <h4>A PAssionate MERN Stack Software Developer🚀</h4>
        </div>
        <div style={{ width: '250px', height: '250px' }}>
          <img src={itsMe} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} alt="My Image" />
          <h2>usama <span>Javed</span></h2>
          <h4>MERN Stack Developer</h4>
        </div>
      </div>
      <div>
        <h1>Professional Skillset</h1>
        <a><RiJavascriptFill /></a>
        <a><TiHtml5 /></a>
        <a><IoLogoCss3 /></a>
        <a><SiTailwindcss /></a>
        <a><FaBootstrap /></a>
        <div>
          <a><TbBrandRedux /></a>
          <a><LiaNode /></a>
          <a><SiFirebase /></a>
          <a><IoLogoReact /></a>
          <a><SiMongodb /></a>
        </div>
        <div>
          <a><FaGithubSquare /></a>
          <a><SiExpress /></a>
          <a><BiLogoTypescript /></a>
          <a></a>
        </div>
      </div>
    </>
  )
}

export default About;