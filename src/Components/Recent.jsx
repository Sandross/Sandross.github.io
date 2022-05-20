import React from 'react'
import styled from 'styled-components'

const RecentElem = styled.section `
position: absolute;
width: 952px;
height: 86px;
left: 448px;
top: 653px;
background-color: var( --bg-cards);
h2{ 
    font-weight: bold;
    color: var(--color-text);
    margin-left: 25px;
    margin-top:30px;
    font-size: 1.1rem;
}

`
export default function Recent() {
  return (
    <RecentElem>
      <h2>Recent Posts:</h2>
    </RecentElem>
  )
}
