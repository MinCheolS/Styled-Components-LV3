import React, { useState } from 'react'
import styled from 'styled-components'

const Btcontainer = styled.div`
border-radius: 12px;
padding: 10px 10px 10px 10px;
display: flex;
`
const Inputs = styled.input` 
height: 40px;
width: 180px;
border: 1px solid black;
border-radius: 10px;
padding: 0 12px;
margin-right: 10px;
`
const Inputlabel = styled.label`
font-size: 16px;
display: flex;
align-items: center;
`
const Inputlabel1 = styled.label`
font-size: 16px;
font-weight: 700;
text-indent: 15px;
display: flex;
align-items: center;
`
const ButtonS = styled.div`
border: none;
height: 35px;
border-radius: 10px;
background-color: #6f76ef;
border: 3px solid #6f76ef;
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
background-color: #42468d;
}
`
const H = styled.h1`
text-indent:10px;
`   

function Input() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const nameValue = (event) => {
        setName(event.target.value)
    }

    const priceValue = (event) => {
        const newPrice = event.target.value.replace(/\D/g, '')
        if (newPrice === '') {
            setPrice('')
        }
        else {
            setPrice(Number(newPrice).toLocaleString())
        }
    }
    
    const onClickHandler = () => {
        if(name.trim() === '' && price.trim() === '') {
            return alert('이름과 가격 모두 입력해주세요')
        }
        else {
            alert(`{name : ${name}, price : ${(price).replaceAll(',', '')}}`)
        }
    }

    
  return (
    <div>
        <H>Input</H>
        <Btcontainer>
            <Inputlabel>이름</Inputlabel>
            <Inputs
            type='text'
            name='name' 
            value={name}
            onChange={nameValue}
            />
            <Inputlabel1>가격</Inputlabel1>
            <Inputs
            type='text'
            name='price' 
            value={price}
            onChange={priceValue}
            placeholder='0'
            />
            <ButtonS onClick={onClickHandler}>저장</ButtonS>
        </Btcontainer>
    </div>
  )
}

export default Input