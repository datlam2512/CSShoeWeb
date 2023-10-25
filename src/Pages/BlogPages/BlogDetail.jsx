import React from 'react'
import Blogs from './ListOfBlog'
import './Blog.css'
import { useParams } from 'react-router-dom'
export default function () {
    const userName=useParams();
    const blogs= Blogs.find(obj=>{
        return obj.id==userName.id;
    });
  return (
    <div className='detail-blog'>
        <div className='blog-content-detail'>
         <h1>{blogs.tittle}</h1>
         <img src={blogs.img}/>
         <p>{blogs.content}</p>
         </div>
    </div>
  )
}
