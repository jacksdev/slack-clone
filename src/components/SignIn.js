import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

function SignIn() {

    const signInSubmit = e => {
        e.preventDefault()
    }
    return (
        <SignInContainer>
            <SignInInnerContainer>
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" border="0" />
                <h1>Sign in to JACKS DEV chan</h1>
                <p>jacksdev.slack.com</p>
                <Button type='submit' onClick={signInSubmit}>
                    Sign in with google
                </Button>
            </SignInInnerContainer>
        </SignInContainer>
    )
}

export default SignIn


const SignInContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`

const SignInInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    > Button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: white;
        padding: 15px;
        font-size: 16px;
        : hover {
            color: black;
        }
    }
`