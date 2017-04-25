import React, { Component } from 'react';
import './TransferCount.sass';
import declension from '../../helpers/declension.js'

export default class TransferCount extends Component {
	render() {
		return (
			<div className="transferCount">
				{this.props.stops}&nbsp;
				{declension(this.props.stops, ['пересадка', 'пересадки', 'пересадок'])}
			</div>
		);
	}
}
