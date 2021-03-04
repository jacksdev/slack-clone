import React from 'react'
import styled from 'styled-components';

function SignIn() {
    return (
        <SignInContainer>
            <SignInInnerContainer>
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" border="0" />
            </SignInInnerContainer>
        </SignInContainer>
    )
}

export default SignIn


const SignInContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
`

const SignInInnerContainer = styled.div`
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
`