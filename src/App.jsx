import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import playLogo from '/play.svg'
import Playlist from './Playlist'
import NavBar from './NavBar'
// import Song from './Song'
import Reproductor from './Reproductor'
import './App.css'

function App() {
 const playlists = [
                { name: "🎸 Rock Clásico",image:'https://unavatar.io/x/ironman', songs: ["Bohemian Rhapsody", "Hotel California", "Sweet Child O' Mine", "Smoke on the Water", "Stairway to Heaven", "Back in Black", "Livin' on a Prayer"] },
                { name: "🔥 Pop Hits",image:"https://unavatar.io/x/billieeilish", songs: ["Blinding Lights", "Levitating", "As It Was", "Bad Guy", "Shake It Off", "Roar", "Uptown Funk"] },
                { name: "💃 Reggaetón",image:"https://unavatar.io/x/elk", songs: ["Safaera", "Dákiti", "Felices Los 4", "Tusa", "Vete", "Bichota", "Yo Perreo Sola"] },
                { name: "🎶 Indie Vibes",image:"https://unavatar.io/x/mariobros", songs: ["Sweater Weather", "Electric Feel", "Home", "Breezeblocks", "Take a Walk", "Mountain Sound", "Little Talks"] }
            ];

  return (
    <>
    
     <div className="app">
     <NavBar/>
                    <h1>🎧 Mini Spotify Clone</h1>
                    {playlists.map((playlist, index) => (
                        <Playlist
                         key={index}
                        name={playlist.name} 
                        songs={playlist.songs}
                        style={{ backgroundImage: `url(${playlist.image})`}}
                        />
                    ))}
                 
                </div>
                
    </>
  )
}
export default App
// function Playlist({ name, songs, style}) {
//   return (
//       <div className="playlist" style={style}>
//           <h2>{name}</h2>
//           <ul>
//               {songs.map((song, index) => (
//                   <Song key={index} name={song} />
//               ))}
//           </ul>
//           <Reproductor/> 
//         </div>
//   );
// }

// function Song({ name }) {
//   return <li className="song">{name}</li>;
// }

// function Reproductor(){
// return(
// <div className='reproductor'>
// <span></span>
// <div  className='btn-play'>
// <img src={playLogo}/>
// </div>
// </div>
// )
// }
// function NavBar(){
//   return(
// <div className='navBar'>
//   <h2>category</h2>
//   <ul>
//     <li>🎸Rock Clásico</li>
//     <li>🔥 Pop Hits</li>
//     <li>💃 Reggaetó</li>
//     <li>🎶 Indie Vibes"</li>
//   </ul>
//   <Reproductor /> 
// </div>

//   )
// }




