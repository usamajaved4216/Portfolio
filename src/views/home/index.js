import React from 'react'
import frontlogo from '../../assests/frontlogo.png'
import Avator from '../../assests/Avator.svg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Home() {

    return (
        <>
            <div id='home' className='main-div' style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 40,
                height: '90vh'
            }}>
                <div style={{ padding: 40, marginTop: '50px' }}>
                    <h4 style={{ margin: '20px 0' }}>Hello, My name is</h4>
                    <h1 style={{ fontSize: '4rem', margin: '10px 0' }}>Usama <span style={{ color: '#bf2237f1' }}>Javed</span></h1>
                    <h3 style={{ margin: '30px 0' }}>I’m a <span style={{ color: '#bf2237f1' }}>MernStack</span> Developer &<br />
                        <span style={{ color: '#bf2237f1' }}>Mobile </span>Application Developer
                    </h3>
                </div>

                <div className='frontImg' style={{ justifyContent: 'flex-end' }} >
                    <img style={{ width: '25rem', }} src={frontlogo} />
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                <div style={{ padding: 50 }}>
                    <h2 style={{ marginBottom: '50px ', fontSize: '3rem' }}>LET ME <span style={{ color: '#bf2237f1' }}>INTRODUCE</span> MYSELF</h2>
                    <h4 style={{ marginBottom: '15px' }}>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</h4>
                    <h4 style={{ marginBottom: '15px' }}>I am fluent in classics like <span style={{ color: '#bf2237f1' }}>Javascript, ReactJs and React Native.</span></h4>
                    <h4 style={{ marginBottom: '15px' }}>My field of Interest's are building new <span style={{ color: '#bf2237f1' }}>Web Technologies and Products </span> and also in</h4>
                    <h4 style={{ marginBottom: '15px' }}>areas related to<span style={{ color: '#bf2237f1' }}>Deep Learning and Natural Launguage Processing.</span></h4>
                    <h4 style={{ marginBottom: '15px' }}>Whenever possible, I also apply my passion for developing products with <span style={{ color: '#bf2237f1' }}>Modern</span></h4>
                    <h4 style={{ marginBottom: '15px', color: '#bf2237f1' }}>Javascript Library and Frameworks React.js<span>  like</span></h4>
                </div>

                <div style={{ justifyContent: 'flex-end', padding: 100 }} >
                    <img style={{ width: '13rem', }} src={Avator} />
                </div>
            </div>

            <div style={{ textAlign: 'center', height: '30vh' }}>
                <h2 style={{ fontSize: '2rem' }}>FIND ME ON</h2>
                <h4 style={{ marginTop: '10px' }}>Feel free to <span style={{ color: '#bf2237f1', }}>Connect</span> with me</h4><br />
                <a href='https://www.facebook.com/profile.php?id=100086084629928' style={{ color: '#1877F2', fontSize: 30, margin: '10px', }}><FaFacebookSquare /></a>
                <a href='https://www.linkedin.com/feed/' style={{ color: '#0A66C2', fontSize: 30, margin: '10px' }}><FaLinkedin /></a>
                <a href='https://web.whatsapp.com/' style={{ color: '#25D366', fontSize: 30, margin: '10px' }}><FaWhatsappSquare /></a>
                <a href='https://www.instagram.com/usamasheikh4216/' style={{ color: '#C13584', fontSize: 30, margin: '10px' }}><FaInstagramSquare /></a>
            </div>
        </>
    )
}

export default Home;

