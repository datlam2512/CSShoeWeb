/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import { Avatar, List, Radio, Space } from "antd";
export default function Body( { id, imgUrl, name, price } ) {
  const data = [
    {
      title: <img className="img-bottom" src="/Img/banner3.jpeg"/>,
      name: <p>VIew All</p>
    },
    {
      title: <img className="img-bottom-product"  src="/Img/Bottom-product1.png" />,
      name:<p>Nike Air Force 1 Purple Sketch</p>,
      price:<p>2.500.000</p>
    },
    { 
      title: <img   className="img-bottom-product" src="/Img/Bottom-product2.png" />,
      name:<p>Nike Air Force 1 Low Diamonds - Black</p>,
      price:<p>3.500.000</p>
    },
    {
      title: <img   className="img-bottom-product" src="/Img/Bottom-product3.png" />,
      name:<p>Nike Air Force 1 Low Diamonds - White</p>,
      price:<p>4.500.000</p>
    },
    {
      title: <img  className="img-bottom-product" src="/Img/bottom-product4.png" />,
      name:<p>Nike Air Force 1 Joker </p>,
      price:<p>3.700.000</p>
    },
  ];
  const { Meta } = Card;
  return (
    <div className="Body">
      <div className="View-items">
        <Card
          className="card-home"
          style={{ width: 370, height: 400, textAlign: "center", border: 0 }}
        >
          <Link to={"/nike"} style={{ textDecoration: "none" }}>
            <h1>Nike</h1>
            <p></p>
            <img src="/Img/content1.png" />
          </Link>
        </Card>
        <Card
          className="card-home"
          style={{ width: 370, height: 400, textAlign: "center", border: 0 }}
        >
          <Link to={'/adidas'} style={{ textDecoration: "none" }}>
            <h1>Adidas</h1>
            <p></p>
            <img src="/Img/content3.png" />
          </Link>
        </Card>
        <Card
          className="card-home"
          style={{ width: 370, height: 400, textAlign: "center", border: 0 }}
        >
          <Link  to={'/converse'} className="converse" style={{ textDecoration: "none" }}>
            <h1>Converse</h1>
            <p></p>
            <img src="/Img/contentconverse.jpg" />
          </Link>
        </Card>
      </div>
      <div className="home-content">
        <div className="content-shoe">
          <img src="/Img/img-content.png" />
          <div className="information-home">
            <h2>Do you recognize that?</h2>
            <p>
              You're looking for new sneakers. Nowhere can you find that
              particular pair that you've been thinking about for a long time,
              until you finally find them after a long search. You decide to buy
              the sneakers, but suddenly Everyone else has the same sneakers.
            </p>
            <p>
              By CsShoe walk around on sneakers that nobody else has.
              That's exactly what you want, right?
            </p>
            <p>
            CsShoe sells a wide range of custom sneakers. There's
              something for everyone, even if you want your own design.
            </p>
            <h4>Possibilities:</h4>
            <p className="list-info">Pick from existing designs</p>
            <p className="list-info">Pick from existing designs on a different sneaker</p>
            <p className="list-info">Send your own design</p>
            <p className="list-info">To work together towards a design</p>
          </div>
        </div>
      </div>
      <div className="product-bottom">
      
        <List
          className="list-card"
          grid={{
            gutter: 0,
            column: 5,
          }}
          dataSource={data}
          renderItem={(item) => (
           
          <List.Item>
            
              <Card className="card-product-bottom" title={item.title}>
                <p className="name-bottom-product">{item.name}</p>
                <p>{item.price}</p>
              </Card>
            </List.Item>
       
          )}
        />
      </div>
    </div>
  );
}
