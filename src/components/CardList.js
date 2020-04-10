import React from 'react';
import Card from './Card';

const CardList = ({ stars }) => {
	return (
		<div> 
			{
				stars.map((user, i) => {
					return (
						<Card 
							key={i}
							id={stars[i].id} 
							name={stars[i].name} 
							image={stars[i].image} 
							/>	
						);
					})
			}
		</div>
	);
}

export default CardList;