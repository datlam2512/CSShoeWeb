/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigationshoe.css";
import { NavItem, Navbar, Icon, Tabs, Tab } from "react-materialize";
import { AudioOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Space, Menu } from "antd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import { UserContext } from "../../context/user-context";
import { DownOutlined } from '@ant-design/icons';

export default function () {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value)
  const handleClick = () => {
    if (user) {
      navigate('/Account')
    } else {
      navigate('/Login')
    }
  };
  const handleLogout = () => {
    setUser(null);
    navigate("/Login");
  }
  const menu = (
    <Menu style={{backgroundColor:'black'}}>
      <Menu.Item key="1" onClick={handleClick} style={{color:'white', fontFamily:'Unica One,sans-serif', fontSize:'larger'}}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" onClick={handleLogout} style={{color:'white', fontFamily:'Unica One,sans-serif', fontSize:'larger'}}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="Navbar">
      <div className="Navbarheader">
        <Link to="/">
          <img src="/Img/logo6.png" />
        </Link>
        <div className="Navbarbottom">
        <ul className="menu">
          <li>
            <Link
              className="link-nav"
              to="/"
              style={{ textDecoration: "none", color: "#dbdbdb" }}
            >
              Home
            </Link>
          </li>

          <li>
            <Space direction="vertical">
              <Space wrap>
                
                  <Link
                    className="link-nav"
                    to="/shop"
                    style={{ textDecoration: "none", color: "#dbdbdb" }}
                  >
                    Shop
                  </Link>
                
              </Space>
            </Space>
          </li>

          <li>
            <Link
              className="link-nav"
              to="/createyourown"
              style={{ textDecoration: "none", color: "#dbdbdb" }}
            >
              Create Your Own
            </Link>
          </li>
          <li>
            <Link
              className="link-nav"
              to="/about"
              style={{ textDecoration: "none", color: "#dbdbdb" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="link-nav"
              to="/contact"
              style={{ textDecoration: "none", color: "#dbdbdb" }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="link-nav"
              to="/sizeguide"
              style={{ textDecoration: "none", color: "#dbdbdb" }}
            >
              Size Guide
            </Link>
          </li>
          <li>
            <Link
              className="link-nav"
              to="/blogs"
              style={{ textDecoration: "none", color:'#dbdbdb' }}
            >
              Blog
            </Link>
          </li>
        </ul>
        </div>
        <div className="search-cart-nav">
          <div className="search-bars">
            <SearchBar/>
          </div>
          <button className="shopping-cart" type="submit">
            <Link to="/CartContent">
              <i class="fa fa-shopping-cart cart" aria-hidden="true"></i>
            </Link>
          </button>
          <button className="Login" type="submit" onClick={user ? null : handleClick}>
            {user ? (
              <Dropdown overlay={menu} trigger={['click']}>
                <Link style={{ display: 'flex', alignItems: 'center' }}>
                  <i class="fa fa-user-circle-o login" aria-hidden="true"></i> <DownOutlined />
                </Link>
              </Dropdown>
            ) : (
              <Link to="/Login">
                <i class="fa fa-user-circle-o login" aria-hidden="true"></i>
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
