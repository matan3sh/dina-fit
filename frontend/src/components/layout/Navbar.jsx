import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../store/auth/actions';

const Navbar = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <nav>
      <ul>
        <li className='logo'>
          <Link to='/'>
            {' '}
            <span>Dina</span>Fit
          </Link>
        </li>
        <li className='logo-large'>
          <Link to='/'>
            {' '}
            <span>Dina</span>Fitness Trainer
          </Link>
        </li>
        <li className='phone-number'>
          <h2>
            <span className='number'>052-6412792 </span>
            <span className='hide'>התקשרו עכשיו </span>
            <Link to='/login'>
              <i className='fas fa-phone-square'></i>
            </Link>
          </h2>
        </li>
        <div className='items'>
          <li>
            <NavLink to='/' exact activeClassName='active-nav-link'>
              דף הבית
            </NavLink>
          </li>
          <li>
            <NavLink to='/programs' exact activeClassName='active-nav-link'>
              סוגי אימונים
            </NavLink>{' '}
          </li>
          <li>
            <NavLink to='/address' exact activeClassName='active-nav-link'>
              הגעה לאימון
            </NavLink>{' '}
          </li>
        </div>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = {
  loadUser
};

export default connect(null, mapDispatchToProps)(Navbar);
