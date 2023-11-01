import React, {useRef} from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
export default function Header() {
  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  }

  const previous = () => {
    carouselRef.current.prev();
  }
  const contentStyle = {
    height: '500px',
    background: '#364d79',
  };
  return (
    <div className='Header'>
      <Button className="butt-1" type="ghost" icon={<LeftOutlined />} onClick={previous} />
      <Carousel autoplay autoplaySpeed={2000} ref={carouselRef}>
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
      <Button className="butt-2" type="ghost" icon={<RightOutlined />} onClick={next} />
    </div>
  )
}
