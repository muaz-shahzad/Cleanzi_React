import React from 'react'
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

const ForgetPasswordForm = () => {

    const forgotPasswordFormSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email required'),
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
            validationSchema={forgotPasswordFormSchema} 
            onSubmit={values => {
                console.log(values);
              }}
       >
                {({ errors, touched, values, handleChange }) => (
                <Form>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" id="inputEmail3" value={values.email} onChange={handleChange} placeholder="Email" />
                    {errors.email &&
                    touched.email &&
                    <span className="input-feedback">
                        {errors.email}
                    </span>}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-form">submit</button>
                </div>
                </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default ForgetPasswordForm
