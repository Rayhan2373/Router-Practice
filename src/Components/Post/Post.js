import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const {id} = useParams()
    const [post, setPost] = useState({})
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    useEffect( ()=>{
        fetch(url)
        .then(res => res.json())
        .then( data=> setPost(data))
    } ,[url])
    return (
        <div>
            <h3>{post.title}</h3>
            <hr/>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;