import React, { Component } from 'react';
import './Filter.sass';

function filterIds(filters) {
	return filters.map((item) => {if (item.checked) { return item.value }})
								.filter((item) => item !== undefined)
}

export default class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectAll: false,
			filter: [
				{
					name: 'Без пересадок',
					value: 0,
					checked: false
				},
				{
					name: '1 пересадка',
					value: 1,
					checked: false
				},
				{
					name: '2 пересадки',
					value: 2,
					checked: false
				},
				{
					name: '3 пересадки',
					value: 3,
					checked: false
				}
			]
		}
		this.handleFilter = this.handleFilter.bind(this)
		this.handleSelectAll = this.handleSelectAll.bind(this)
	}
	
	handleFilter(checkbox) {
		checkbox.checked = !checkbox.checked
		this.props.updateFilter(filterIds(this.state.filter))
	}

	handleSelectAll() {
		let filter = this.state.filter.map((item) => {
			item.checked = !this.state.selectAll;
			return item;
		});
		this.setState({ filter: filter, selectAll: !this.state.selectAll })
		this.props.updateFilter(filterIds(this.state.filter))
	}

	render() {
		return (
			<section className="filter">
				<div className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
				<div className="filter__inner">
					<div className="filter__item">
						<label>
							<input type="checkbox" onChange={this.handleSelectAll}
										 checked={this.state.selectAll}/>
							Все
						</label>
					</div>
					{this.state.filter.map((checkbox, index) =>
						<div className="filter__item" key={ index }>
							<label>
								<input type="checkbox" value={checkbox.value}
									 		 onChange={ (e) => this.handleFilter(checkbox) }
											 checked={ checkbox.checked }/>
								{checkbox.name}
							</label>
						</div>
					)}
				</div>
			</section>
		);
	}
}
