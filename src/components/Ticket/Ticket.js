import React, { Component } from 'react';
import FlightInformation from '../../components/FlightInformation/FlightInformation.js';
import TransferCount from '../../components/TransferCount/TransferCount.js';
import Button from '../../components/Button/Button.js';
import './Ticket.sass';

export default class Ticket extends Component  {
	render() {
		return (
			<div className="ticket">
				<div className="ticket__inner">
					<div className="ticket__buy">
						<img src={`../../images/${this.props.carrier}.png`} alt={this.props.carrier} className="ticket__company"/>
						<Button price={this.props.price}/>
					</div>
					<div className="ticket__info">
						<FlightInformation origin={this.props.origin}
															 name={this.props.origin_name}
														 	 date={this.props.departure_date}
															 time={this.props.departure_time}/>
						<TransferCount stops={this.props.stops}/>
						<FlightInformation origin={this.props.destination}
															 name={this.props.destination_name}
															 date={this.props.arrival_date}
															 time={this.props.arrival_time}
															 modifiers="right"/>
					</div>
				</div>
			</div>
		);
	}
}
