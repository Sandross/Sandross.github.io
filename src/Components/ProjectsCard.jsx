import React from 'react'
import styled from 'styled-components'
import folder from '../images/folder.png'
import group from '../images/Group 11.png'
import elipse from '../images/Ellipse 2.png'

const SectionCard = styled.section `
position: absolute;
width: 461px;
height: 186px;
left: 448px;
top: 157px;
background-color: var( --bg-cards);
h4{
  margin-top: 15px;
  margin-left:30px;
  margin-bottom: 30px;
}
p{
  margin-left: 30px;
}
img{
  margin-right: 10px;
}
h5{
  margin-left: 30px;
  margin-top: 20px;
}
h3{
  margin-left: 320px;
  margin-top: -23px;
  font-size: 0.8rem;
}
`

export default function ProjectsCard() {
  return (
    <SectionCard>
      <h4>
        <img src={folder} alt="Folder"/>
        Recipes App
        </h4>
      <p>Application with food and drink recipes, as well as a favorites area and finished recipes</p>
      <h5>
      <img src={group} alt="Like"/>
      </h5>
      <h3>
        <img src={elipse} alt="Elipse"/>
        Javascript
      </h3>
    </SectionCard>
  )
}
