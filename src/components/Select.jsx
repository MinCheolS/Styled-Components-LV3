import React, { useState } from 'react'
import styled from 'styled-components'
import { FaArrowAltCircleDown } from 'react-icons/fa'

const Wrap = styled.div`
height: 200px;
border: 3px solid lightgrey;
margin: 20px 5px 0px 5px;
overflow: hidden;
`
const SelectButton = styled.button`
width: 245px;
height: 40px;
padding: 0 20px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
border: 1px solid lightgrey;
border-radius: 10px;
cursor: pointer;
`
const Lists = styled.ul`
border: 1px solid #eee;
border-radius: 12px;
background-color: #fff;
width: 210px;
position: absolute;
top: 670px;
left: 15px;
`
const ShowList = styled.li`
height: 40px;
display: flex;
padding-left: 12px;
align-items: center;
font-size: 12px;
&:hover {
background-color: #eae6e6;
}
&:first-child {
border-top-left-radius: 10px;
border-top-right-radius: 10px;
}
&:last-child {
border-top-left-radius: 10px;
border-top-right-radius: 10px;
}
`
const Btcontainer = styled.div`
border-radius: 12px;
padding: 10px 10px 10px 10px;
display: flex;
float: left;
`

function Select() {
    const selectList = [
        {id : 1 , name : '리엑트'},
        {id : 2 , name : '자바'},
        {id : 3 , name : '스프링'},
        {id : 4 , name : '리액트네이티브'}
    ]

    const [list, setList] = useState(selectList[0].name)
    const [show, setShow] = useState(false)
    
    const showMenu = (event) => {
        setList(event.target.innerText)
        setShow(false)
    }
    const menuClick = () => {
        show ? setShow(false) : setShow(true)
    }

  return (
    <Wrap>
        <h1>Select</h1> 
        <Btcontainer>
        <SelectButton onClick={menuClick}>
            <div>{list}</div>
            <FaArrowAltCircleDown />
        </SelectButton>
        {
            show ? <Lists>
                {
                    selectList.map((item) => {
                        return (
                            <ShowList
                            key={item.id}
                            onClick={showMenu}
                            >
                                {item.name}
                            </ShowList>
                        )
                    })
                }
            </Lists>
             : ""
        }
        </Btcontainer>
    </Wrap>
  )
}

export default Select