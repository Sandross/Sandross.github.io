import React from 'react'
import styled from 'styled-components'
import image  from '../images/sandro.jpg'

 const Title = styled.section`
  position: absolute;
  width: 348px;
  height: 292px;
  left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8%;
  background-color: var( --bg-cards);
  top: 40px;
  img {
    border-radius: 50%;
    width: 100px;
    margin-bottom: 20px;
    border: 3px solid green;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight:700px;
  }

  p {
    font-size: 1rem;
    font-weight: lighter;
  }
 `

export default function PhotoContainer() {
  return (
  <Title>
    <img src={image} alt="Sandro Bistene" />
    <h2>Sandro Bistene</h2>
    <p> Full Stack Development Student</p>
  </Title>
)
}
