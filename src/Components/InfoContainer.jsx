import React from 'react'
import styled from 'styled-components'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import mail from '../images/mail.png'
import map from '../images/map-pin.png'


const InfoSection = styled.section`
position: absolute;
width: 348px;
height: 250px;
left: 40px;
top: 362px;
background-color: var( --bg-cards);
border-radius: 8%;
ul {
    list-style: none;
    display:flex;
    flex-direction: column;
    margin-left: 8px;
}
li {
    display: flex;
    align-items: center;
    margin-top: 25px;
}

a {
    text-decoration: none;
}

img {
    margin-right: 10px;
}


`
export default function InfoContainer() {
  return (
    <InfoSection>
    <ul>
        <li className="s"><img src={map} alt="map"/>Belo Horizonte, MG, Brasil</li>
        <li>
            <a href="https://github.com/Sandross" target="_blank" rel="noreferrer">
            <img src={github} alt="github"/>Sandross
            </a>
            </li>
        <li>
            <a href="https://www.linkedin.com/in/sandro-bistene-a27125201/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin"/>Sandro Bistene
            </a>
            </li>
        <li><img src={mail} alt="email"/>sandrosalasfilho3@gmail.com</li>
    </ul>
    </InfoSection>
  )
}
