import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [friend, setFriend] = useState({})
    const {id} = useParams()
    useEffect( ()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( res=> res.json())
        .then( data=> setFriend(data))
    },[id])

    return (
        <div>
            <h3>Details of friend : {friend.id}</h3>
            <h1>{friend.name}</h1>
            <h3>{friend.username}</h3>
            <p>{friend.address?.city}</p>
        </div>
    );
};

export default Details;