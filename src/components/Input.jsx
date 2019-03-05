import React, { Fragment } from 'react'
import styled from 'styled-components'

export const Input = props => (
    <Fragment>
        <InputWrapper>{props.input}</InputWrapper>
    </Fragment>
)
const InputWrapper = styled.div`
    height: 4em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    font-size: 1.4em;
    background: #000;
    color: #fff;
    padding: 0.5em;
    outline: 1px solid #888888;
`
export default Input