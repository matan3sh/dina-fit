import React from 'react';
import { connect } from 'react-redux';
import { loadContacts, deleteContact } from '../../store/contact/actions';

import ContactList from '../dashboard/ContactList';

class Dashboard extends React.Component {
  async componentDidMount() {
    await this.props.loadContacts();
  }

  onDelete = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    const { contacts } = this.props;
    return (
      <>
        {!contacts.length ? (
          <div style={noContacts}>אין נרשמים כרגע</div>
        ) : (
          <ContactList contacts={contacts} onDelete={this.onDelete} />
        )}
      </>
    );
  }
}

const noContacts = {
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto',
  alignItems: 'center',
  height: '50vh',
  fontFamily: 'Varela',
  fontWeight: '900',
  fontSize: '1.4rem'
};

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});

const mapDispatchToProps = {
  loadContacts,
  deleteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
