


import { useState,useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmark,handleReadingTime}) => {
    const [blogs,setBlogs]=useState([])
    console.log(blogs)
    useEffect(()=>{
       fetch('blogs.json')
       .then(rsc=> rsc.json())
       .then(data=>setBlogs(data))

    },[])
    return (
        <div className=" w-2/3">
           <h1>Blogs:{blogs.length}</h1> 
           {
            blogs.map(blog=><Blog key={blog.id} 
                blog={blog} 
                handleBookmark={handleBookmark}
                handleReadingTime={handleReadingTime}
                >
                </Blog>)
           }
        </div>
    );
};
Blogs.propTypes={
handleBookmark:PropTypes.func,
handleReadingTime:PropTypes.func
}
export default Blogs;