import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase'

function ChatInput({ channelName, channelId, chatRef}) {

    const [input, setInput] = useState("");

    const sendMessage = e => {

        e.preventDefault();
        
        if(!channelId){
            return false;
        }

        db.collection('rooms').doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Jack Frolov',
            userImage: "https://avatars.githubusercontent.com/u/44128251?s=400&u=730d9ecf6ac372b37bef5786dd8e5e3554d92beb&v=4"

        });

        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        })

        setInput('')
    };


    return (
        <ChatInputContainer>
            <form action="">
                <input 
                    value={input} 
                    onChange = {(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`} 
                />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
            
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content:center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`