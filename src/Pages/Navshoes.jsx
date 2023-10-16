import React from 'react'
import { Link } from 'react-router-dom'
import './Navigationshoe.css'
import { NavItem,Navbar,Icon } from 'react-materialize';
import { AudioOutlined } from '@ant-design/icons';
import { Button, Dropdown , Input, Space } from "antd";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function () {
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1677ff',
          }}
        />
      );
      const onSearch = (value, _e, info) => console.log(info?.source, value);
  const items = [
    {
      key: "1",
      label: (
        <Link to={'/nike'}  style={{ textDecoration: "none" }}>Nike</Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={'/adidas'}  style={{ textDecoration: "none" }}>Adidas</Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to={'/vans'}  style={{ textDecoration: "none" }}>Vans</Link>
      ),
    },
  ];
  
  return (
        <div className="Navbar">
     <Navbar className='navmenu'
  alignLinks="right"
  brand={   <img src="/Img/Logo.png" />}
  id="mobile-nav"
  menuIcon={<FontAwesomeIcon className='iconmobile' icon={faBars} />}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>

  <Link to="/"  style={{ textDecoration: "none", color:'black' }}>Home</Link>
  <Link to=""  style={{ textDecoration: "none",color:'black' }}>Shop</Link>
  <Link to="/createyourown"  style={{ textDecoration: "none",color:'black' }}>Create Your Own</Link>
  <Link to="/about"  style={{ textDecoration: "none",color:'black' }}>About Us</Link>
  <Link to="/contact"  style={{ textDecoration: "none",color:'black' }}>Contact</Link>
  <Link to="/sizeguide"  style={{ textDecoration: "none",color:'black' }}>Size Guide</Link>
</Navbar>
    </div>
  )
}
