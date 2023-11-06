import React, { useContext } from "react";
import { UserContext } from "../context/user-context";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./AccountPage.css";
import { loginUser } from "../Pages/Login/api";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accountdetail from "./Accountdetail";
import { clearUser } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";

function AccountPage() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleLogout = () => {
    setUser(null); //clear user tu context
    dispatch(clearUser())
    navigate("/Login");
  };
  return (
    <div className="account-page">
      <div className="subnav-account">
        <div className="subnav-top">
          <i>
            <FontAwesomeIcon icon={faUserCircle} />
          </i>
          <p>{user ? user.Username : ""}</p>
        </div>
        <ul>
          <li className="account-detail">
            <Link to={"#accountdetail"}>Account detail</Link>
          </li>
          <li className="account-detail">
            <Link to={"#addressship"}>Address detail</Link>
          </li>
          <li className="account-detail">
            <Link to={"/Account/purchase-history"}>Purchase History</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="account-content"></div>
      <div></div>
    </div>
  );
}

export default AccountPage;
