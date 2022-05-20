import React from 'react'
import PhotoContainer from './Components/PhotoContainer'
import InfoContainer from './Components/InfoContainer'
import Tecnologies from './Components/Tecnologies'
import Experiences from './Components/Experiences'
import Projects from './Components/ProjectsCard'
import Projects1 from './Components/ProjectsCard1'
import AcademicExp from './Components/AcademicExp'
import Recent from './Components/Recent'
import RecentPost from './Components/RecentPost'
import Header from './Components/Header'
import { GlobalStyle } from './styles/global'

export default function App() {
  return (
    <>
     <PhotoContainer/>
     <Header/>
     <Projects/>
     <Projects1/>
     <Experiences/>
     <AcademicExp/>
     <Recent/>
     <RecentPost/>
     <InfoContainer/>
     <Tecnologies/>
    <GlobalStyle/>

    </>
  )
}

