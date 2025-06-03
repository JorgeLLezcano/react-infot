
import React from 'react'
import Reproductor from './Reproductor'
import playLogo from '/play.svg'
import './App.css'

function NavBar(){
    return(
  <div className='navBar'>
    <h2>category</h2>
    <ul>
      <li>🎸Rock Clásico</li>
      <li>🔥 Pop Hits</li>
      <li>💃 Reggaetó</li>
      <li>🎶 Indie Vibes"</li>
    </ul>
    <Reproductor /> 
  </div>
  
    )
}
    export default NavBar