import React from 'react'

function Contact() {
  return (
    <>
    
    <div id='contact' style={{ height:'100%', textAlign: 'center', padding: '50px', backgroundColor: 'bisque', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
      <h1 style={{color:'black', fontSize:"50px"}}>CONTACT</h1>
      <p style={{ marginBottom: '30px', color: '#333', fontSize:"30px" }}>Have a question or want to work together?</p>
      <div style={{ margin: '30px 0' }}>
        <p style={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.5', color: 'black', fontSize:'25px', fontWeight:'bold' }}>Email: <a href="https://mail.google.com/mail/u/0/?ogbl#inbox" style={{ color: '#0088cc', textDecoration: 'none', fontWeight: 'bold' }}>usamajaved4216@gmail.com</a></p>
        <p style={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.5', color: 'black', fontSize:'25px', fontWeight:'bold' }}>WhatsApp: <a href="https://web.whatsapp.com/" style={{ color: '#0088cc', textDecoration: 'none', fontWeight: 'bold' }}>+92 319 6561816</a></p>
        <p style={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.5', color: 'black', fontSize:'25px', fontWeight:'bold' }}>LinkedIn: <a href="https://www.linkedin.com/in/usama-javed-8ba27829b/" style={{ color: '#0088cc', textDecoration: 'none', fontWeight: 'bold' }}>Usama Javed</a></p>
        <p style={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.5', color: 'black', fontSize:'25px', fontWeight:'bold' }}>Instagram: <a href="https://www.instagram.com/usamasheikh4216/" style={{ color: '#0088cc', textDecoration: 'none', fontWeight: 'bold' }}>usamajaved4216</a></p>
      </div>
      <p style={{ fontSize: '16px', color: '#333', fontSize:'25px' }}>Made with ❤️ by Usama Javed</p>
    </div>

    </>
  )
}

export default Contact;