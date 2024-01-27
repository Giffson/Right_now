import React,{useEffect, useState} from 'react'
import useFetch from './useFetch';
import { useParams } from 'react-router-dom';
import { ChatBubbleBottomCenterTextIcon, HandThumbUpIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

const BlogDetails = () => {

    const {id} = useParams();

    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogPosts/'+ id)

    const formatTimeStamp = (timestamp) => {
        const date = new Date(timestamp);

        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };
        return date.toLocaleDateString('en-US', options)
    }

    const [isLiked, setIsLiked] = useState(false)

    const handleClicked = () => {
        setIsLiked(!isLiked)
        console.log(isLiked)
 
    }

  return (
        <>
            { isPending &&  <div>Loading...</div>}
     { error &&  <div>{error}</div>}
     {blog &&   <div className='blog-detailed'>
        <div className="blog-detailed-like-bar">
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
            <div className="blog-share-like-bar">
            <div className='blog-common'>
                <HeartIcon  className={`icons ${isLiked ? 'heart-fill' : ''}`} onClick={handleClicked}  />
                <ShareIcon className='icons'/>
            </div>

            </div>
        </div>
        
        <h2 className='blog-detailed-title'> {blog.title}</h2>
        <p className='blog-detailed-content'>{blog.content}</p>
          <div  className='comments'>
            <ul>{blog.comments.map((comment) => (
                  <li key={comment.id}>
                  <strong>{comment.user}:</strong> {comment.text}
                  <caption></caption>     <p>{formatTimeStamp(comment.timestamp)}</p>
                </li>
            ))}</ul>
            </div>
    </div>}
     </>
  
  )
}

export default BlogDetails