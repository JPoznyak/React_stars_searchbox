import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba br2 width b--green bg-lightest-blue'
				type='search'
				placeholder='search a Super Star' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;