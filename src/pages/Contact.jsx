import React from 'react'

function Contact() {
  const handleFormSubmit = (formData)=>{
    const formInputData = Object.fromEntries(formData.entries())
    // console.log(formInputData);
    
  }
  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>
      <div className='contact-wrapper container'>
        <form action={handleFormSubmit}>
        <input 
        type="text"
        className='form-control'
        required
        autoComplete='off'
        placeholder='Enter your name'
        name='username' 
        />
        <input 
        type="email" 
        name="email"
        className='form-control'
        placeholder='Enter your email'
        autoComplete='off'
        required 
        />
        <textarea 
        name="message" 
        className='form-control'
        rows='10'
        placeholder='Enter your message'
        required
        autoComplete='off'
        ></textarea>
        <button type='submit' value= 'send'>Send</button>
        
      </form>
      </div>
    </section>
  )
}

export default Contact