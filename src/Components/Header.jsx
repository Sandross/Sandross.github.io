import React from 'react'
import styled from 'styled-components'

const HeaderElem = styled.header`
position: absolute;
width: 952px;
height: 86px;
left: 448px;
top: 40px;
background-color: var( --bg-cards);
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
a {
    margin-right: 25px;
    margin-top: 30px;
    text-decoration: none;
    background-color: var(--bg-techs);
    color: black;
    border-radius: 10%;
    padding: 4px;
}
span {
    font-weight: bold;
    color: var(--color-text);
    margin-left: 25px;
    margin-top:30px;
}
`
export default function Header() {
  return (
    <HeaderElem>
      <nav>
        <span> My Projects:</span>
        <a href="https://github.com/Sandross?tab=repositories" target="_blank" rel="noreferrer">See it all</a>
      </nav>
    </HeaderElem>
  )
}
