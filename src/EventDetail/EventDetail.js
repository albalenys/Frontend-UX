import React from 'react';
import PropTypes from 'prop-types';
import './eventDetail.css';

const EventDetail = ({
	id,
	date,
	streetAddress,
	time,
	cityState,
	status
}) => {
	const displayButton = () => {
		let text;
		let className;

		switch(status) {
			case 'full':
				text = 'This event is full';
				className = '';
				break;
			case 'signedUp':
				text = <span>&#10003; Signed up</span>;
				className = 'signed-up-button';
				break;
			case 'available':
				text = "I'd like to attend!";
				className = 'available-button';
		}

		return (
			<button className={className}>
				{text}
			</button>
		);
	};

	let borderFadeClass = (id === 1) ? 'border-fade' : '';
	let fullEventClass = (status === 'full') ? 'full-event' : '';

  return (
  	<div>
	  	<div className={`event-detail ${fullEventClass}`}>
		  	<div>
			  	<div className={"event-time"}>
			  		<b>{date}</b><br/>
			  		{time}
					</div>
					<div className="event-address">
						{streetAddress}<br/>
						<b>{cityState}</b>
					</div>
				</div>
				<div>
					{displayButton()}
				</div>
		  </div>
		  <div id={borderFadeClass}>
		  </div>
	  </div>
	);
};

EventDetail.propTypes = {
	id: PropTypes.number,
	date: PropTypes.string,
  streetAddress: PropTypes.string,
  time: PropTypes.string,
  cityState: PropTypes.string,
  status: PropTypes.string
};

export default EventDetail;
