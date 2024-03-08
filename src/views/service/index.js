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

function Service() {
  return (
    <>
      <div id='service' style={{ background: 'rgb(62, 25, 73)',paddingTop:"10px" }}>
          <h1 style={{textAlign:'center'}} >Professional Skillset</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <div className='skillicons'>
            <div className="icon-container">
              <a><RiJavascriptFill /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><TiHtml5 /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><IoLogoCss3 /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><SiTailwindcss /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><FaBootstrap /></a>
            </div>
          </div>
        </div>

        <div style={{ display:'flex',justifyContent:'center', alignItems:'center' }}>
          <div className='skillicons'>
            <div className="icon-container">
              <a><TbBrandRedux /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><LiaNode /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><SiFirebase /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><IoLogoReact /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><SiMongodb /></a>
            </div>
          </div>
        </div>

        <div style={{ display:'flex',justifyContent:'center', alignItems:'center' }}>
          <div className='skillicons'>
            <div className="icon-container">
              <a><FaGithubSquare /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><SiExpress /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><BiLogoTypescript /></a>
            </div>
          </div>
          <div className='skillicons'>
            <div className="icon-container">
              <a><TbBrandNextjs /></a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Service;