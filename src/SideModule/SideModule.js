import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import EventDetail from '../EventDetail/EventDetail';
import './sideModule.css';
import events from '../mockData';

const SideModule = () => (
  <div id="sideModule">
  	<Contact name="Tom Verdun" />
  	{events.map(event => (
    	<EventDetail
        date={event.date}
        time={event.time}
        streetAddress={event.streetAddress}
        cityState={event.cityState}
        status={event.status}
      />
		))}
  </div>
);

EventDetail.propTypes = {
  events: PropTypes.object
};

export default SideModule;
