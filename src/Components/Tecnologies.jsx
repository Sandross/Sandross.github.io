import React from 'react'
import styled from 'styled-components'

const TecnologiesInfo = styled.section`
position: absolute;
width: 348px;
/* height: 208px; */
height: 0px auto;
left: 40px;
top: 640px;
background-color: var( --bg-cards);
border-radius: 8%;
h2{
    margin: 19px;
    font-size: 1.3rem;
}
ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    
}
li {
    width: 107px;
    height: 0px auto;
    background-color: var(--bg-techs);
    list-style: none;
    margin: 8px;
    border-radius: 10%;
    text-align: center;
    padding: 5px;
    font-size: 1rem;
    font-weight: bold;
    color: black;

}

`

export default function Tecnologies() {
  return (
    <TecnologiesInfo>
      <h2>Tecnologies:</h2>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>Typescript</li>
        <li>Styled Components</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Bootstrap</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Tailwind</li>
    </ul>
    </TecnologiesInfo>
  )
}
