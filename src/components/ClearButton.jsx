import React from 'react'
import styled from 'styled-components'

export const ClearButton = props => (
    <ClearButtonWrapper onClick={props.handleClear}>
        {props.children}
    </ClearButtonWrapper>
)

const ClearButtonWrapper = styled.div`
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
    background: #c5c3cd;
    color: #000000;
    outline: 1px solid #888888;
    flex: 1;
`
export default ClearButton