import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  return (
    <div className='Header'>
      
      <div className='Slider'>
        <div className='slides'>
          <input type='radio' name='radio-btn' id='radio1' />
          <input type='radio' name='radio-btn' id='radio2' />
          <input type='radio' name='radio-btn' id='radio3' />
          <input type='radio' name='radio-btn' id='radio4' />
          <div className='slide first'>
            <img src='/Img/banner.png' alt='' />
          </div>
          <div className='slide '>
            <img src='/Img/slider6.jpg' alt='' />
          </div>
          <div className='slide '>
            <img src='/Img/slider5.jpg' alt='' />
          </div>
          <div className='slide '>
            <img src='/Img/banner4.webp' alt='' />
          </div>
        </div>
        <div className='navigation-manual'>
          <label for='radio1' className='manual-btn'></label>
          <label for='radio2' className='manual-btn'></label>
          <label for='radio3' className='manual-btn'></label>
          <label for='radio4' className='manual-btn'></label>
        </div>
      </div>
    </div>
  )
}
