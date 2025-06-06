import React from 'react'
import Song from './Song'
import Reproductor from './Reproductor'
import playLogo from '/play.svg'
import './App.css'

function Playlist({ name, songs, style})  {

    return(
        <div className="playlist" style={style}>
          <h2>{name}</h2>
          <ul>
              {songs.map((song, index) => (
                  <Song key={index} name={song} />
              ))}
          </ul>
          <Reproductor/> 
        </div>

    )

}

export default Playlist
