import React, { Fragment } from 'react'
import styled from 'styled-components'

const Button = props => {
    const isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    }
    return(
        <Fragment >
            {isOperator(props.children) ? 
            <ButtonWrapper onClick={() => props.handleClick(props.children)}>{props.children}</ButtonWrapper> :
            <ButtonWrapper operator onClick={() => props.handleClick(props.children)}>{props.children}</ButtonWrapper>
            }
        </Fragment>
    )
}
    


const ButtonWrapper = styled.div`
    flex: 1;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
    background: ${props => (props.operator? '#fe9241' : '#e0e1e6')};
    color: ${props => (props.operator?'#fff':'#888')};
    outline: 1px solid #888;
`


export default Button