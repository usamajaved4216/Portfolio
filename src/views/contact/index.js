import React from 'react'

function Contact() {
  return (
    <>
    
    <div id='contact' style={{ height:'100%', textAlign: 'center', padding: '50px', backgroundColor: 'bisque', borderRadius: '10px', }}>
      <h1 style={{color:'black', fontSize:"40px"}}>CONTACT</h1>
      <p className='contactDescrpition'>Have a question or want to work together?</p>
      <div style={{ margin: '30px 0' }}>
        <p className='contactfont' >Email: <h5 className='contactfontA' href="https://mail.google.com/mail/u/0/?ogbl#inbox" >usamajaved4216@gmail.com</h5></p>
        <p className='contactfont' >WhatsApp: <h5 className='contactfontA' href="https://web.whatsapp.com/" >+92 319 6561816</h5></p>
        <p className='contactfont' >LinkedIn: <h5 className='contactfontA' href="https://www.linkedin.com/in/usama-javed-8ba27829b/" >Usama Javed</h5></p>
        <p className='contactfont' >Instagram: <h5 className='contactfontA' href="https://www.instagram.com/usamasheikh4216/" >usamajaved4216</h5></p>
      </div>
      <p style={{ fontSize: '16px', color: '#333', fontSize:'25px' }}>Made with ❤️ by Usama Javed</p>
    </div>

    </>
  )
}

export default Contact;