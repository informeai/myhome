import React from 'react'
import './Banner.css'
import bannerGeral from '../assets/banner-geral.png'

const Banner = () =>{
	return (
		<div id="banner">
		<img id="image" src={bannerGeral}/>
		</div>
	)
}

export default Banner;
