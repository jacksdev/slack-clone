import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

import SidebarOption from './SidebarOption'


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

                <SidebarOption />
            </SidebarHeader>

            <SidebarOption />
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
    flex: 1;
    
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size:13px;
        font-weight:400;
        align-items:center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }

`