import React from 'react';

import './Contact.scss';
import broken from '../../assests/broken.png';

const ContactPage = () => (
    <div className="contact-container">
        <h1 className='contact-title'>NOTHING HERE AT THE MOMENT...</h1>
        <span className='broken-image'><img src={broken} alt='broken'/></span>
    </div>
);

export default ContactPage;