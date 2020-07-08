import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../store/auth/actions';

import Showcase from '../layout/Showcase';
import portrait from '../../assets/img/portrait.jpg';

class Home extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <>
        <Showcase />
        <div className='home-wrapper'>
          <div className='card'>
            <div className='card-header'>
              <img src={portrait} alt='' />
            </div>
            <div className='card-body'>
              <h4>
                {' '}
                היי אני דינה שלומוב בת 27 בעלת הסמכה עיצוב,אירובי וקיקבוקס.{' '}
                <br />
                לשעבר ספורטאית אולימפית ומדריכת כושר בצבא. מאמנת,מתאמנת ,חיה
                ונושמת ספורט מאז ומעולם. <br />
                מדריכה קבוצות ואימונים אישיים, מאמנת hiit, אימונים פונקציונלים,
                עיצוב וקיקבוקס.
              </h4>
              <div className='social-media'>
                <a
                  href='https://www.instagram.com/dina_shlomov/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-instagram fa-2x'></i>
                </a>
                <a
                  href='https://www.facebook.com/Dina-Fitness-Trainer-%D7%93%D7%99%D7%A0%D7%94-%D7%9E%D7%90%D7%9E%D7%A0%D7%AA-%D7%9B%D7%95%D7%A9%D7%A8-111133920638113'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-facebook fa-2x'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
