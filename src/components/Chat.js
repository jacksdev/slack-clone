import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import StarBorderedOutlineIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatInput from './ChatInput';
import Message from './Message';
import { useSelector } from 'react-redux'
import { selectRoomId } from '../features/appSlice';

import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase';

function Chat() {

    const chatRef = useRef(null);

    const roomId = useSelector(selectRoomId);

    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    )

    const [roomMessages, loading] = useCollection(
        roomId && 
        db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
    )

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }, [roomId, loading])

    return (
        <ChatContainer>
            {roomId && roomMessages && (
                <>
                <Header>
                    <HeaderLeft>
                        <h4>#{roomDetails?.data().name}</h4>
                        <StarBorderedOutlineIcon />
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </HeaderRight>
                </Header>

                <ChatMessages>
                                
                    {
                    
                    roomMessages?.docs.map(
                            (doc) => {

                                const { message, timestamp, user, userImage} = doc.data();

                                return <Message 
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                />
                            }
                        )
                    }
                    
                </ChatMessages>

                <ChatBottom ref={chatRef}/>

                <ChatInput
                    chatRef={chatRef}
                    channelName = {roomDetails?.data().name}
                    channelId = {roomId}
                />
            </>
            )}
            
        </ChatContainer>
    )
}

export default Chat;


const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgrey;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatMessages = styled.div`

`

const ChatBottom = styled.div`
    padding-bottom: 200px;
`