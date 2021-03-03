import React from 'react'
import styled from 'styled-components';
import Moment from 'react-moment';


function Message({ message, timestamp, user, userImage }) {
    return (
        
        <MessageContainer>
            <img border='0' source={userImage} alt='' />
            {message} - 
            {user} - 
            {<Moment unix>{timestamp?.seconds}</Moment>}
        </MessageContainer>
        
    )
}

export default Message;


const MessageContainer = styled.div`
    display: flex;
    flex: 0.8;
`