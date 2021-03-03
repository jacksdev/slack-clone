import React from 'react'
import styled from 'styled-components';
import Moment from 'react-moment';


function Message({ message, timestamp, user, userImage }) {
    return (
        
        <MessageContainer>
            <img source={userImage} alt='' />
            {message} - 
            {user} - 
                {new Date(timestamp?.toDate()).toLocaleTimeString()}
             
        </MessageContainer>
        
    )
}

export default Message;


const MessageContainer = styled.div`
    flex: 0.8;
`