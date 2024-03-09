import React from 'react'
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
import { MdDeveloperMode } from "react-icons/md";

function Service() {
  return (
    <>
      <div id='service' style={{ background: 'rgb(62, 25, 73)', padding: "10px 0 50px 0" }}>
        <h1 style={{ textAlign: 'center', margin: '20px' }} >Professional Skillset</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <div className='skillicons'>
            <div className="icon-container">
              <p><RiJavascriptFill /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><TiHtml5 /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><IoLogoCss3 /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><SiTailwindcss /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><FaBootstrap /></p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='skillicons'>
            <div className="icon-container">
              <p><TbBrandRedux /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><LiaNode /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><SiFirebase /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><IoLogoReact /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><SiMongodb /></p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='skillicons'>
            <div className="icon-container">
              <p><FaGithubSquare /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><SiExpress /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><BiLogoTypescript /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><TbBrandNextjs /></p>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <p><MdDeveloperMode /></p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}


export default Service;