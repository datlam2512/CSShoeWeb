import React, { useState } from 'react'
import Blogs from './ListOfBlog'
import './Blog.css'
import { Link } from 'react-router-dom';
export default function BlogContent() {
  const [blogs, setbBlog] = useState([]);
  return (
    <div>
      <div className='Container'>
        <div className='row blog-content'>  
   {Blogs.map((blogs)=>(
    <div className='col-lg-4 col-md-5 col-sm-6 card-blog'>
    <img src={blogs.img}/>
    <Link to={`/blog-detail/${blogs.id}`} ><p className='infor-content'>{blogs.tittle}</p></Link>
    </div>
   ))}
   </div>
   </div>
    </div>
  )
}
