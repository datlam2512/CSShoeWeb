import React from "react";
import { Link } from "react-router-dom";
import "./Navigationshoe.css";
import { NavItem, Navbar, Icon, Tabs, Tab } from "react-materialize";
import { AudioOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Space } from "antd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
export default function () {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const items = [
    {
      key: "1",
      label: (
        <Link to={"/nike"} style={{ textDecoration: "none" }}>
          Nike
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={"/adidas"} style={{ textDecoration: "none" }}>
          Adidas
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to={"/converse"} style={{ textDecoration: "none" }}>
          Converse
        </Link>
      ),
    },
  ];
  return (
    <div className="Navbar">
      <div className="Navbarheader">
        <Link to="/">
          <img src="/Img/logo6.png" />
        </Link>
        <div className="search-cart-nav">
          <div className="container-search">
            <input className="input-search" type="text" placeholder="seach" />
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </div>
          <button className="shopping-cart" type="submit">
            <Link to="/CartContent">
              <i class="fa fa-shopping-cart cart" aria-hidden="true"></i>
            </Link>
          </button>
          <button className="Login" type="submit">
            {" "}
            <Link to="/Login">
              <i class="fa fa-user-circle-o login" aria-hidden="true"></i>
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
              style={{ textDecoration: "none", color: "#dbdbdb" }}
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
                    style={{ textDecoration: "none", color: "#dbdbdb" }}
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
    </div>
  );
}
