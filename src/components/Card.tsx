import React,{MouseEvent} from 'react'
import './Card.css'

interface CardProps{
	name: string
	img?: string
}

const Card = ({name, img}: CardProps): JSX.Element =>{
		const  moveEnter = (e:MouseEvent<HTMLElement>)=>{ 
			let target = e.target as HTMLElement
			let span = target.nextSibling as HTMLElement
			span!.style.transform = "translateY(25px)"
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
