import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbottom = () => {
  return (
    <div className='bottom-nav'>
      {' '}
      <NavLink
        to='/'
        exact
        className='bottom-nav-link'
        activeClassName='bottom-nav-link-active'
      >
        <i className='material-icons bottom-nav-icon'>home</i>
        <span className='bottom-nav-text'>בית</span>
      </NavLink>
      <NavLink
        to='/programs'
        exact
        className='bottom-nav-link'
        activeClassName='bottom-nav-link-active'
      >
        <i className='material-icons bottom-nav-icon'>fitness_center</i>
        <span className='bottom-nav-text'>אימונים</span>
      </NavLink>
      <NavLink
        to='/address'
        exact
        className='bottom-nav-link'
        activeClassName='bottom-nav-link-active'
      >
        <i className='material-icons bottom-nav-icon'>room</i>
        <span className='bottom-nav-text'>הגעה</span>
      </NavLink>
    </div>
  );
};

export default Navbottom;
