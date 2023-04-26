import React from 'react'
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md'
import { VscBellDot } from 'react-icons/vsc'

const ButtonL = styled.div`
border: none;
height: 50px;
border-radius: 10px;
background-color: rgb(255, 255, 255);
border: 3px solid ${(props) => {
    return props.type === 'Primary' ? '#6f76ef' : '#d898f9';
}};
width: 200px;
color: #000000;
font-weight: 600;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
&:active{
background-color: #c7c7c7;
}
`
const ButtonM = styled.div`
border: none;
height: 45px;
border-radius: 10px;
background-color: ${(props) => {
    return props.type === 'Primary' ? '#6f76ef' : '#d898f9';
}};
border: 3px solid ${(props) => {
    return props.type === 'Primary' ? '#6f76ef' : '#d898f9';
}};
width: 130px;
color: #000000;
font-weight: 600;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
margin-left: 10px;
&:active{
background-color: ${(props) => {
    return props.type === 'Primary' ? '#42468d' : '#523a5e';
}};
}
`
const ButtonS = styled.div`
border: none;
height: 40px;
border-radius: 10px;
background-color: ${(props) => {
    return props.type === 'Primary' ? '#6f76ef' : '#d898f9';
}};
border: 3px solid ${(props) => {
    return props.type === 'Primary' ? '#6f76ef' : '#d898f9';
}};
width: 100px;
color: #000000;
font-weight: 600;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
margin-left: 10px;
&:active{
background-color: ${(props) => {
    return props.type === 'Primary' ? '#42468d' : '#523a5e';
}};
}
`
const Button1L = styled.div`
border: none;
height: 50px;
border-radius: 10px;
background-color: rgb(255, 255, 255);
border: 3px solid ${(props) => {
    return props.type === 'Primary' ? '#6f76ef' : '#d898f9';
}};
width: 200px;
color: #000000;
font-weight: 600;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
&:active{
background-color: #c7c7c7;
}
`
const Button1M = styled.div`
border: none;
height: 45px;
border-radius: 10px;
background-color: ${(props) => {
    return props.type === 'Primary' ? '#6f76ef' : '#d898f9';
}};
border: 3px solid ${(props) => {
    return props.type === 'Primary' ? '#6f76ef' : '#d898f9';
}};
width: 130px;
color: #000000;
font-weight: 600;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
margin-left: 10px;
&:active{
background-color: ${(props) => {
    return props.type === 'Primary' ? '#42468d' : '#523a5e';
}};
}
`

const Button1S = styled.div`
border: none;
height: 40px;
border-radius: 10px;
background-color: ${(props) => {
    return props.type === 'Primary' ? '#6f76ef' : '#d898f9';
}};
border: 3px solid ${(props) => {
    return props.type === 'Primary' ? '#6f76ef' : '#d898f9';
}};
width: 100px;
color: #000000;
font-weight: 600;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
margin-left: 10px;
&:active{
background-color: ${(props) => {
    return props.type === 'Primary' ? '#42468d' : '#523a5e';
}};
}
`

const Btcontainer = styled.div`
border-radius: 12px;
padding: 10px 10px 10px 10px;
display: flex;
`

const H = styled.h1`
text-indent:10px;
`

function Button() {
  return (
    <div>
        <H>Button</H>
        <div>
            <Btcontainer>
                <ButtonL type='Primary'
                onClick={() => alert('버튼을 만들어보세요')}>
                    Large Primary Button
                    <MdArrowForwardIos />
                </ButtonL>
                <ButtonM type='Primary'>Medium</ButtonM>
                <ButtonS type='Primary'>Small</ButtonS>
            </Btcontainer>
            <Btcontainer>
                <Button1L type='Negative'
                onClick={() => prompt('어렵나요?')}>
                    Large Negative Button
                    <VscBellDot />
                </Button1L>
                <Button1M type='Negative'>Medium</Button1M>
                <Button1S type='Negative'>Small</Button1S>
            </Btcontainer>
        </div>
    </div>
  )
}

export default Button