import * as React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { BookServiceContext } from '../../context/BookService';

const QuickBookingForm = () => {
    const BookService = React.useContext(BookServiceContext);
    const history = useHistory();
    
    const QuickFormSchema = yup.object().shape({
        postalCode: yup.string().required('Please enter a postal code'),
        startDate: yup.string().required('Please select a date'),
        startTime: yup.string().required('Please enter a start time'),
    });

    return (
        <React.Fragment>
           <div className="row">
                <div className="col-lg-12 wow fadeInLeft" data-wow-delay="0s">
                    <div className="cz_form">
                    <h2>Book Now</h2>
                    <Formik initialValues={{
                            postalCode: '',
                            startDate: '',
                            startTime: '8:00',
                        }}
                        validationSchema={QuickFormSchema} 
                        onSubmit={values => {
                            BookService.setTimeFormData({
                                startTime:values.startTime,
                                startDate:values.startDate,
                            });
                            BookService.setPersonalInfoFormData({
                                postalCode:values.postalCode,
                            });
                            history.push('/book-service');
                        }}>
                            {({ errors, touched, values, handleChange }) => (
                                <Form >
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="postalCode" placeholder="Postal Code*" value={values.postalCode} onChange={handleChange} />
                                        {errors.postalCode &&
                                        touched.postalCode &&
                                        <span className="input-feedback">
                                            {errors.postalCode}
                                        </span>}        
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">When do you need the services?</label>
                                        <input type="date" className="form-control" name="startDate" value={values.startDate} onChange={handleChange} />
                                        {errors.startDate &&
                                        touched.startDate &&
                                        <span className="input-feedback">
                                            {errors.startDate}
                                        </span>}        
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Start Time</label>
                                        <select className="form-control" name="startTime" value={values.startTime} onChange={handleChange}>
                                            <option>8:00</option>
                                            <option>8:30</option>
                                            <option>9:00</option>
                                            <option>9:30</option>
                                            <option>10:00</option>
                                            <option>10:30</option>
                                            <option>11:00</option>
                                            <option>11:30</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-form">Book Now</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div> 
        </React.Fragment>
    )
}

export default QuickBookingForm
