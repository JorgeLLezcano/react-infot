// import { useState } from 'react'

import React from 'react'
import playLogo from '/play.svg'
import './App.css'

function Reproductor(){
    return(
    <div className='reproductor'>
    <span></span>
    <div  className='btn-play'>
    <img src={playLogo}/>
    </div>
    </div>
    )
    }

    export default Reproductor