import React from 'react';
import PropTypes from 'prop-types';
import './contact.css';

const Contact = ({name}) => (
  <div id="contact">
  	<div id="contactPic"/>
    <div>
    	<b>Contact</b><br/>
    	{name}
    </div>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string
};


export default Contact;
