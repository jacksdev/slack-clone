import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

export default function Header() {
    return (
        <HeaderContainer>
            <HeadLeft>
                <HeadAvatar />

            </HeadLeft>
            <HeadCenter>

            </HeadCenter>
            <HeadRight>

            </HeadRight>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
        color: red;
    `

const HeadLeft = styled.div`
    color: red;
`


const HeadCenter = styled.div`
    color: red;
`

const HeadRight = styled.div`
    color: red; 
`

const HeadAvatar = styled(Avatar)`
    color: red;
`