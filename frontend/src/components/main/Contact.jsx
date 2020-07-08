import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../store/contact/actions';

import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../shared/Error';

Modal.setAppElement('#root');

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Must be grater then two characters')
    .max(255, 'Must be shorter then 255 characters ')
    .required('הכנס שם מלא'),
  email: Yup.string()
    .email('Must be a valid email address')
    .required('הכנס אימייל'),
  age: Yup.number().required('הכנס את גילך'),
  type: Yup.string().required('הכנס את סוג האימון הרצוי'),
  gender: Yup.string().required('הכנס את מגדרך'),
  phone: Yup.string()
    .matches(phoneRegExp, 'נא הכנס מספר טלפון תקין')
    .required('הכנס מספר טלפון')
});

class Contact extends React.Component {
  state = { success: false, name: '' };

  onSuccess = (name) => this.setState({ success: true, name });

  render() {
    const { success, name } = this.state;
    const { openModal, onClose } = this.props;
    return (
      <Modal
        isOpen={openModal}
        onRequestClose={() => onClose()}
        className={'modal'}
        overlayClassName={'overlay'}
      >
        <div className='contact'>
          <div className='contact-header'>
            <h2>השאירו פרטים ואחזור אליכם</h2>
          </div>
          {success ? (
            <div className='success-msg'>
              <h3>
                תודה <span>{name}</span>
              </h3>
              <p>נציגנו יחזור אליך בהקדם</p>
              <button onClick={() => onClose()} className='btn btn-dark'>
                אישור
              </button>
            </div>
          ) : (
            <Formik
              initialValues={{
                fullName: '',
                age: '',
                phone: '',
                email: '',
                gender: '',
                type: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const { fullName, age, phone, email, gender, type } = values;
                setSubmitting(true);
                const newContact = {
                  fullName,
                  age,
                  phone,
                  email,
                  gender,
                  type
                };
                this.props.addContact(newContact);
                this.onSuccess(fullName);
                resetForm();
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className='contact-form'>
                    <div>
                      <input
                        type='text'
                        placeholder='שם מלא'
                        name='fullName'
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          touched.fullName && errors.fullName
                            ? 'has-error'
                            : null
                        }
                      />
                      <Error
                        touched={touched.fullName}
                        message={errors.fullName}
                      />
                    </div>

                    <div>
                      <input
                        type='number'
                        placeholder='גיל'
                        name='age'
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          touched.age && errors.age ? 'has-error' : null
                        }
                      />
                      <Error touched={touched.age} message={errors.age} />
                    </div>
                    <div>
                      <input
                        type='tel'
                        placeholder='טלפון'
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          touched.phone && errors.phone ? 'has-error' : null
                        }
                      />
                      <Error touched={touched.phone} message={errors.phone} />
                    </div>
                    <div>
                      <input
                        type='text'
                        placeholder='אימייל'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          touched.email && errors.email ? 'has-error' : null
                        }
                      />
                      <Error touched={touched.email} message={errors.email} />
                    </div>
                    <div className='choises'>
                      <select
                        name='gender'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.gender}
                        className={
                          touched.gender && errors.gender ? 'has-error' : null
                        }
                      >
                        <option value='' disabled hidden>
                          מגדר
                        </option>
                        <option value='female'>נקבה</option>
                        <option value='male'>זכר</option>
                      </select>
                      <select
                        name='type'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.type}
                        className={
                          touched.type && errors.type ? 'has-error' : null
                        }
                      >
                        <option value='' disabled hidden>
                          סוג אימון
                        </option>
                        <option value='personal'>אישי</option>
                        <option value='group'>קבוצתי</option>
                      </select>
                      <Error touched={touched.gender} message={errors.gender} />
                      <Error touched={touched.type} message={errors.type} />
                    </div>
                  </div>
                  <button
                    className='btn btn-dark'
                    disabled={isSubmitting}
                    type='submit'
                  >
                    שלח
                  </button>
                </form>
              )}
            </Formik>
          )}
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = {
  addContact
};

export default connect(null, mapDispatchToProps)(Contact);
