import React from 'react'
import frontlogo from '../../assests/frontlogo.png'


function Home() {

    return (
        <>
            <div id='home' className='Home-main-div' style={{
                display: 'flex',
                justifyContent: 'space-between',
                
            }}>
                <div className='home-text-div' style={{ marginTop:'10%', marginLeft:'10%'}}>
                    <p  className='homedescription'>Hello, My name is</p>
                    <h1 className='usamajaved'>Usama <span style={{ color: '#bf2237f1' }}>Javed</span></h1>
                    <p className='homedescription'>I’m a <span style={{ color: '#bf2237f1' }}>MernStack</span> Developer &<br />
                    <span style={{ color: '#bf2237f1' }}>Mobile </span>Application Developer </p>
                </div>

                <div className='homelogo' style={{ justifyContent: 'flex-end',marginTop:'5%', marginRight:'5%' }} >
                    <img className='homelogoimg' style={{ width: '25rem' }} src={frontlogo} />
                </div>
            </div><br/><br/><br/>

            
        </>
    )
}

export default Home;

