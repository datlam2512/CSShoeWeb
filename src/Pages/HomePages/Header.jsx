import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'antd';
export default function Header() {
  
  const contentStyle = {
    height: '500px',
    background: '#364d79',
  };
  return (
    <div className='Header'>
       <Carousel autoplay>
    <div className='banner'>
      <img src='/Img/banner.png' style={contentStyle}/>
    </div>
    <div className='banner'>
      <img src='/Img/slider5.jpg' style={contentStyle}/>
    </div>
    <div className='banner'>
    <img src='/Img/slider6.jpg' style={contentStyle}/>
    </div>
    <div className='banner'>
    <img src='/Img/banner4.webp' style={contentStyle}/>
    </div>
  </Carousel>
    </div>
  )
}
