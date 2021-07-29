import React from 'react'
import './Row.css'
import Card from './Card'
import imgMusic from '../assets/music.jpg'
import imgMovie from '../assets/movie.jpg'
import imgPhotos from '../assets/photos.jpg'
import imgConfig from '../assets/config.jpg'
const Row = ()=>{
	return(
		<ul className="row">
		<Card name="movie" img={imgMovie}/>
		<Card name="music" img={imgMusic}/>
		<Card name="photo" img={imgPhotos}/>
		<Card name="setting" img={imgConfig}/>
		</ul>
	)
}


export default Row
