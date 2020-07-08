import React from 'react';
import ContactPreview from './ContactPreview';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className='contact-list-wrapper'>
      {contacts.map((contact, index) => (
        <ContactPreview key={index} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ContactList;
