import React, { useState } from 'react'
import styled from 'styled-components'

const ButtonS = styled.div`
border: none;
height: 40px;
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
&:active{
background-color: #42468d;
}
`
const Button1S = styled.div`
border: none;
height: 40px;
border-radius: 10px;
background-color: #d898f9;
border: 3px solid #d898f9;
width: 100px;
color: #000000;
font-weight: 600;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
margin-right: 5px;
&:active{
background-color: #523a5e;
}
`
const Button1L = styled.div`
border: none;
height: 50px;
border-radius: 10px;
background-color: rgb(255, 255, 255);
border: 3px solid #d898f9;
width: 200px;
color: #000000;
font-weight: 600;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
gap: 7px;
&:active{
background-color: #c7c7c7;
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
const ModalS = styled.div`
top: 50%;
left: 50%;
width: 450px;
height: 250px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
padding: 10px;
position: absolute;
transform: translate(-50%,-50%);
background-color: white;
border-radius: 12px;
`
const ModalL = styled.div`
top: 50%;
left: 50%;
width: 300px;
height: 200px;
padding: 10px;
position: absolute;
transform: translate(-50%,-50%);
background-color: white;
border-radius: 12px;
`
const Background = styled.div`
width: 100%;
height: 100vh;
inset: 0;
position: fixed;
opacity: 80%;
background-color: #ddd;
`
const ModalBtn = styled.button`
top: 15px;
right: 15px;
width: 40px;
height: 40px;
position: absolute;
border-radius: 100%;
cursor: pointer;
border: 1px solid #ddd;
:hover {
border: 1px solid #000000;
  }
`


function Modal() {
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)

    const showModal = () => {
        setModal(!modal)
    }

    const showModal1 = () => {
        setModal1(!modal1)
    }

  return (
    <div>
        <H>Modal</H>
        <Btcontainer>
            <ButtonS onClick={showModal}>open modal</ButtonS>
                {
                    modal && 
                    <div>
                        <Background />
                        <ModalS>
                        <h4>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</h4>
                        <Btcontainer>
                            <Button1S onClick={showModal}>닫기</Button1S>
                            <ButtonS>확인</ButtonS>
                        </Btcontainer>
                        </ModalS>
                    </div> 
                }
            <Button1L onClick={showModal1}>open modal</Button1L>
                {
                    modal1 &&
                    <div>
                        <Background onClick={showModal1} />
                        <ModalL>
                        <h3>닫기 버튼 1개가 있고, <br/> 외부 영역을 누르면 모달이 닫혀요.</h3>
                        <Btcontainer>
                            <ModalBtn onClick={showModal1}>x</ModalBtn>
                        </Btcontainer>
                        </ModalL>
                    </div> 
                }
        </Btcontainer>
    </div>
  )
}

export default Modal