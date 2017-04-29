import React, { Component } from 'react';
import './FlightInformation.sass';
import moment from 'moment'

export default class FlightInformation extends Component {
	static defaultProps = {
		modifiers: ''
	};

	constructor(props) {
		super(props);
		moment.locale('ru');
		moment.updateLocale('ru', {
		  weekdaysShort : ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			monthsShort : [
        "Янв", "Фев", "Мрт", "Апр", "Май", "Июн",
        "Июл", "Авг", "Сент", "Октб", "Нояб", "Дек"
    	]
		});
	}
	render() {
		let additionalClasses = [];
		if (this.props.modifiers !== '') {
			additionalClasses = this.props.modifiers.split(',').map((modifier) => {
				return [`flightInformation_${modifier}`];
			});
		}
		const classes = `flightInformation ${additionalClasses}`;
		return (
			<div className={classes}>
				<div className="flightInformation__time">{this.props.time}</div>
				<div className="flightInformation__airport">
					{this.props.origin},&nbsp;{this.props.name}
				</div>
				<div className="flightInformation__date">
					{moment(this.props.date).format('D MMM YYYY, ddd')}
				</div>
			</div>
		);
	}
}
