import React from 'react'
import './shipment.css'
export default function Shipment() {
  return (
    <div style={{marginLeft:'60px'}}>
    <h1 className='title-shipment' style={{fontSize:'40px'}}>SHIPMENT</h1>
    <h2>Shipping within Viet Nam</h2>
    <p>We aim to ship custom sneakers within 14 days. There are a number of factors that influence the feasibility of the shipping time we aim for. A number of factors are for example: shoes supplier & difficulty of design. When ordering custom sneakers we send an email with the expected time before we ship the package. PostNL always delivers the package within 48 hours.</p>
    <p>The shipping rates below.</p>
    <table className='table'>
    <tr>
        <th>Order</th>
        <th>Delivery costs</th>
    </tr>
    <tr>
        <td>0 - 250,000VND</td>
        <td>70,000VND</td>
    </tr>
    <tr>
        <td>+ 1,500,000VND</td>
        <td>Free</td>
    </tr>
    </table>
    <p>* Registered shipping is 170,000VND.</p>
    <p>All custom sneakers are shipped with track and trace code for free within the Netherlands.</p>
    <p>Custom sneakers generally have a longer delivery time. We strive to ship personalized sneakers within 10 days.</p>
    <p>Free shipping above 2,000,000 VND</p>
    <p>*Only for orders in the Netherlands. We ship both at home and abroad. Shipping is at the risk of the customer. That is why we advise to use a registered parcel post. For larger deliveries Customs By BB will make an appointment. Custom sneakers are always shipped with track and trace code.</p>

    <h2>THAILAND</h2>
    <p>We strive to ship custom sneakers within 14 days. There are a number of factors that affect the feasibility of the shipping time we want to pursue. A number of factors are for example: shoes supplier & difficulty of design. When ordering custom sneakers we send an email with the expected time before we ship the package. PostNL always delivers the package within 48 hours.</p>

    <p>Below the shipping rates.</p>

    <table className='table'>
    <tr>
        <th></th>
        <th>Shipment costs</th>       
    </tr>
    <tr>
        <td>+0 VND</td>
        <td>250,000 VND</td>
    </tr>
    <tr>
        <td>* Signed shipping is 300,000 VND</td>
    </tr>
    </table>

    <p>All custom sneakers are standard free of charge registered shipping to ThaiLand.</p>

    <p>Levening time: 1-4 working days</p>

    <b><p>  ASIA 300,000 VND NO TRACK & TRACE<br/>
            ASIA 350,000 VND WITH TRACK & TRACE<br/>
            ASIA 400,000 VND REGISTERED MAIL<br/></p></b>

    <p>We suggest using shipping with track & trace. If you choose to do different; we are not responsible for lost packages.</p>

    <table className='table'>
    <tr><td>Cambodia</td><td>4-6 business days</td></tr>
    <tr><td>Myanmar</td><td>3-5 business days</td></tr>
    <tr><td>China</td><td>4-6 business days</td></tr>
    <tr><td>Singapore</td><td>4-6 business days</td></tr>
    <tr><td>Malaysia</td><td>5-8 business days</td></tr>
    <tr><td>Indonesia</td><td>4-6 business days</td></tr>
    <tr><td>India</td><td>4-6 business days</td></tr>
    <tr><td>Australia</td><td>4-6 business days</td></tr>
    <tr><td>Cuba</td><td>7-10 business days</td></tr>
    </table>
    </div>
  )
}
