import React from 'react'

// Secciones
import Home from '../../Sections/Home/Home'

// Componentes
import NavBar from '../../Components/NavBar/NavBar'


/** Page único y principal del portfolio */
export default function PagePortfolio() {
  return (
    <>
        <header>
          <NavBar/>
        </header>
        <main>
          <Home/>
        </main>
        <footer></footer>
    </>
  )
}
