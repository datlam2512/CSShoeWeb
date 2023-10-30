import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
export default function 
() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_an92sag', 'template_kwiayh5', form.current, 'MfcBNeLDL7S9m3IiC')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      const SubmiReset=()=>{
        document.getElementById("form-contact").reset();
      }
  };
  return (
    <div id='form-contact'>
      <h1 className='Contact-h1'>Contact</h1>
      <div className='form-input'>
        <form ref={form} onSubmit={sendEmail}>
      <label >Name</label>
      <input className='input' type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone</label>
      <input type="input" name="user_phone" />
      <label>Message</label>
      <textarea name="message" />
      <input onClick={SubmiReset} className='submit' type="submit" value="Send" />
    </form>
    </div>
    </div>
  )
}
