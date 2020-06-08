import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardList/CardList.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchFeild: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>  response.json() )
		.then(users =>  this.setState( { monsters: users }))
	}

	render() {
		const { monsters, searchFeild } = this.state;
		const filteredMonsters = monsters.filter(monster => 
				monster.name.toLowerCase().includes(searchFeild.toLowerCase())
			)
		return (
			<div className="App">
				<h1 className='heading'>Monsters Rolodex</h1>
				<SearchBox 
					handleChange={e => this.setState({ searchFeild: e.target.value })}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		)
	}
}


export default App;
