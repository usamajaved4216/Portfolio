import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import frontlogo from '../../assests/frontlogo.png'
import Typewriter from 'typewriter-effect';


function Home() {

    useEffect(() => {
        AOS.init({ duration: '1000' });
    }, []);

    return (
        <>
            <div id='home' className='Home-main-div' style={{
                display: 'flex',
                justifyContent: 'space-between',

            }}>
                <div className='home-text-div' data-aos="fade-right" style={{ marginTop: '10%', marginLeft: '10%' }}>
                    <p className='homedescription'>Hello, My name is</p>
                    <h1 className='usamajaved'>Usama <span style={{ color: '#bf2237f1' }}>Javed</span></h1>
                    <div className='homedescription' style={{ color: '#bf2237f1', fontWeight:'bold' }} >
                        <Typewriter
                            options={{
                                strings: ['MERN Stack Developer', 'Mobile Application Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>

                <div className='homelogo' data-aos="fade-left" style={{ justifyContent: 'flex-end', marginTop: '5%', marginRight: '5%' }} >
                    <img className='homelogoimg' style={{ width: '25rem' }} src={frontlogo} />
                </div>
            </div><br /><br /><br />


        </>
    )
}

export default Home;

