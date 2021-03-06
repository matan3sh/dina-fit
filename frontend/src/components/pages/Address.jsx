import React from 'react';
import Showcase from '../layout/Showcase';
import Map from '../map/Map';

import waze from '../../assets/img/waze.png';
const Address = () => {
  return (
    <>
      <Showcase />
      <div className='map'>
        <div className='address'>
          <h2>מרכז דפני, סנונית 18, נס ציונה.</h2>
        </div>
        <Map />
      </div>
      <div className='waze'>
        <div className='waze-btn'>
          <a href='waze://?q=סנונית%2018,%20נס%20ציונה'>
            <img src={waze} alt='waze' />
          </a>
        </div>
      </div>
      <div className='more-height'></div>
    </>
  );
};

export default Address;
