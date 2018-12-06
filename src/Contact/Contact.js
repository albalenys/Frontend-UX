import React from 'react';
import PropTypes from 'prop-types';
import './contact.css';

const Contact = ({name}) => (
  <header id="contact">
    <b>Contact</b><br/>
    {name}
  </header>
);

Contact.propTypes = {
  name: PropTypes.string
};


export default Contact;
