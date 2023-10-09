/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button, Card } from 'antd';
import { Link } from "react-router-dom";
export default function Body({ Shoes5k }) {
  const { Meta } = Card;
  return (
    <div className="Body">
      <div className="View-items">
       <Link  style={{ textDecoration: 'none' }} to={'/shop'} className="view-product">View All...</Link>
      </div>
      <div className="container">
        <div className="row content-shoes">
          {Shoes5k.map((shoes) => (
            <div className="col-lg-4 col-md-5 col-sm-6 card">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src={shoes.img}
                  />
                }
              >
                <Meta
                  title={shoes.tittle}
                  description={shoes.price}
                />
              <div className='view-product'>
                        <button className='view-btn'>VIEW</button>
                    </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
