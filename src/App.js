import React, { Component } from 'react';
import Filter from './components/Filter/Filter.js';
import TicketsList from './components/TicketsList/TicketsList.js';
import Logo from './components/Logo/Logo.js';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tickets: [],
		 	stopsCount: []
		};
	}

	componentDidMount() {
	  fetch('tickets.json')
		  .then((response) => response.json())
		  .then((data) => {
		  	this.setState({ tickets: data.tickets })
	  })
	  .catch((error) => {
	  	console.error(error);
	  })
	}

	handleFilter(values) {
		this.setState({ stopsCount: values })
	}

	handleAll() {
		this.setState({ stopsCount: [] })
	}

  render() {
    return (
      <div className="app">
				<div className="app__inner">
					<Logo />
					<Filter tickets={ this.state.tickets } updateFilter={this.handleFilter.bind(this)}
									selectAll={this.handleAll.bind(this)}/>
					<TicketsList tickets={ this.state.tickets } stops={this.state.stopsCount}/>
				</div>
      </div>
    );
  }
}

export default App;
