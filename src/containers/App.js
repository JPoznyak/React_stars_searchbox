import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { stars } from '../stars';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			stars: stars,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	};

	render() {
	    const { stars, searchfield } = this.state;
		const filteredStars = stars.filter(star =>{
			return star.name.toLowerCase().includes(searchfield.toLowerCase());
		});
            return !stars.length ?
                <h1>Loading</h1> :
            (
			<div className='tc'>
				<h1 className='f1'>Super Stars!</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<CardList stars={filteredStars} />
				</Scroll>
			</div>
			);
	}
}

export default App;
