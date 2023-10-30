import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
export default function 
() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_an92sag', 'template_fvx71ed', form.current, 'MfcBNeLDL7S9m3IiC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='form-contact'>
      <h1 className='Contact-h1'>Contact</h1>
      <div className='form-input'>
        <form ref={form} onSubmit={sendEmail}>
      <label >Name</label>
      <input className='input' type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='submit' type="submit" value="Send" />
    </form>
    </div>
    </div>
  )
}
