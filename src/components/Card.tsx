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
		
	return(
		<div className="card">
		<img src={img} onMouseEnter={moveEnter} onMouseLeave={moveLeave}/>
		<span>{name}</span>
		</div>
	)
}

export default Card;
