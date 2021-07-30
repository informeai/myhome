import React,{MouseEvent} from 'react'
import './Card.css'
import bannerGeral from '../assets/banner-geral.png'
import bannerMusic from '../assets/banner-music.png'
import bannerMovie from '../assets/banner-movie.png'
import bannerPhoto from '../assets/banner-photo.png'
import bannerSetting from '../assets/banner-setting.png'


interface CardProps{
	name: string
	img?: string
}

const Card = ({name, img}: CardProps): JSX.Element =>{
		
		const  moveEnter = (e:MouseEvent<HTMLElement>)=>{ 
		let imageBanner = document.querySelector("#banner img#image") as HTMLImageElement;
			let target = e.target as HTMLElement
			let span = target.nextSibling as HTMLElement
			span!.style.transform = "translateY(25px)"
			if(name === "music"){
				imageBanner.src = bannerMusic		
			}else if(name === "movie"){
				imageBanner.src = bannerMovie
			}else if(name === "photo"){
				imageBanner.src = bannerPhoto
			}else if(name === "setting"){
				imageBanner.src = bannerSetting
			}else{
				imageBanner.src = bannerGeral
			}
		}

		const  moveLeave = (e:MouseEvent<HTMLElement>)=>{ 
			let target = e.target as HTMLElement
			let span = target.nextSibling as HTMLElement
			span!.style.transform = "translateY(0px)"
		}

		const movePage = (e:MouseEvent<HTMLElement>)=>{
			window.location.href = `/${name}`
		}
		
	return(
		<div className="card" id={name}>
		<img src={img} onClick={movePage} onMouseEnter={moveEnter} onMouseLeave={moveLeave}/>
		<span>{name[0].toUpperCase() + name.slice(1).toLowerCase()}</span>
		</div>
	)
}

export default Card;
