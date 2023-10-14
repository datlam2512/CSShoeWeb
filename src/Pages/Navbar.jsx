import React from "react";
import { Link } from "react-router-dom";
import { AudioOutlined } from '@ant-design/icons';
import "./HomePages/Header.css";
import { Button, Dropdown , Input, Space } from "antd";
export default function Navbar() {
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
      <div className="Container">
        <div className="row">
          <div className="col-2 Logo">
            <img src="/Img/Logo.png" />
          </div>
          <div className="col-7 Navigation">
            <nav>
              <ul className="menu">
                <div className="navmenu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    arrow
                  >
                   <li>
                    <Link to="">Shop</Link>
                  </li>
                  </Dropdown>
                  <li>
                    <Link to="/createyourown">Create Your Own</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/sizeguide">Size Guide</Link>
                  </li>
                 
                </div>
              </ul>
            </nav>
          </div>
          <div className="col-3 OtherHead">
          <Space direction="vertical">
    <Search
      placeholder="Search"
      onSearch={onSearch}
      style={{
        width: 200,
        marginTop:'25px',
        marginRight:'15px',
      }}
    />
  </Space>
            <button className="shopping-cart" type="submit">
              <Link to="/CartContent">
                <i class="fa fa-shopping-cart " aria-hidden="true"></i>
              </Link>
            </button>
            <button className="Login" type="submit">
              {" "}
              <Link to="/Login">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
