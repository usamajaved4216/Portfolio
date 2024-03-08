import React from 'react'

function Contact() {
  return (
    <>
    
    <div id='contact' style={{ height:'100%', textAlign: 'center', padding: '50px', backgroundColor: 'bisque', borderRadius: '10px', }}>
      <h1 style={{color:'black', fontSize:"40px"}}>CONTACT</h1>
      <p className='contactDescrpition'>Have a question or want to work together?</p>
      <div style={{ margin: '30px 0' }}>
        <p className='contactfont' >Email: <a href="https://mail.google.com/mail/u/0/?ogbl#inbox" style={{ color: '#0088cc', textDecoration: 'none', fontWeight: 'bold' }}>usamajaved4216@gmail.com</a></p>
        <p className='contactfont' >WhatsApp: <a href="https://web.whatsapp.com/" style={{ color: '#0088cc', textDecoration: 'none', fontWeight: 'bold' }}>+92 319 6561816</a></p>
        <p className='contactfont' >LinkedIn: <a href="https://www.linkedin.com/in/usama-javed-8ba27829b/" style={{ color: '#0088cc', textDecoration: 'none', fontWeight: 'bold' }}>Usama Javed</a></p>
        <p className='contactfont' >Instagram: <a href="https://www.instagram.com/usamasheikh4216/" style={{ color: '#0088cc', textDecoration: 'none', fontWeight: 'bold' }}>usamajaved4216</a></p>
      </div>
      <p style={{ fontSize: '16px', color: '#333', fontSize:'25px' }}>Made with ❤️ by Usama Javed</p>
    </div>

    </>
  )
}

export default Contact;