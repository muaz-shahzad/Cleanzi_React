import React, { useState, useContext, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import BookingSummary from './BookingSummary';
import { FormPropInterface } from '../../../Interfaces/FormProp';
import { BookServiceContext } from '../../../context/BookService';
import { PersonalInfoFormInterface } from '../../../Interfaces/BookService';

const PersonalInfoForm = (props:FormPropInterface) => {
    const BookService = useContext(BookServiceContext);
    const [bookServiceLocalState, setBookServiceLocalState] = useState<PersonalInfoFormInterface>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: 0,
        country: '',
        updates: '',
    });
    
    useEffect(()=>{
        setBookServiceLocalState(BookService.personalInfoForm);
    },[]);

    useEffect(() => {
        BookService.setPersonalInfoFormData(bookServiceLocalState);
    }, [bookServiceLocalState]);
    
    
    const personalInfoFormSchema = yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('last Name is required'),
        email: yup.string().email('Please enterr a valid email address').required('Email Address is required'),
        phone: yup.string().required('Phone is required'),
        postalCode: yup.string().required('Postal Code is required'),
        address: yup.string().required('Address is required'),
        city: yup.string().required('City is required'),
        country: yup.string().required('Country is required'),
    });

    const handleChange=(e)=>{
        if(e.target.name == 'postalCode'){
            setBookServiceLocalState({...bookServiceLocalState,[e.target.name]:parseFloat(e.target.value)})
        }else{
            setBookServiceLocalState({...bookServiceLocalState,[e.target.name]:e.target.value})
        }
    }

    return (
        <React.Fragment>
            <Formik initialValues={BookService.personalInfoForm}
            validationSchema={personalInfoFormSchema} 
            onSubmit={values => {
                BookService.setPersonalInfoFormData(values);
                props.nextStepHandler();
              }}
       >
                {({ errors, touched, values, handleChange }) => (
                <Form id="msform">
                <fieldset>
                    <div className="form-card">
                        <div className="row">
                            <div className="col-7">
                                <h2 className="fs-title">Personal Information:</h2>
                            </div>
                            <div className="col-5">
                                <h2 className="steps">Step 3 - 4</h2>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="firstName" placeholder="First Name*" value={values.firstName} onChange={handleChange} />
                                        {errors.firstName &&
                                        touched.firstName &&
                                        <span className="input-feedback">
                                            {errors.firstName}
                                        </span>}        
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="lastName" placeholder="Last Name*" value={values.lastName} onChange={handleChange} />
                                        {errors.lastName &&
                                        touched.lastName &&
                                        <span className="input-feedback">
                                            {errors.lastName}
                                        </span>}        
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="email" className="form-control"
                                            placeholder="Email Address*" name="email" value={values.email} onChange={handleChange} />
                                        {errors.email &&
                                        touched.email &&
                                        <span className="input-feedback">
                                            {errors.email}
                                        </span>}        
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone*" value={values.phone} onChange={handleChange} />
                                        {errors.phone &&
                                        touched.phone &&
                                        <span className="input-feedback">
                                            {errors.phone}
                                        </span>}        
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="postalCode" placeholder="Postal Code*" value={values.postalCode} onChange={handleChange} />
                                        {errors.postalCode &&
                                        touched.postalCode &&
                                        <span className="input-feedback">
                                            {errors.postalCode}
                                        </span>}        
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="address" placeholder="Address*" value={values.address} onChange={handleChange} />
                                        {errors.address &&
                                        touched.address &&
                                        <span className="input-feedback">
                                            {errors.address}
                                        </span>}        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <select className="form-control" name="city" value={values.city} onChange={handleChange}>
                                            <option value="">City</option>
                                            <option value="Birmingham">Birmingham</option>
                                            <option value="Leeds">Leeds</option>
                                        </select>
                                        {errors.city &&
                                        touched.city &&
                                        <span className="input-feedback">
                                            {errors.city}
                                        </span>}        
                                    </div>
                                    <div className="col-md-6
                                     form-group">
                                        <select className="form-control" name="country" value={values.country} onChange={handleChange}>
                                            <option value="">Country</option>
                                            <option value="UK">UK</option>
                                        </select>
                                        {errors.country &&
                                        touched.country &&
                                        <span className="input-feedback">
                                            {errors.country}
                                        </span>}        
                                    </div>
                            <label htmlFor="updates">
                                <input type="checkbox" id="updates" style={{width: 'auto'}} value={values.updates} onChange={handleChange} />
                                Send me updates and special offers?
                            </label>
                            </div>
                            
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <BookingSummary />
                            </div>

                        </div>
                    </div>
                    <div className="nav-buttons">
                        <input type="submit" name="next" onClick={props.scrollToTop} className="next action-button" value="Next" /> 
                        <input type="button" name="previous" className="previous action-button-previous"
                                value="Previous" onClick={props.previousStepHandler} />
                    </div>
                </fieldset>
                </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default PersonalInfoForm
