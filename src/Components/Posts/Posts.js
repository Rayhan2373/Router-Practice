import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(  ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            {
                posts.map(post=><Link to={`/posts/post/${post.id}`}>{post.id}  </Link>)
            }
            <Outlet/>
        </div>
        
    );
};

export default Posts;