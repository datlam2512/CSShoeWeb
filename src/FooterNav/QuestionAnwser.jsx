import React from 'react'
import { Collapse, Typography, Row } from 'antd'
import './shipment.css'
export default function QuestionAnwser() {
  const { Panel } = Collapse;
  const { Title } = Typography;
  return (
    <div>
    <h1 className='title-QNA' style={{fontSize:'30px', marginLeft:'20px'}}>FREQUENTLY ASKED QUESTIONS</h1>
    <Row justify="center"> 
    <div style={{ width: '80%' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Delivery time</Title>
      <Collapse>
      <Panel header={<div style={{ textAlign: 'center' }}><strong>When can I expect my order?</strong></div>} key="1">
          <p>Our aim is to send your customized sneakers within 14 working days. However, we depend on the carrier, so it may be that your order is delayed. Please note that this may be more common around public holidays.</p>
        </Panel>
        <Panel header={<div style={{ textAlign: 'center' }}><strong>Where can I track my order?</strong></div>} key="2">
          <p>When placing an order above the 100,000 VND - you will get a standard track & trace. <br/>
          <b>* This is automatically sent to the e-mail address you provided by the carrier of your choice, DHL or PostNL. It is possible that this e-mail ends up in the SPAM box.</b><br/>
          Don't you receive a track & trace? Please contact us via our contact form, Instagram @customsneaker.nl or via our e-mail info@SolePalette.nl</p>
        </Panel>
      </Collapse>
      <br/>
      <Title level={2} style={{ textAlign: 'center' }}>Payment options</Title>
      <Collapse>
      <Panel header={<div style={{ textAlign: 'center' }}><strong>How can I pay for my order?</strong></div>} key="1">
          <p>
          SolePalette works with third secure internet payment system to process the payment of an order. All payments are made in a secure environment. On the webshop of CustomSneaker you can pay with iDEAL, PayPal and Creditcard.<br/>

          As soon as the payment has been made, the order will be created automatically and we will get started! This way you will get your customized sneakers the quickest.
          </p>
        </Panel>
        <Panel header={<div style={{ textAlign: 'center' }}><strong>Can I pay in other currencies?</strong></div>} key="2">
          <p>Yes! When paying for your order, payment is always in euro’s. If the currency in your country is USD, USD will be debited from your account! This all happens automatically.</p>
        </Panel>
      </Collapse>
      <br/>
      <Title level={2} style={{ textAlign: 'center' }}>Shipping</Title>
      <Collapse>
      <Panel header={<div style={{ textAlign: 'center' }}><strong>Does SolePalette send to...?</strong></div>} key="1">
          <p>
            SolePalette uses worldwide shipping! This means that you can place an order anywhere in the world and your shoes will be delivered to your home!
          </p>
        </Panel>
        <Panel header={<div style={{ textAlign: 'center' }}><strong>How much does shipping cost?</strong></div>} key="2">
        <p>The shipping costs depend on the value of the order and country of destination. For VietNam orders applies:</p>
        <ul>
          <li>0 - 75,000 VND = 120,000 VND shipping costs (with Track & Trace)</li>
          <li>+ 2,000,000 VND = Free shipping within the Netherlands (with Track & Trace)</li>
        </ul>
        <b><p>ThaiLand</p></b>
        <p>200,000 shipping costs. Upon shipment you will receive a Track and Trace code so you can track your order. Registered shipping is possible. The cost for registered shipping is 300,000 VND.</p>
        <b><p>Asian</p></b>
        <p>200,000 VND postage. At shipping you will get a Track and Trace code so you can track your order. Registered shipping is possible. The cost for registered shipping is 350,000 VND.</p>
        <p>The rest of the world</p>
        <p>500,000 VND. At shipping you will get a Track and Trace code so you can track your order. Registered shipping is possible. The cost for registered shipping is 700,000 VND.</p>
        </Panel>
        <Panel header={<div style={{ textAlign: 'center' }}><strong>Which carrier delivers my package?</strong></div>} key="3">
          <p>Our regular carriers are DHL and PostNL. Most orders are shipped with PostNL. We also use PostNL for international shipments. They in turn use carriers in the country of arrival. In most cases we can see which carrier in the country of arrival has accepted and will deliver the package. This can only be seen when the parcel is actually in the hands of this company.</p>
        </Panel>
      </Collapse>
      <br/>
      <Title level={2} style={{ textAlign: 'center' }}>Create Your Own</Title>
      <Collapse>
      <Panel header={<div style={{ textAlign: 'center' }}><strong>How much does it cost to develop your own idea?</strong></div>} key="1">
          <p>SolePalette can work out any idea as long as the shoes are made of leather. SolePalette uses the best quality products available for customizing sneakers.
          <br/>By using the best products available there are infinite possibilities. Do you have your own idea? Take a look at our create your own!</p>
        </Panel>
        <Panel header={<div style={{ textAlign: 'center' }}><strong>Can I submit my own idea?</strong></div>} key="2">
        <p>At SolePalette you can have your own idea worked out. Under ‘Create Your Own’ you'll find a form where you can indicate what you'd like. Send a picture of what you want so it's clear at once what exactly you want. That way we can tell you right away what your idea would cost.</p>
        </Panel>
        <Panel header={<div style={{ textAlign: 'center' }}><strong>How much does it cost to develop your own idea?</strong></div>} key="3">
        <p>This varies greatly from design to design. The longer we are working on your idea, the more expensive it would become. A small measure for if you want to send in an idea:</p>
        <ul>
          <li>If you want to color for example only the Nike logo, the prices are from 2,000,000 VND.</li>
          <li>If you want to have a cartoon figure made on your shoe, the price for an easy cartoon is from 6,000,000 VND.</li>
          <li>If you want a portrait of for example your favorite artist, the prices are from 14,000,000 VND.</li>
        </ul>
        </Panel>
      </Collapse>
      <br/>
      <Title level={2} style={{ textAlign: 'center' }}>Returns</Title>
      <Collapse>
      <Panel header={<div style={{ textAlign: 'center' }}><strong>Why is it not possible to return custom sneakers?</strong></div>} key="1">
          <p>
          Some custom sneakers are available directly from stock, but in most cases we make a custom sneaker especially for you on request in the desired size. If you have doubts about ordering a custom sneaker because returning is not possible, an appointment can be made with SolePalette so that sneakers can be viewed or fitted if possible.
          </p>
        </Panel>
        <Panel header={<div style={{ textAlign: 'center' }}><strong>How can I return my order?</strong></div>} key="2">
        <p>Orders can be returned provided a number of conditions are met:</p>
        <ul>
          <li>The ordered items must be in their original condition, unopened and unused.</li>
          <li>The order must be returned within 14 days of receipt.</li>
          <li>If you wish to return an order, you must make this known by sending an email to Info@SolePalette.nl. You will then receive a returns sheet that must be sent with the returns.</li>
          <li>The shipping costs incurred when returning are borne by the customer.</li>
          <li>Once the return has been received, we will return the payment as soon as possible.</li>
        </ul>
        <p><strong>SolePalette is not responsible for products that are damaged or lost during return shipping.</strong></p>
        <p><strong>Custom sneakers have different return conditions.</strong></p>
        </Panel>
      </Collapse>
      <br/>
      <Title level={2} style={{ textAlign: 'center' }}>Contact</Title>
      <Collapse>
      <Panel header={<div style={{ textAlign: 'center' }}><strong>How can I reach you?</strong></div>} key="1">
      <p>Social media:</p>
      <ul>
        <li>We can be reached via Instagram: @SolePalette.nl, <a href="https://www.instagram.com/SolePalette.nl" target='_blanks'>click here</a> to navigate to the page.</li>
        <li>We can be reached via Facebook, <a href="https://www.facebook.com/SolePalette.nl" target='_blanks'>click here</a> to navigate to the page.</li>
      </ul>
      <p>E-mail:</p>
      <ul>
        <li>We can be reached via the contact form on our website. <a href="https://www.solepalette.nl/contact" target='_blanks'>Click here</a> to navigate to the page.</li>
        <li>We can be reached by e-mail: <a href="mailto:Info@SolePalette.nl" target='_blanks'>Info@SolePalette.nl</a>.</li>
      </ul>
        </Panel>
      </Collapse>
    </div>
  </Row>
    </div>
  )
}
