import React, { Component } from 'react';
import Filter from './components/Filter/Filter.js';
import TicketsList from './components/TicketsList/TicketsList.js';
import Logo from './components/Logo/Logo.js';
import './App.sass';

function filterItems(tickets) {
	return tickets.map((ticket) => ticket.stops)
								.sort()
								.filter((value, index, array) => array.indexOf(value) === index)
								.map((item) => ({ value: item, checked: false }))
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tickets: [],
		 	stopsCount: [],
			filterData: []
		};

		this.handleFilter = this.handleFilter.bind(this)
	}

	componentDidMount() {
	  fetch('tickets.json')
		  .then((response) => response.json())
		  .then((data) => {
		  	this.setState({
					tickets: data.tickets,
					filterData: filterItems(data.tickets)
				})
	  })
	  .catch((error) => {
	  	console.error(error);
	  })
	}

	handleFilter(values) {
		this.setState({ stopsCount: values })
	}

  render() {
    return (
      <div className="app">
				<div className="app__inner">
					<Logo />
					<Filter filterItems={ this.state.filterData }
									updateFilter={ this.handleFilter } />
					<TicketsList tickets={ this.state.tickets } stops={ this.state.stopsCount } />
				</div>
      </div>
    );
  }
}

export default App;
