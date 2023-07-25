import React from 'react'
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
    
const ContactForm = () => {

    const contactFormSchema = yup.object().shape({
        name: yup.string().required('Please enter a name'),
        email: yup.string().email('Invalid email').required('Email required'),
        subject: yup.string().required('Please enter a subject'),
        receiver_name: yup.string().required('Please provide a receiver name'),
        message: yup.string().required('Please write a message'),
    });

    return (
        <React.Fragment>
            <Formik initialValues={{
                name: '',
                email: '',
                subject: '',
                receiver_name: '',
                message: '',
            }}
            validationSchema={contactFormSchema} 
            onSubmit={values => {
                console.log(values);
              }}
       >
                {({ errors, touched, values, handleChange }) => (
                <Form id="sub-form">
                        <div className="row">
                            <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" name="name"    placeholder="Name" value={values.name} onChange={handleChange} />
                            {errors.name &&
                                touched.name &&
                            <span className="input-feedback">
                                {errors.name}
                            </span>}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="Subject" name="subject"  placeholder="Subject" value={values.subject} onChange={handleChange} />
                            {errors.subject &&
                            touched.subject &&
                            <span className="input-feedback">
                                {errors.subject}
                            </span>}
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" value={values.email} onChange={handleChange} id="email" name="email" placeholder="Email" />
                            {errors.email &&
                            touched.email &&
                            <span className="input-feedback">
                                {errors.email}
                            </span>}
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                            <textarea className="form-control" placeholder="message" name="message" value={values.message} onChange={handleChange} id="message"></textarea>
                            {errors.message &&
                            touched.message &&
                            <span className="input-feedback">
                                {errors.message}
                            </span>}
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-form">Contact Us</button>
                        </div>
                        <div className="alert d-none"></div>
                    </div>
                    </div>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default ContactForm
