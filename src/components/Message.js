import React from 'react'
import styled from 'styled-components';
import Moment from 'react-moment';


function Message({ message, timestamp, user, userImage }) {
    return (
        
        <MessageContainer>
            <img src="https://avatars.githubusercontent.com/u/44128251?s=400&u=730d9ecf6ac372b37bef5786dd8e5e3554d92beb&v=4" alt='' />
            {message}
            <span>
                <p>
                    {user} &nbsp;
                    {new Date(timestamp?.toDate()).toLocaleDateString()} {new Date(timestamp?.toDate()).toLocaleTimeString()}
                </p> 
            </span>
             
        </MessageContainer>
        
    )
}

export default Message;


const MessageContainer = styled.div`
    flex: 0.8;
    margin: 20px;
    font-size: 20px;

    > img {
        width: 60px;
        margin-right: 20px;
    }

    > span > p {
        font-size: 15px;
        color: lightgrey;
    }
`