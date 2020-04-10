import React from 'react'; 
// import '../index.css';

const Card = ({name, image}) => {
		return (
			<div className='tc bg-light-green dib br3 pa3 ma2 w5 h6 grow bw2 shadow-5'>
				<div className='ramka'>
					<img className='image' alt='stars' src={image}/>
				</div>
				<div>
					<h2>{name}</h2>
				</div>
			</div>
		);
};

export default Card;