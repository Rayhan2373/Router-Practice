import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, username} = friend
    const navigate = useNavigate()
    const createLink =()=>{
        const url = `friend/${id}`
        navigate(url)
    }
    return (
        <div>
            <h3>{name}</h3>
            <Link to={'/friends/friend/'+id}>Details</Link>
            <button onClick={createLink}>{username}-{id}</button>
        </div>
    );
};

export default Friend;