import React from 'react'
import styled from 'styled-components'

const ExperienceTable = styled.section `
h2{
    font-size: 1rem;
    margin-left: 20px;
    margin-top: 20px;
}
width: 348px;
height: 250px;
left: 448px;
border-radius: 8%;
top: 362px;
position: absolute;
background-color: var( --bg-cards);
li{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    font-size: 0.7rem;
}
h4 { 
    font-size: 1rem;
    font-weight: bolder;
    margin-right: 180px
}
p {
    font-size: 0.7rem;
    margin-top: 5px;
    margin-right: 120px;
}
h2 {
    font-size: 1.3rem;
}
h3 {
    font-size: 1rem;
    font-weight: bolder;
    margin-right: 213px
}
`

export default function Experiences() {
  return (
    <ExperienceTable>
        <h2>Profissional Experiences:</h2>
      <ul>
      <li>
                <h4>Nossa Produtora</h4>
                <p>
                    <strong>Event Manager</strong>
                    <br />
                    <em>
                        <strong>
                            <p>2020-2021</p>
                        </strong>
                    </em>
                    </p>
                </li>
            <li>
                <h3>NFT Capital</h3>
                <p>
                    <strong>Financial Analyst</strong>
                    <br />
                    <em>
                        <strong>
                            <p>2021-2022</p>
                        </strong>
                    </em>
                    </p>
                </li>
      </ul>
    </ExperienceTable>
  )
}
