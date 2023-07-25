import React from 'react'
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

const QuoteForm = () => {

    const quoteFormSchema = yup.object().shape({
        name: yup.string().required('Please enter a name'),
        email: yup.string().email('Invalid email').required('Email required'),
        phone: yup.string().min(11).required('Please enter a phone number'),
        postalcode: yup.string().required('Please provide a postal code'),
        serviceType: yup.string().required('Please select an service type'),
        message: yup.string().required('Please write a message'),
        date: yup.string().required('Please select a date'),
        verify: yup.string().required('Please verify'),
    });

    return (
        <React.Fragment>
            <Formik initialValues={{
                name: '',
                email: '',
                phone: '+44',
                postalcode: '',
                serviceType: '',
                message: '',
                date: '',
                verify: '',
            }}
            validationSchema={quoteFormSchema} 
            onSubmit={values => {
                console.log(values);
              }}
       >
                {({ errors, touched, values, handleChange }) => (
                <Form id="sub-form">
                    <div className="row">
                        <div className="col-md-12 row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" name="name" placeholder="Name" value={values.name} onChange={handleChange} />
                                {errors.name &&
                                touched.name &&
                                <span className="input-feedback">
                                    {errors.name}
                                </span>}
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" name="email" placeholder="Email Address" value={values.email} onChange={handleChange} />
                                {errors.email &&
                                touched.email &&
                                <span className="input-feedback">
                                    {errors.email}
                                </span>}
                            </div>                                        
                        </div>

                        <div className="col-md-12 row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} />
                                {errors.phone &&
                                touched.phone &&
                                <span className="input-feedback">
                                    {errors.phone}
                                </span>}
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" name="postalcode" placeholder="Postal Code" value={values.postalcode} onChange={handleChange} />
                                {errors.postalcode &&
                                touched.postalcode &&
                                <span className="input-feedback">
                                    {errors.postalcode}
                                </span>}
                            </div>                                        

                            <div className="alert d-none"></div>
                        </div>

                        <div className="col-md-12 row">
                            <div className="form-group col-md-6 ">
                                <select className="form-control" name="serviceType" value={values.serviceType} onChange={handleChange} style={{height: '50px', borderRadius: '6px'}}>
                                    <option value="">Service Type</option>
                                    <option>Regular Cleaning</option>
                                    <option>Deep Cleaning</option>
                                    <option>End of tenancy cleaning</option>
                                    </select>
                                    {errors.serviceType &&
                                    touched.serviceType &&
                                    <span className="input-feedback">
                                        {errors.serviceType}
                                    </span>}
                            </div>
                            <div className="form-group col-md-6">
                                <input type="date" className="form-control" name="date" placeholder="Date" value={values.date} onChange={handleChange} />
                                    {errors.date &&
                                    touched.date &&
                                    <span className="input-feedback">
                                        {errors.date}
                                    </span>}
                            </div>
                        </div>

                        <div className="form-group col-md-12">
                            <textarea className="form-control" rows={4} placeholder="Special Requirements" value={values.message} onChange={handleChange} name="message"></textarea>
                                {errors.message &&
                                touched.message &&
                                <span className="input-feedback">
                                    {errors.message}
                                </span>}
                        </div>
                        <div className="col-md-6 form-group center">
                            <input type="text" className="form-control" name="verify" placeholder="21+9 = ?" value={values.verify} onChange={handleChange} />
                            {errors.verify &&
                            touched.verify &&
                            <span className="input-feedback">
                                {errors.verify}
                            </span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-form text-uppercase">Get Quote</button>
                    </div>
                </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default QuoteForm
