import React, { Component } from 'react';
import './Filter.sass';

export default class Filter extends Component {
	constructor(props) {
		super(props);
		this.selectStops = [];
		this.state = {
			filter: [
				{
					name: 'Без пересадок',
					value: 0
				},
				{
					name: '1 пересадка',
					value: 1
				},
				{
					name: '2 пересадки',
					value: 2
				},
				{
					name: '3 пересадки',
					value: 3
				}
			],
			selectedFilter: []
		}
		this.handleFilter = this.handleFilter.bind(this)
	}
	handleFilter(e) {
		let array = this.state.selectedFilter;
		console.log(this.refs);
		if (e.target.checked) {
			array.push(parseInt(e.target.value))
		} else {
			let index = array.indexOf(parseInt(e.target.value))
			array.splice(index, 1)
		}
		this.props.updateFilter(array)
	}
	render() {
		return (
			<section className="filter">
				<div className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
				<div className="filter__inner">
					<div className="filter__item">
						<label>
							<input type="checkbox" onChange={this.props.selectAll} ref={ (elem) => { this.selectAll = elem; }}/>
							Все
						</label>
					</div>
					{this.state.filter.map((checkbox, index) =>
						<div className="filter__item" key={ index }>
							<label>
								<input type="checkbox" value={checkbox.value} onChange={this.handleFilter} />
								{checkbox.name}
							</label>
						</div>
					)}
				</div>
			</section>
		);
	}
}
