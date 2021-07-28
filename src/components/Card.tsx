import React from 'react'
import './Card.css'

interface CardProps{
	name: string
	img?: string
}

const Card = ({name, img}: CardProps): JSX.Element =>{
		
	return(
		<div className="card">
		<img src={img}/>
		<span>{name}</span>
		</div>
	)
}

export default Card;
