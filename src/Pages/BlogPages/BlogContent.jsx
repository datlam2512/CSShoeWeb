import React, { useEffect, useState } from "react";
import Blogs from "./ListOfBlog";
import "./Blog.css";
import { Link } from "react-router-dom";
import { http } from "../../config/http";

export default function BlogContent() {
  const [blogs, setbBlog] = useState([]);

  const fetchAllBlogs = async () => {
    const data = (await http.get("/blogs/")).data;
    setbBlog(data);
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div>
      <div className="Container">
        <div className="row blog-content">
          {blogs.map(blogs => {
            return (
              <div className="col-lg-4 col-md-5 col-sm-6 card-blog">
                <img src={blogs.img} />
                <Link to={`/blog-detail/${blogs.id}`}>
                  <p className="infor-content">{blogs.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
