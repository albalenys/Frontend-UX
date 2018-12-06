import React from 'react';
import PropTypes from 'prop-types';
import './eventDetail.css';

const EventDetail = ({
	date,
	streetAddress,
	time,
	cityState,
	status
}) => {
	const displayButton = () => {
		let text;

		switch(status) {
			case 'full':
				text = "This event is full";
				break;
			case 'signedUp':
				text = "Signed up";
				break;
			case 'available':
				text = "I'd like to attend!";
		}

		return <button>{text}</button>;
	};

  return (
  	<div className="eventDetail">
	  	<div>
		  	<p>
		  		{date}<br/>
					{streetAddress}
				</p>
				<p>
					{time}<br/>
					{cityState}
				</p>
			</div>
			<div>
				{displayButton()}
			</div>
	  </div>
	);
};

EventDetail.propTypes = {
	date: PropTypes.string,
  streetAddress: PropTypes.string,
  time: PropTypes.string,
  cityState: PropTypes.string,
  status: PropTypes.string
};

export default EventDetail;
