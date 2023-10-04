import React from 'react'
import './Content.css'
export default function Content() {
  return (
    <div className='content'>
         <h1>Login</h1>
         <input type='text' placeholder='Email'/>
         <input type='password' placeholder='Password'/>
         <button><a href=''>Sign in</a></button>
         <a href=''> Forgot your password?</a>
         <a href=''> Create Account</a>
    </div>
  )
}
