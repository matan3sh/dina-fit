import React from 'react';

const ContactPreview = ({ contact, onDelete }) => {
  return (
    <div className='pricing-plan'>
      <div className='pricing-plan__header'>
        <h1 className='pricing-plan__title'>{contact.fullName}</h1>
        <h2 className='pricing-plan__summary'>
          {contact.type === 'personal' ? 'אימון אישי' : 'אימון קבוצתי'}
        </h2>
      </div>
      <div className='pricing-plan__description'>
        <ul className='pricing-plan__list'>
          <li className='pricing-plan__feature'>
            <span>מגדר - </span>
            {contact.gender === 'female' ? 'נקבה' : 'זכר'}
          </li>
          <li className='pricing-plan__feature'>
            <span>אימייל - </span> {contact.email}
          </li>
          <li className='pricing-plan__feature'>
            <span>מספר טלפון - </span> {contact.phone}
          </li>
        </ul>
        <div className='buttons' onClick={() => onDelete(contact._id)}>
          <i className='fas fa-trash'></i>
        </div>
      </div>
    </div>
  );
};

export default ContactPreview;
