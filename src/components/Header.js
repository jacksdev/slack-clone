import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

export default function Header() {
    return (
        <HeaderContainer>
            <HeadLeft>
                <HeadAvatar
                    // TODO write onCLick
                />

                <AccessTimeIcon />

            </HeadLeft>
            <HeadCenter>

            </HeadCenter>
            <HeadRight>

            </HeadRight>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
        display: flex;
        position: fixed;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        background-color: var(--slack-color);
        color: white;
        
        border: 1px solid black;
    `           

const HeadLeft = styled.div` 
        flex: 0.3;
        display: flex;
        align-items: center;
        margin-left: 20px;

        > .MuiSvgIcon-root {
            margin-left: auto;
            margin-right: 30px
        }


        border: 1px solid black;
        
    `


const HeadCenter = styled.div` 
    `

const HeadRight = styled.div`
    `

const HeadAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.3;
    }
`