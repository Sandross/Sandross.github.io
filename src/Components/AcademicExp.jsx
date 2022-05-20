import React from 'react'
import styled from 'styled-components'

const AcademicExperienceTable = styled.section `
h2{
    font-size: 1rem;
    margin-left: 20px;
    margin-top: 20px;
}
width: 585px;
height: 250px;
left: 820px;
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
    margin-right: 350px;
}
p {
    font-size: 0.7rem;
    margin-top: 5px;
    margin-right: 242px;
}
h2 {
    font-size: 1.3rem;
}
h3 {
    font-size: 1rem;
    font-weight: bolder;
    margin-right: 460px;
}
`

export default function AcademicExp() {
  return (
    <AcademicExperienceTable>
        <h2>Academic Experiences:</h2>
      <ul>
      <li>
                <h4>Controladoria e Finanças</h4>
                <p>
                    <strong>UFMG</strong>
                    <br />
                    <em>
                        <strong>
                            <p>EM CURSO</p>
                        </strong>
                    </em>
                    </p>
                </li>
            <li>
                <h3>NFT Capital</h3>
                <p>
                    <strong>Aprendizagem Industrial em Processos Logísticos</strong>
                    <br />
                    <em>
                        <strong>
                            <p>2016-2016</p>
                        </strong>
                    </em>
                    </p>
                </li>
      </ul>
    </AcademicExperienceTable>
  )
}
