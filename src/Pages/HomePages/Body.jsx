import React from 'react'
import './Body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function Body({Shoes5k}) {
  return (
    <div className='Body'>
   <div className='View-items'>
   <a href=''>View All</a>
   </div>
    <div className='container'>
     <div className='row content-shoes'>
       {Shoes5k.map((shoes)=>(
        <div className='col-lg-4 col-md-5 col-sm-6 card'>
           <div className='img-content'>
            <img className='shoescontent' src={shoes.img}/>
            <button><a href=''>Shop</a></button>
            </div>
          <div className=' detail-product'>
            <div className='star'>
            <span>4.9</span>
            <i>
            <FontAwesomeIcon icon={faStar} />
            </i>
            </div>
            <div className='price'>   

            <p>{shoes.price}</p>
            </div>
        </div>
        </div>
       ))}
     </div>
    </div>
    </div>
  )
}
