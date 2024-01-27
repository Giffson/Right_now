import { ChatBubbleBottomCenterTextIcon, HandThumbUpIcon} from '@heroicons/react/24/outline';
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const BlogList = () => {

const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogPosts')

  return (
    <div className='blog-list'>
        <h2>Blogs List</h2>
     { isPending &&  <div>Loading...</div>}
     { error &&  <div>{error}</div>}
     {blogs && blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
            <Link to={`/blogdetails/${blog.id}`}>
            <h3 className='title'>{blog.title}</h3>           
            <div className="blog-review-box">
            <div className='blog-common'>
                <HandThumbUpIcon  className='icons' />
                <p >{blog.likes} peoples likes</p>
            </div>
            <div className='blog-common'>
                <ChatBubbleBottomCenterTextIcon  className='icons' />
                <p >{blog.comments.length} peoples likes</p>
            </div>
            </div>
            </Link>
          
        </div>
     ))}
    
    </div>
  )
}

export default BlogList