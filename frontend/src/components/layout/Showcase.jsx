import React from 'react';
import Contact from '../main/Contact';

class Showcase extends React.Component {
  state = { openModal: false };

  onClose = () => this.setState({ openModal: false });
  onOpen = () => this.setState({ openModal: true });

  render() {
    return (
      <section id='showcase'>
        <div className='container'>
          <h1>ברוכים הבאים</h1>
          <p>אימונים אישיים וקבוצתיים</p>
          <p>לכל שכבות הגיל</p>
          <p>
            <i className='fas fa-dumbbell fa-2x'></i>
          </p>
          <button onClick={this.onOpen} className='btn'>
            הירשמו עכשיו
          </button>
        </div>

        <Contact openModal={this.state.openModal} onClose={this.onClose} />
      </section>
    );
  }
}

export default Showcase;
