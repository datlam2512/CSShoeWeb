import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user-context";
import { Form, Input, Button, Modal } from 'antd';
import './Accountdetail.css'
import { useNavigate } from "react-router-dom";

function Accountdetail() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState(user.Email);
  const [firstName, setFirstName] = useState(user.FirstName);
  const [lastName, setLastName] = useState(user.LastName);
  const [gender, setGender] = useState(user.Gender);
  const [phoneNumber, setPhoneNumber] = useState(user.PhoneNumber);
  const [shippingAddress, setShippingAddress] = useState(user.ShippingAddress);

  useEffect(() => {
    setEmail(user.Email);
    setFirstName(user.FirstName);
    setLastName(user.LastName);
    setGender(user.Gender);
    setPhoneNumber(user.PhoneNumber);
    setShippingAddress(user.ShippingAddress);
  }, [user]);

  const handleSave = () => {
    Modal.confirm({
      title: 'Are you sure to accept these changes?',
      onOk() {
        setUser({
          ...user,
          Email: email,
          FirstName: firstName,
          LastName: lastName,
          Gender: gender,
          PhoneNumber: phoneNumber,
          ShippingAddress: shippingAddress,
        });
        navigate('/Account');
        console.log(user);
      },
      style: { top: '50%', transform: 'translateY(-50%)' },
    });
  };

  return (
    <div className="change-profile">
      <div className="profile-change-title">
        <h2>Change Your Profile</h2>
      </div>
      <Form className="account-detail-form"> 
        <Form.Item label="Email" className="form-item">
          <Input value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item label="First Name" className="form-item">
          <Input value={firstName} onChange={e => setFirstName(e.target.value)} />
        </Form.Item>

        <Form.Item label="Last Name" className="form-item">
          <Input value={lastName} onChange={e => setLastName(e.target.value)} />
        </Form.Item>

        <Form.Item label="Gender" className="form-item">
          <Input value={gender} onChange={e => setGender(e.target.value)} />
        </Form.Item>

        <Form.Item label="Phone Number" className="form-item">
          <Input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        </Form.Item>

        <Form.Item label="Shipping Address" className="form-item">
          <Input value={shippingAddress} onChange={e => setShippingAddress(e.target.value)} />
        </Form.Item>
        <div className="change-profile-butt">
          <Button onClick={handleSave}>Save</Button>
        </div>
      </Form>
    </div>
  );
}

export default Accountdetail;