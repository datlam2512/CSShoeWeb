import React from "react";
import { Link } from "react-router-dom";
import "./Navigationshoe.css";
import { NavItem, Navbar, Icon, Tabs, Tab } from "react-materialize";
import { AudioOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Space } from "antd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function () {
  const { Search } = Input;
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
      <div className="Navbarheader">
        <img src="/Img/logo1.png" />
        <div className="search-cart-nav">
         <div className="container-search">
         <input className="input-search" type="text" placeholder="seach"/>
        <i><FontAwesomeIcon icon={faSearch} /></i>
          </div>
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
      <div className="Navbarbottom">
        <ul className="menu">
          <li>
            <Link
              className="link-nav"
              to="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>

          <li>
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                >
                   <Link
              className="link-nav"
              to="/"
              style={{ textDecoration: "none" }}
            >
              Shop
            </Link>
                </Dropdown>
              </Space>
            </Space>
          </li>

          <li>
            <Link
              className="link-nav"
              to="/createyourown"
              style={{ textDecoration: "none" }}
            >
              Create Your Own
            </Link>
          </li>
          <li>
            <Link
              className="link-nav"
              to="/about"
              style={{ textDecoration: "none" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="link-nav"
              to="/contact"
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="link-nav"
              to="/sizeguide"
              style={{ textDecoration: "none" }}
            >
              Size Guide
            </Link>
          </li>
        </ul>   
      </div>
    </div>
  );
}