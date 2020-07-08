import React from 'react';
import Contact from '../main/Contact';

import img1 from '../../assets/img/trainer-img1.jpg';
import img2 from '../../assets/img/trainer-img2.jpg';
import img3 from '../../assets/img/trainer-img3.jpg';

class Programs extends React.Component {
  state = { openModal: false };

  onClose = () => this.setState({ openModal: false });
  onOpen = () => this.setState({ openModal: true });

  render() {
    return (
      <section className='programs-wrapper'>
        <div className='program-card'>
          <div className='card-header'>
            <img src={img1} alt='' />
          </div>
          <div className='card-body'>
            <span className='tag tag-teal'>עיצוב וחיטוב</span>
            <h4 className='program-desc'>
              אימון המתמקד בחיזוק והידוק שבהם אנחנו רוצים יותר להתמקד באזורים
              כמו ירכיים, בטן, ישבן, חזה, זרועות ורצפת אגן .על ידי כיווץ והידוק
              של השרירים הרפויים, אנו מעלים את הטונוס השרירי ובכך מקבלות מראה
              מעוצב ומהודק.
            </h4>
            <button className='btn btn-dark' onClick={this.onOpen}>
              הירשם
            </button>
          </div>
        </div>
        <div className='program-card'>
          <div className='card-header'>
            <img src={img2} alt='' />
          </div>
          <div className='card-body'>
            <span className='tag tag-teal'>פונקציואנלי</span>
            <h4 className='program-desc'>
              מאפשר עבודה על קבוצות שריר רבות בו זמנית ועל הדרך מרכיבי כושר רבים
              באימון אחד . מאפשר הוצאת קלוריות גבוהה ודורש פחות זמן מאימון רגיל
              .
            </h4>
            <button className='btn btn-dark' onClick={this.onOpen}>
              הירשם
            </button>
          </div>
        </div>
        <div className='program-card'>
          <div className='card-header'>
            <img src={img3} alt='' />
          </div>
          <div className='card-body'>
            <span className='tag tag-teal'>קיקבוקס</span>
            <h4 className='program-desc'>
              אימוני אירובי בדופק גבוה שבהם מתרגלים טכניקות אגרופים, מכות באוויר
              יחד עם מוזיקה קצבית שלפיה יהיה הקצב של האימון. משפר את רמת
              קואורדינציה ושיפור היציבה של הגוף .
            </h4>
            <button className='btn btn-dark' onClick={this.onOpen}>
              הירשם
            </button>
          </div>
        </div>
        <Contact openModal={this.state.openModal} onClose={this.onClose} />
      </section>
    );
  }
}

export default Programs;
