import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import EventDetail from '../EventDetail/EventDetail';
import './sideModule.css';
import events from '../mockData';

const SideModule = () => (
	<div id="side-module">
		<Contact name="Tom Verdun" />
		<div>
			{events.map(event => (
				<EventDetail
					key={event.id}
					id={event.id}
					date={event.date}
					time={event.time}
					streetAddress={event.streetAddress}
					cityState={event.cityState}
					status={event.status}
				/>
			))}
		</div>
	</div>
);

EventDetail.propTypes = {
	events: PropTypes.object
};

export default SideModule;
