import React from 'react'
import styled from 'styled-components'
import image  from '../images/sandro.jpg'
import linkedin from '../images/linkedin.png'

const RecentElemPost = styled.section `
position: absolute;
width: 952px;
height: 240px;
left: 448px;
top: 770px;
border-radius:2%;
background-color: var( --bg-cards);
h2{ 
    font-weight: bold;
    color: var(--color-text);
    margin-left: 25px;
    margin-top:30px;
    font-size: 1.1rem;
}
h3 img{
    margin-top: 50px;
    border-radius: 50%;
    width: 90px;
    margin-bottom: 20px;
    margin-left: 15px;
}

p{
    margin-left: 120px;
    margin-top: -60px
}
span {
    margin-left: 120px;
    margin-top: -30px;
    font-size: 0.8rem;
    margin-top: 25px;
}

a img {
    margin-left: 10px;
    margin-top: 40px;
    border-radius: 50%;
    width: 30px;
}

`
export default function RecentPost() {
  return (
    <RecentElemPost>
        <h3><img src={image} alt="Sandro Bistene" /></h3>
      <p>Um grande prazer desenvolver este projeto com vocês!
Muito feliz com o resultado após tantas horas de trabalho.</p>
<span>#React #ContextAPI</span>
<a href="https://www.linkedin.com/in/sandro-bistene-a27125201/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
    </RecentElemPost>
  )
}
