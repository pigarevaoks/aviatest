import React, { Component } from 'react';
import './Button.sass';
import numberFormat from '../../helpers/numberFormat.js'

export default class Button extends Component {
	render() {
		return (
			<button type="button" className="button">
				<span className="button__title">Купить</span>
				<span className="button__price">за&nbsp;{numberFormat(this.props.price)}&nbsp;&#8381;</span>
			</button>
		);
	}
}
