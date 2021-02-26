import React from 'react'
import styled from 'styled-components';




const addChannel = () => {};
const selectChannel = () => {};



function SidebarOption({ Icon, title, addChannelOption }) {
    return (
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >

            { Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            { Icon ? (
                <h3>{title}</h3>
            ): (
                <SideOptionChannel>
                    <span>#</span> {title}
                </SideOptionChannel>
            ) }


        </SidebarOptionContainer>
    )
}

export default SidebarOption




const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-right: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`

const SideOptionChannel = styled.div`

`