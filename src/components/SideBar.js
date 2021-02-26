import styled from 'styled-components';
import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';


function SideBar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Jacks Coding Channel</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Jack Frolov
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default SideBar;

const SidebarContainer = styled.div`
    flex: 0.3;
    color: white;
    background-color: var(--slack-color);
    margin-top: 60px;
    max-width: 260px;
    border-top: 1px solid #49274b;
`

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 12px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`

const SidebarInfo = styled.div`

`