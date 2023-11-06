import React from "react";
import Blogs from "./ListOfBlog";
import "./Blog.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { http } from "../../config/http";
import { useState } from "react";
export default function () {
  const params = useParams();
  // const blogs = Blogs.find(obj => {
  //   return obj.id == params.id;
  // });

  const [blog, setBlog] = useState();
  const fetchBlogs = async () => {
    const data = (await http.get(`/blogs/${params.id}`)).data;
    setBlog(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="detail-blog">
      <div className="blog-content-detail">
        {blog && (
          <>
            <h1>{blog.title}</h1>
            <img src={blog.img} />
            <p>{blog.content}</p>
          </>
        )}
      </div>
    </div>
  );
}
