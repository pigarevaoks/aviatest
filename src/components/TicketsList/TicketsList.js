import React, { Component } from 'react';
import Ticket from '../../components/Ticket/Ticket.js';
import './TicketsList.sass';

function renderTickets(tickets, stops) {
	return tickets.filter((ticket) => {
		return stops.includes(ticket.stops) || (stops.length === 0)
	}).map((ticket, index) => {
		return <Ticket { ...ticket } key={ index } />
	});
}
export default class TicketsList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="ticketsList">
				{ renderTickets(this.props.tickets, this.props.stops) }
			</section>
		);
	}
}
